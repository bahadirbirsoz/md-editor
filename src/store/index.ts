import Vue from 'vue';
import Vuex, { ActionContext } from 'vuex';

Vue.use(Vuex);

export interface IMdToolbar {
  format: {
    name: string;
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underlined: boolean;
  },
  actions: {
    table?: {
      rows: number;
      cols: number;
    };
    link?: {
      text: string;
      url?: string;
    };
    image?: {
      text?: string;
      url?: string;
      file?: Blob;
    },
  },
}

export interface IToolbarItem {
  icon?: string;
  disabled?: boolean;
  pressed?: boolean;
}

export interface IMdElement {
  name?: string;
  children?: Array<IMdElement>;
  content?: string;
  bold?: boolean;
  italic?: boolean;
  lineBreak?: boolean;
}

export interface IMdVueComponent extends Vue {
  element: IMdElement;
}

export interface IVueNode extends Node {
  __vue__: IMdVueComponent;
}

interface IMdEditorPosition {
  target: IVueNode;
  offset: number;
}

interface IMdSelection {
  focusComponent: IVueNode;
  focusOffset: number;
  anchorComponent: IVueNode;
  anchorOffset: number;
  anchorNode: Node;
  focusNode: Node;
}

const RangeHelper = {
  getSelection(): IMdSelection {
    const selection = window.getSelection();
    if (!selection || !selection.focusNode || !selection.anchorNode) throw Error('no selection');
    const vueNodes = [selection.focusNode, selection.anchorNode].map((node: Node) => {
      let investigationNode: IVueNode = node as IVueNode;
      while (investigationNode) {
        if (investigationNode.__vue__) {
          return investigationNode;
        }
        if (investigationNode.parentNode) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          investigationNode = investigationNode.parentNode as IVueNode;
        }
      }
      throw Error('no selection');
    });
    // document.querySelectorAll('*');
    return {
      focusNode: selection.focusNode,
      focusComponent: vueNodes[0],
      focusOffset: selection.focusOffset,
      anchorNode: selection.anchorNode,
      anchorComponent: vueNodes[1],
      anchorOffset: selection.anchorOffset,
    };
  },
  setEditorPosition(position: IMdEditorPosition) {
    const wSelection = window.getSelection();
    if (!wSelection) {
      return;
    }
    const range = new Range();
    range.collapse(true);
    position.target.__vue__.$nextTick(() => {
      range.setStart(
        position.target.childNodes[0],
        position.offset,
      );
      wSelection.removeAllRanges();
      wSelection.addRange(range);
    });
  },
  setEditorRange(positionStart: IMdEditorPosition, positionEnd: IMdEditorPosition) {
    const range = new Range();

    range.setStart(positionStart.target, positionStart.offset);
    range.setEnd(positionEnd.target, positionEnd.offset);

    // apply the selection, explained later below
    const selection = document.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
  },
};

function splice(source: string, offset: number, text: string, removeCount = 0): string {
  const calculatedOffset = offset < 0 ? source.length + offset : offset;
  return source.substring(0, calculatedOffset)
    + text + source.substring(calculatedOffset + removeCount);
}

interface IMdEditorState {
  editorContent: IMdElement;
  selection?: IMdSelection;
  range: IMdEditorPosition | null;
}

