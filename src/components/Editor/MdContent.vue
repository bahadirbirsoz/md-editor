<template>
  <span :class="getClass">
    {{ content }}
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

  get content(): string {
    if (typeof this.element === 'undefined' || typeof this.element.content === 'undefined') {
      return '';
    }
    return this.element.content;
  }

  get isItalic(): boolean {
    if (typeof this.element === 'undefined' || typeof this.element.bold === 'undefined') {
      return false;
    }
    return this.element.bold && true;
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
