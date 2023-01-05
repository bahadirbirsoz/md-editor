<template>
  <div>
    <label for="format">
      <select @change="input" name="format" v-model="value" :value="value">
        <option v-for="(item) in formats" v-html="item.text" :value="item.value" :key="item.value">
        </option>
      </select>
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MdEditorToolbarItem from '@/components/Toolbar/MdEditorToolbarItem.vue';

@Component({
  components: { MdEditorToolbarItem },
})
export default class MdToolbarFormat extends Vue {
  value = 'paragraph';

  actions = [];

  formats = [
    {
      value: 'paragraph',
      text: 'Paragraph',
    },
    {
      value: 'blockquote',
      text: 'Blockquote',
    },
    {
      value: 'h1',
      text: 'Header 1',
    },
    {
      value: 'h2',
      text: 'Header 2',
    },
    {
      value: 'h3',
      text: 'Header 3',
    },
    {
      value: 'h4',
      text: 'Header 4',
    },
    {
      value: 'h5',
      text: 'Header 5',
    },
    {
      value: 'h6',
      text: 'Header 6',
    },
    {
      value: 'h7',
      text: 'Header 7',
    },
  ];

  input() {
    this.$emit('input', this.value);
  }
}
</script>

<style scoped>

</style>
