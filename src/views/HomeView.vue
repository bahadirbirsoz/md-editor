<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <md-editor></md-editor>
      </v-col>
      <v-col cols="6">
        <code>
          <pre>{{ $store.state.document }}</pre>
        </code>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import MdEditor from '@/components/MdEditor.vue';

export default Vue.extend({
  name: 'HomeView',
  components: { MdEditor },
});
</script>
