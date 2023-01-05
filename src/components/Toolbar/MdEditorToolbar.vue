<template>
  <div>
      <md-toolbar-format></md-toolbar-format>
      <md-toolbar-actions></md-toolbar-actions>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import MdEditorToolbarItem from '@/components/Toolbar/MdEditorToolbarItem.vue';
import MdToolbarFormat from '@/components/Toolbar/MdToolbarFormat.vue';
import MdToolbarImage from '@/components/Toolbar/MdToolbarImage.vue';
import MdToolbarLink from '@/components/Toolbar/MdToolbarLink.vue';
import MdToolbarActions from '@/components/Toolbar/MdToolbarActions.vue';

@Component({
  components: {
    MdToolbarFormat,
    MdToolbarActions,
    MdToolbarLink,
  },
})
export default class MdEditorToolbar extends Vue {
}
</script>

<style scoped>

</style>
