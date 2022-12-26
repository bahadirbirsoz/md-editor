<template>
<code>
  <slot></slot>
</code>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { IMdElement } from '@/store';

@Component
export default class MdCode extends Vue {
  @Prop({}) element?: IMdElement;
}
</script>

<style scoped>

</style>
