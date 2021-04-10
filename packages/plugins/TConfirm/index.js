import TConfirm from "../../components/tong/feedback/TConfirm";
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
    const Confirm = vue.extend(TConfirm);
    if (!$vm) {
      $vm = new Confirm({
        el: document.createElement("div"),
        propsData: {
          title: ""
        }
      });
      document.body.appendChild($vm.$el);
    }

    const confirm = {
      show(options) {
        if (typeof options === "object") {
          mergeOptions($vm, options);
        }
        this.$watcher && this.$watcher();

        $vm.$off("onClose");
        $vm.$off("onCancel");
        $vm.$off("onConfirm");

        $vm.$on("onClose", () => {
          $vm.isShow = false;
          options && options.onClose && options.onClose();
        });
        $vm.$on("onCancel", () => {
          $vm.isShow = false;
          options && options.onCancel && options.onCancel();
        });
        $vm.$on("onConfirm", isChecked => {
          $vm.isShow = false;
          options && options.onConfirm && options.onConfirm(isChecked);
        });
        // 这个value在这强制写的目的是为了让插件的方式不需要填写value这个值，因为show和hide其实是固定的
        $vm.isShow = true;
        if (typeof options === "object" && (options.onShow || options.onHide)) {
          options.onShow && options.onShow();
        }
      },
      hide() {
        $vm.isShow = false;
        $vm.hide();
      }
    };

    vue.mixin({
      created: function() {
        this.$confirm = vue.$confirm;
        if (!this.$tui) {
          this.$tui = {
            confirm
          };
        } else {
          this.$tui.confirm = confirm;
        }
      }
    });
  }
};

export default plugin;
export const install = plugin.install;
