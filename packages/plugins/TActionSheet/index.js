import TActionSheet from "../../components/tong/feedback/TActionSheet";
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
  $vm["value"] = options.show;
};
const plugin = {
  install(vue = {}) {
    const ActionSheet = vue.extend(TActionSheet);
    if (!$vm) {
      $vm = new ActionSheet({
        el: document.createElement("div")
      });
      document.body.appendChild($vm.$el);
    }

    const actionSheet = {
      show(options) {
        if (typeof options === "object") {
          mergeOptions($vm, options);
        }
        this.$watcher && this.$watcher();
        $vm.$off("onShow");
        $vm.$off("onHide");
        $vm.$off("onClickCancel");
        $vm.$off("onClickMenu");
        $vm.$off("onClickMask");

        $vm.$on("onShow", () => {
          options && options.onShow && options.onShow();
        });
        $vm.$on("onHide", () => {
          $vm["value"] = false;
          options && options.onHide && options.onHide();
        });
        $vm.$on("onClickCancel", () => {
          options && options.onClickCancel && options.onClickCancel();
        });
        $vm.$on("onClickMenu", index => {
          options && options.onClickMenu && options.onClickMenu(index);
        });
        $vm.$on("onClickMask", () => {
          options && options.onClickMask && options.onClickMask();
        });
        $vm["value"] = true;
      },
      hide() {
        $vm.onHide();
      }
    };
    vue.$actionSheet = actionSheet;

    vue.mixin({
      created: function() {
        this.$actionSheet = vue.$actionSheet;
      }
    });
  }
};

export default plugin;
export const install = plugin.install;
