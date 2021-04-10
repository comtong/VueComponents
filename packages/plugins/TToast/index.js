/*
 * @Author: Ye Qinglong
 * @Date: 2019-12-13 11:42:13
 * @Last Modified by: Ye Qinglong
 * @Last Modified time: 2020-03-17 10:46:24
 */
import TToast from "../../components/tong/feedback/TToast";
import objectAssign from "object-assign";

let $vm;

const mergeOptions = function($vm, options) {
  const defaults = {};
  for (let i in $vm.$options.props) {
    if (i !== "value") {
      defaults[i] = $vm.$options.props[i].default;
    }
  }
  const _options = objectAssign({}, defaults, options);
  for (let i in _options) {
    $vm[i] = _options[i];
  }
};
const plugin = {
  install(vue = {}) {
    const Toast = vue.extend(TToast);
    if (!$vm) {
      $vm = new Toast({
        el: document.createElement("div")
      });
      document.body.appendChild($vm.$el);
    }

    const toast = {
      show(options) {
        if (typeof options === "object") {
          mergeOptions($vm, options);
        }
        $vm.show();
      }
    };

    vue.mixin({
      created: function() {
        if(!this.$tui) {
          this.$tui = {
            toast
          }
        } else {
          this.$tui.toast = toast;
        }
      }
    });
  }
};

export default plugin;
export const install = plugin.install;
