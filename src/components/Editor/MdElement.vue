<template>
    <md-paragraph v-if="element.name=='paragraph'" :element="element">
      <md-element v-for="(e,i) in element.children" :element="e" :key="i"></md-element>
    </md-paragraph>
    <h1 v-else-if="element.name=='h1'">
      <md-element v-for="(e,i) in element.children" :element="e" :key="i"></md-element>
    </h1>
    <h5 v-else-if="element.name=='h5'">
      <md-element v-for="(e,i) in element.children" :element="e" :key="i"></md-element>
    </h5>
    <md-code v-else-if="element.name=='code'" :element="element">
      <md-element v-for="(e,i) in element.children" :element="e" :key="i"></md-element>
    </md-code>
    <md-blockquote v-else-if="element.name=='blockquote'" :element="element">
      <md-element v-for="(e,i) in element.children" :element="e" :key="i"></md-element>
    </md-blockquote>
    <md-table v-else-if="element.name=='table'" :element="element">
      <template v-slot:default>
        <md-element v-for="(e,i) in element.children" :element="e" :key="i"></md-element>
      </template>
    </md-table>
    <md-row v-else-if="element.name=='tr'" :element="element">
      <template v-slot:default>
        <md-element v-for="(e,i) in element.children" :element="e" :key="i"></md-element>
      </template>
    </md-row>
    <md-cell v-else-if="element.name=='td'" :element="element">
      <template v-slot:default>
        <md-element v-for="(e,i) in element.children" :element="e" :key="i"></md-element>
      </template>
    </md-cell>
    <md-link v-else-if="element.name=='link'" :element="element">
      <md-element v-for="(e,i) in element.children" :element="e" :key="i"></md-element>
    </md-link>
    <md-image v-else-if="element.name=='image'" :element="element">
      <md-element v-for="(e,i) in element.children" :element="e" :key="i"></md-element>
    </md-image>
    <md-horizontal-rule v-else-if="element.name=='hr'" :element="element">
      <md-element v-for="(e,i) in element.children" :element="e" :key="i"></md-element>
    </md-horizontal-rule>
    <md-content v-else-if="typeof element.lineBreak !== 'undefined'">
      <br/>
    </md-content>
    <md-content v-else-if="typeof element.content !== 'undefined'" :element="element">
    </md-content>

    <v-card v-else>
      <v-alert color="danger">UNKNOWN ELEMENT</v-alert>
      <code>
        <pre>{{ element }}</pre>
      </code>
    </v-card>

</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import { IMdElement } from '@/store';

@Component
export default class MdElement extends Vue {
  @Prop({}) element?: IMdElement;
}
</script>

<style scoped>

</style>
