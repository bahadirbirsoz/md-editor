<template>
  <li></li>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { IMdElement } from '@/store';

@Component
export default class MdListItem extends Vue {
  @Prop({}) element?: IMdElement;
}
</script>

<style scoped>

</style>
