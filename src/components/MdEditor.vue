<template>
  <v-card>
    <v-card-title>
      <md-editor-toolbar></md-editor-toolbar>
    </v-card-title>
    <v-card-text>
      <md-document></md-document>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MdEditorToolbar from '@/components/Toolbar/MdEditorToolbar.vue';

@Component({
  components: { MdEditorToolbar },
})
export default class MdEditor extends Vue {
}
</script>

<style scoped>

</style>
