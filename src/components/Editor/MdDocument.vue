<template>
  <div contenteditable="true" @keydown="onKeyDown" @click="onClick">
    <md-element v-for="(e,i) in element.children" :element="e" :key="i"></md-element>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IMdElement } from '@/store';

@Component({
  components: {},
})
export default class MdDocument extends Vue {
  get element(): IMdElement {
    return this.$store.state.document;
  }

  onKeyDown(e: KeyboardEvent) {
    e.preventDefault();
    console.log(this.element);
    this.$store.dispatch('onKeyDown', e);
  }

  onClick(e: MouseEvent) {
    e.preventDefault();
    console.log(this.element);
  }
}
</script>

<style scoped>

</style>
