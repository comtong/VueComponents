/*
 * @Author: Ye Qinglong
 * @Date: 2019-12-13 11:41:45
 * @Last Modified by: Ye Qinglong
 * @Last Modified time: 2020-03-17 10:27:30
 */
import TLoading from "../../components/tong/feedback/TLoading";
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
    const Loading = vue.extend(TLoading);
    if (!$vm) {
      $vm = new Loading({
        el: document.createElement("div")
      });
      document.body.appendChild($vm.$el);
    }

    const loading = {
      show(options) {
        if (typeof options === "object") {
          mergeOptions($vm, options);
        }
        $vm.show();
      },
      close() {
        $vm.close();
      }
    };

    vue.mixin({
      created: function() {
        if (!this.$tui) {
          this.$tui = {
            loading
          };
        } else {
          this.$tui.loading = loading;
        }
      }
    });
  }
};

export default plugin;
export const install = plugin.install;
