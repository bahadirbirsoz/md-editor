import Vue from 'vue';
import MdBlockquote from '@/components/Editor/MdBlockquote.vue';
import MdCell from '@/components/Editor/MdCell.vue';
import MdCode from '@/components/Editor/MdCode.vue';
import MdContent from '@/components/Editor/MdContent.vue';
import MdDocument from '@/components/Editor/MdDocument.vue';
import MdElement from '@/components/Editor/MdElement.vue';
import MdHorizontalRule from '@/components/Editor/MdHorizontalRule.vue';
import MdImage from '@/components/Editor/MdImage.vue';
import MdLink from '@/components/Editor/MdLink.vue';
import MdList from '@/components/Editor/MdList.vue';
import MdListItem from '@/components/Editor/MdListItem.vue';
import MdParagraph from '@/components/Editor/MdParagraph.vue';
import MdTable from '@/components/Editor/MdTable.vue';
import MdRow from '@/components/Editor/MdRow.vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.component('md-blockquote', MdBlockquote);
Vue.component('md-cell', MdCell);
Vue.component('md-code', MdCode);
Vue.component('md-content', MdContent);
Vue.component('md-document', MdDocument);
Vue.component('md-element', MdElement);
Vue.component('md-horizontal-rule', MdHorizontalRule);
Vue.component('md-image', MdImage);
Vue.component('md-link', MdLink);
Vue.component('md-list', MdList);
Vue.component('md-list-item', MdListItem);
Vue.component('md-paragraph', MdParagraph);
Vue.component('md-table', MdTable);
Vue.component('md-row', MdRow);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
