<template>
  <v-dialog v-model="dialog">
    <template v-slot:activator="{on}">
      <v-btn v-on="on" @click="load">
        <v-icon>mdi-</v-icon>
      </v-btn>
    </template>
    <template v-slot:default>
      <v-card>
        <v-text-field label="Text"></v-text-field>
        <v-text-field label="URL" placeholder="https://"></v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red">Cancel</v-btn>
          <v-btn color="primary">Add Link</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MdToolbarLink extends Vue {
  dialog = false;

  load() {
    console.log(this, 'load:resetForm');
  }

  addImage() {
    console.log(this, 'addImage');
  }
}
</script>

<style scoped>

</style>
