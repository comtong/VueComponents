import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import TConfirmPlugin from "../packages/plugins/TConfirm";
import TToastPlugin from "../packages/plugins/TToast";
import TLoadingPlugin from "../packages/plugins/TLoading";
import TActionSheet from "../packages/plugins/TActionSheet";
import TVplKeyboardPlugin from "../packages/plugins/TVplKeyboard";
import { TGrid, TGridItem, THeader } from "packages/inter";

import TDatePickerPlugin from "packages/plugins/TDatePicker";
Vue.use(TDatePickerPlugin);

Vue.use(TGrid);
Vue.use(TGridItem);
Vue.use(THeader);
Vue.use(TConfirmPlugin);
Vue.use(TToastPlugin);
Vue.use(TLoadingPlugin);
Vue.use(TActionSheet);
Vue.use(TVplKeyboardPlugin);
Vue.use(TDatePickerPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
