<template>
  <div>
    <v-btn v-if="item.icon" :disabled="isDisabled" @click="$store.dispatch('toolbarAction', item)">
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { IToolbarItem } from '@/store';

@Component
export default class MdEditorToolbarItem extends Vue {
  @Prop({}) item!: IToolbarItem;

  get isDisabled(): boolean {
    if (typeof this.item.disabled === 'undefined') {
      return false;
    }
    return this.item.disabled && true;
  }

  //
  // onClick(e) {
  //   console.log(e, this.item);
  //   this.$store.dispatch('toolbar-action', this.item);
  // }
}
</script>

<style scoped>

</style>
