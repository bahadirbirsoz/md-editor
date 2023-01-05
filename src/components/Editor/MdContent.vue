<template>
  <span :class="getClass">
    {{ element.content }}
  </span>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { IMdElement } from '@/store';

@Component
export default class MdContent extends Vue {
  @Prop() element!: IMdElement;

  get isBold(): boolean {
    if (typeof this.element === 'undefined' || typeof this.element.bold === 'undefined') {
      return false;
    }
    return this.element.bold && true;
  }

  get isItalic(): boolean {
    if (typeof this.element === 'undefined' || typeof this.element.italic === 'undefined') {
      return false;
    }
    return this.element.italic && true;
  }

  get getClass(): string {
    const classes = [];
    if (this.isBold) {
      classes.push('font-weight-bold');
    }
    if (this.isItalic) {
      classes.push('font-italic');
    }
    return classes.join(' ');
  }
}
</script>

<style scoped>

</style>
