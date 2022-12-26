<template>
  <v-dialog v-model="dialog">
    <template v-slot:activator="{on}">
      <v-btn v-on="on" @click="load">
        <v-icon>mdi-file-image</v-icon>
      </v-btn>
    </template>
    <template v-slot:default>
      <v-card>
        <v-file-input label="Upload Image"></v-file-input>
        <v-text-field label="URL" placeholder="https://"></v-text-field>
        <v-divider></v-divider>
        <v-text-field label="Alternate Text"></v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" @click="halt">Cancel</v-btn>
          <v-btn color="primary">Add Image</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MdToolbarImage extends Vue {
  dialog = false;

  load() {
    console.log(this, 'load:resetForm');
  }

  halt() {
    this.dialog = false;
  }

  addImage() {
    console.log(this, 'addImage');
  }
}
</script>

<style scoped>

</style>
