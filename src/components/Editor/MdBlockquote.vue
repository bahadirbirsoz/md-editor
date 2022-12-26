<template>
<blockquote>
  <slot></slot>
</blockquote>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { IMdElement } from '@/store';

@Component
export default class MdBlockquote extends Vue {
  @Prop({}) element?: IMdElement;
}
</script>

<style scoped>

</style>
