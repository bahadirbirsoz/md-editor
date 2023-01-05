<template>
  <v-container>
    <v-row>
      <v-col>
        <md-editor></md-editor>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <code>
          <pre  style="max-height: 300px; overflow: scroll">{{ $store.state.editorContent }}</pre>
        </code>
      </v-col>
      <v-col>
        <code><pre>{{$store.getters.toolbar}}</pre></code>
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
