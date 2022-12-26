<template>
  <table>
    <slot></slot>
  </table>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { IMdElement } from '@/store';

@Component
export default class MdTable extends Vue {
  @Prop({}) element?: IMdElement;
}
</script>

<style scoped>
table{
  border-collapse: collapse;
}
</style>
