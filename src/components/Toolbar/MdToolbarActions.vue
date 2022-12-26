<template>
  <v-container>
    <v-row v-for="(toolbarRow, rowIndex) in items" :key="rowIndex">
      <md-editor-toolbar-item
        v-for="(item, itemIndex) in toolbarRow"
        :key="itemIndex"
        :item="item"
      ></md-editor-toolbar-item>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MdEditorToolbarItem from '@/components/Toolbar/MdEditorToolbarItem.vue';

@Component({
  components: { MdEditorToolbarItem },
})
export default class MdToolbarActions extends Vue {
  items = [
    [
      { icon: 'mdi-format-italic' },
      { icon: 'mdi-format-underline' },
      { icon: 'mdi-format-bold' },
      { icon: 'mdi-format-strikethrough' },
      { icon: 'mdi-link' },
    ],
    [
      { icon: 'mdi-format-list-bulleted' },
      { icon: 'mdi-format-list-numbered' },
      { icon: 'mdi-table-column-remove' },
      { icon: 'mdi-table-column-plus-before' },
      { icon: 'mdi-table-column-plus-after' },
      { icon: 'mdi-table-row-plus-after' },
      { icon: 'mdi-table-row-plus-before' },
    ],
    [
      { icon: 'mdi-table-row-remove' },
      { icon: 'mdi-table-large-plus' },
      { icon: 'mdi-table-large-remove' },
      { icon: 'mdi-format-align-left' },
      { icon: 'mdi-format-align-center' },
      { icon: 'mdi-format-align-right' },
      { icon: 'mdi-format-quote-open' },
      { icon: 'mdi-file-image' },
      { icon: 'mdi-format-list-checks' },
    ],
  ];
}
</script>

<style scoped>

</style>