export default new Vuex.Store<IMdEditorState>({
  state: {
    range: null,
    editorContent: {
      children: [
        {
          name: 'paragraph',
          children: [
            {
              name: 'content',
              content: 'asdadad',
            },
          ],
          bold: false,
        },
      ],
    },
  },
  getters: {
    toolbar: (state, getters, rootState): IMdToolbar => ({
      format: {
        bold: state.selection
          ? (state.selection.anchorComponent.__vue__.element.bold
          && state.selection.focusComponent.__vue__.element.bold) || false : false,
        italic: false,
        name: 'paragraph',
        underlined: false,
        strikethrough: false,
      },
      actions: {},
    }),
  },
  mutations: {
    setEditorContent(state: IMdEditorState, editorContent: IMdElement) {
      console.log('commit works', editorContent);
      state.editorContent = editorContent;
      console.log(editorContent);
    },
    updateContent(state: IMdEditorState, router: IMdEditorState) {
      if (
        typeof state.editorContent.children !== 'undefined'
        && typeof state.editorContent.children[0] !== 'undefined'
        && typeof state.editorContent.children[0].children !== 'undefined'
        && typeof state.editorContent.children[0].children[0] !== 'undefined'
      ) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 10; i += 1) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        state.editorContent.children[0].children[0].content = result;
      }
    },
    setSelection(state: IMdEditorState, selection: IMdSelection) {
      state.selection = selection;
    },
    setRangeUpdateHook(state: IMdEditorState, range?: IMdEditorPosition) {
      state.range = range ?? null;
    },

  },
  actions: {
    toolbarAction(ctx: ActionContext<IMdEditorState, IMdEditorState>, item: IToolbarItem) {
      switch (item.icon) {
        case 'mdi-format-bold':

          break;
        default:
          console.warn('Unhandled toolbar action', item);
      }
    },
    onKeyDown(ctx: ActionContext<IMdEditorState, IMdEditorState>, payload: KeyboardEvent) {
      const selection = RangeHelper.getSelection();
      console.log('onKeyDown action', selection, payload);
      // if (payload.key) {
      //   selection.anchorComponent.__vue__.element.content += 'a';
      // }
      // this.commit('updateContent');
    },
    onKeyUp(ctx: ActionContext<IMdEditorState, IMdEditorState>, payload: KeyboardEvent) {
      // const range = new Range();
      // range.setStart(selection.anchorNode, selection.focusOffset + 1);
      // range.setEnd(selection.anchorNode, selection.focusOffset + 1);
      if (ctx.state.range) {
        RangeHelper.setEditorPosition(ctx.state.range);
        // const wSelection = document.getSelection();
        // if (wSelection) {
        //   const existingRange = wSelection.getRangeAt(0);
        //   console.log(existingRange, ctx.state.range);
        //   wSelection.removeAllRanges();
        // }
      } else {
        const selection = RangeHelper.getSelection();
        ctx.commit('setSelection', selection);
      }
    },
    onKeyPress(ctx: ActionContext<IMdEditorState, IMdEditorState>, keyboardEvent: KeyboardEvent) {
      // let { selection } = ctx.state;
      // if (!selection) {
      const selection = RangeHelper.getSelection();
      // }
      console.log('onKeyPress action', selection, keyboardEvent);
      const { content } = selection.anchorComponent.__vue__.element;

      switch (keyboardEvent.key) {
        case 'Backspace':
          if (typeof content !== 'undefined') {
            keyboardEvent.preventDefault();
            selection.anchorComponent.__vue__.element.content = splice(
              selection.anchorComponent.__vue__.element.content as string,
              selection.focusOffset - 1,
              '',
              1,
            );
            RangeHelper.setEditorPosition({
              target: selection.anchorComponent,
              offset: selection.focusOffset,
            });
          }
          break;
        case 'Enter':
          console.log(selection.anchorComponent.__vue__.element.content);
          break;
        default:
          if (typeof content !== 'undefined') {
            keyboardEvent.preventDefault();
            selection.anchorComponent.__vue__.element.content = splice(
              selection.anchorComponent.__vue__.element.content as string,
              selection.focusOffset - 1,
              keyboardEvent.key,
            );
            RangeHelper.setEditorPosition({
              target: selection.anchorComponent,
              offset: selection.focusOffset + 1,
            });
          }
          break;
      }
    },
    onClick(ctx: ActionContext<IMdEditorState, IMdEditorState>, payload: PointerEvent) {
      const selection = RangeHelper.getSelection();
      console.log('onClick action', selection, payload);
      // if (selection.anchorComponent.__vue__.element.content) {
      //   selection.anchorComponent.__vue__.element.content += 'a';
      // }
      this.commit('setSelection', selection);
    },
    mouseUp(ctx: ActionContext<IMdEditorState, IMdEditorState>, payload: PointerEvent) {
      console.log(payload);
    },
    mouseDown(ctx: ActionContext<IMdEditorState, IMdEditorState>, payload: PointerEvent) {
      console.log(payload);
    },
  },
  modules: {},
});
