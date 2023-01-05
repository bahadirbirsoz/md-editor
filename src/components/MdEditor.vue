<template>
  <v-card>
    <md-editor-toolbar></md-editor-toolbar>
    <v-card-text>
      <div contenteditable="true"
           @keyup="onKeyUp"
           @keydown="onKeyDown"
           @keypress="onKeyPress"
           @click="onClick"
      >
        <md-element v-for="(e,i) in element.children" :element="e" :key="i"></md-element>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MdEditorToolbar from '@/components/Toolbar/MdEditorToolbar.vue';
import { IMdElement } from '@/store';

@Component({
  components: { MdEditorToolbar },
})
export default class MdEditor extends Vue {
  get element(): IMdElement {
    return this.$store.state.editorContent;
  }

  onKeyDown(e: KeyboardEvent) {
    this.$store.dispatch('onKeyDown', e);
  }

  onKeyPress(e: KeyboardEvent) {
    e.preventDefault();
    this.$store.dispatch('onKeyPress', e);
  }

  onKeyUp(e: KeyboardEvent) {
    e.preventDefault();
    this.$store.dispatch('onKeyUp', e);
  }

  onClick(e: MouseEvent) {
    e.preventDefault();
    this.$store.dispatch('onClick', e);
  }
}
</script>

<style scoped>

</style>
