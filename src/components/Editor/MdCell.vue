<template>
  <td>
    <slot></slot>
    <div class="resize-hotspot" @mouseup="onMouseUp" @mousedown="onMouseDown"></div>
  </td>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { IMdElement } from '@/store';

@Component
export default class MdCell extends Vue {
  @Prop({}) element?: IMdElement;

  onMouseUp(e: MouseEvent) {
    this.$store.dispatch('mouseUp', {
      event: e,
      component: this,
    });
    this.$store.dispatch('tableColumnResizeEnd', {
      event: e,
      component: this,
    });
  }

  onMouseDown(e: MouseEvent) {
    this.$store.dispatch('mouseDown', {
      event: e,
      component: this,
    });
    this.$store.dispatch('tableColumnResizeBegin', {
      event: e,
      component: this,
    });
  }
}
</script>

<style scoped>
td {
  padding: 4px 8px;
  border: 1px solid #ccc;
}

.resize-hotspot {
  width: 3px;
  cursor: ew-resize;
  float: right;
  margin-right: -2px;
  background: lime;
}
</style>
