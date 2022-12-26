<template>
  <td>
    <slot></slot>
  </td>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { IMdElement } from '@/store';

@Component
export default class MdCell extends Vue {
  @Prop({}) element?: IMdElement;
}
</script>

<style scoped>
td{
  padding: 4px 8px;
  border: 1px solid #ccc;
}
</style>
