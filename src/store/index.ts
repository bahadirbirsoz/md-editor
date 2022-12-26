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
    table: boolean;
    link: boolean;
    image: boolean;
  },
  image?: {
    text?: string;
    url?: string;
    file?: Blob;
  },
}
export interface IToolbarItem {
  icon?: string;
  disabled?: boolean;
  pressed?: boolean;
}

export interface VueNode extends Node {
  __vue__: Vue;
}

export interface IMdElement {
  name?: string;
  children?: Array<IMdElement>;
  content?: string;
  bold?: boolean;
  italic?: boolean;
  lineBreak?: boolean;
}

interface IMdEditorState {
  document: IMdElement;
  toolbar: IMdToolbar;
}

interface IMdEditorPosition {
  target: Node;
  offset: number;
}

const RangeHelper = {
  setEditorPosition(position: IMdEditorPosition) {
    const range = new Range();

    range.setStart(position.target, position.offset);
    range.setEnd(position.target, position.offset);

    // apply the selection, explained later below
    const selection = document.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
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
export default new Vuex.Store<IMdEditorState>({
  state: {
    toolbar: {
      actions: {
        image: false,
        table: false,
        link: false,
      },
      image: undefined,
      format: {
        name: 'paragraph',
        underlined: false,
        bold: false,
        strikethrough: false,
        italic: false,
      },
    },
    document: {
      name: 'document',
      children: [
        {
          name: 'paragraph',
          children: [
            { content: 'asdasd asdad sa' },
            { content: ' ' },
            {
              content: 'bold',
              bold: true,
            },
            { content: ' ' },
            {
              content: 'itealic',
              italic: true,
            },
            { content: ' ' },
            {
              content: 'bold itealic',
              bold: true,
              italic: true,
            },
            { lineBreak: true },
            { content: 'another line.' },
          ],
        },
        {
          name: 'h1',
          children: [
            { content: 'h1' },
          ],
        },
        {
          name: 'h5',
          children: [
            { content: 'h5' },
          ],
        },
        {
          name: 'table',
          children: [
            {
              name: 'tr',
              children: [
                {
                  name: 'td',
                  children: [
                    { content: 'nr' },
                  ],
                },
                {
                  name: 'td',
                  children: [
                    { content: 'Description' },
                  ],
                },
                {
                  name: 'td',
                  children: [
                    { content: 'Unit Price' },
                  ],
                },
                {
                  name: 'td',
                  children: [
                    { content: 'Unit' },
                  ],
                },
                {
                  name: 'td',
                  children: [
                    { content: 'Total' },
                  ],
                },
              ],
            },
            {
              name: 'tr',
              children: [
                {
                  name: 'td',
                  children: [
                    { content: '1' },
                  ],
                },
                {
                  name: 'td',
                  children: [
                    { content: 'Development' },
                  ],
                },
                {
                  name: 'td',
                  children: [
                    { content: '$100' },
                  ],
                },
                {
                  name: 'td',
                  children: [
                    { content: '3 hrs' },
                  ],
                },
                {
                  name: 'td',
                  children: [
                    { content: '$300' },
                  ],
                },
              ],
            },
            {
              name: 'tr',
              children: [
                {
                  name: 'td',
                  children: [
                    { content: '2' },
                  ],
                },
                {
                  name: 'td',
                  children: [
                    { content: 'Analysis' },
                  ],
                },
                {
                  name: 'td',
                  children: [
                    { content: '$140' },
                  ],
                },
                {
                  name: 'td',
                  children: [
                    { content: '1 hrs' },
                  ],
                },
                {
                  name: 'td',
                  children: [
                    { content: '$140' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
  getters: {
    toolbar: (state, getters, rootState) => state.toolbar,
  },
  mutations: {
    reloadToolbar(state: IMdEditorState) {
      state.toolbar.image = undefined;
    },
    updateContent(state: IMdEditorState, router: IMdEditorState) {
      if (
        typeof state.document.children !== 'undefined'
        && typeof state.document.children[0] !== 'undefined'
        && typeof state.document.children[0].children !== 'undefined'
        && typeof state.document.children[0].children[0] !== 'undefined'
      ) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 10; i += 1) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        state.document.children[0].children[0].content = result;
      }
    },
  },
  actions: {
    toolbarAction(ctx: ActionContext<IMdEditorState, IMdEditorState>, item: IToolbarItem) {
      const selection = window.getSelection();
      console.log(item, selection);
      if (!selection) {
        return;
      }
      let investigationNode = selection.focusNode;
      let found = false;
      while (!found && investigationNode) {
        console.log('investigationNode', investigationNode, [investigationNode, (investigationNode as VueNode).__vue__]);
        investigationNode = investigationNode.parentNode;
      }
      found = true;
    },
    onKeyDown(ctx: ActionContext<IMdEditorState, IMdEditorState>, payload: KeyboardEvent) {
      const selection = window.getSelection();
      console.log('keydown action', payload, selection);
      this.commit('updateContent');
    },
  },
  modules: {},
});
