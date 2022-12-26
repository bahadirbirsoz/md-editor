<template>
  <v-container>
    <v-select v-model="value" :items="formats"></v-select>
    <md-editor-toolbar-item v-for="item in actions" :item="item"
                            :key="item.icon"></md-editor-toolbar-item>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MdEditorToolbarItem from '@/components/Toolbar/MdEditorToolbarItem.vue';

@Component({
  components: { MdEditorToolbarItem },
})
export default class MdToolbarFormat extends Vue {
  value = 'paragraph';

  actions = [
  ];

  formats = [
    {
      value: 'paragraph',
      text: 'Paragraph',
    },
    {
      value: 'blockquote',
      text: 'Blockquote',
    },
    {
      value: 'h1',
      text: 'Header 1',
    },
    {
      value: 'h2',
      text: 'Header 2',
    },
    {
      value: 'h3',
      text: 'Header 3',
    },
    {
      value: 'h4',
      text: 'Header 4',
    },
    {
      value: 'h5',
      text: 'Header 5',
    },
    {
      value: 'h6',
      text: 'Header 6',
    },
    {
      value: 'h7',
      text: 'Header 7',
    },
  ];
}
</script>

<style scoped>

</style>
