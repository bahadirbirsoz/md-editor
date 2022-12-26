<template>
  <a href>asd</a>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { IMdElement } from '@/store';

@Component
export default class MdLink extends Vue {
  @Prop({}) element?: IMdElement;
}
</script>

<style scoped>

</style>
