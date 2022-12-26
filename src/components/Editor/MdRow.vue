<template>
  <tr>
    <slot></slot>
  </tr>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { IMdElement } from '@/store';

@Component
export default class MdRow extends Vue {
  @Prop({}) element?: IMdElement;
}
</script>

<style scoped>

</style>
