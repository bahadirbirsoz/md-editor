<template>
  <ol></ol>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { IMdElement } from '@/store';

@Component
export default class MdList extends Vue {
  @Prop({}) element?: IMdElement;
}
</script>

<style scoped>

</style>
