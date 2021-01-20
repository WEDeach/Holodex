import Vue from "vue";
import VueGTag from "vue-gtag";
import VueMeta from "vue-meta";
import linkify from "vue-linkify";
import VueI18n from "vue-i18n";
import VueYouTubeEmbed from "vue-youtube-embed";
import App from "./App";
import store from "./store";
import router from "./router";
import { i18n, vuetify } from "./plugins/vuetify";

import "./registerServiceWorker";

Vue.config.productionTip = false;
Vue.config.performance = true;
Vue.use(
    VueGTag,
    {
        config: {
            id: "UA-178428556-1",
        },
    },
    router,
);
// Vue.use(VueSimpleHeadful, {
//     key: "metaInfo", // custom key for component option
// });
Vue.use(VueMeta, {
    refreshOnceOnNavigation: true,
});
Vue.use(VueI18n);
Vue.use(VueYouTubeEmbed);
Vue.directive("linkified", linkify);

new Vue({
    i18n,
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");
