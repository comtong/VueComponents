import TDatePicker from "../../components/tong/feedback/TDatePicker";
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

export default {
  install(Vue) {
    if (!$vm) {
      const DatePickerPlugin = Vue.extend(TDatePicker);
      $vm = new DatePickerPlugin({
        el: document.createElement("div")
      });
      document.body.appendChild($vm.$el);
    }
    $vm.value = false;
    let datePicker = {
      show(options) {
        if (typeof options === "object") {
          mergeOptions($vm, options);
        }
        $vm.$off("onShow");
        $vm.$on("onShow", () => {
          // 注意，这里的onShow要和组件内的区分开，否则因为mergeOptions函数，组件内的onShow会被覆盖
          options && options.onShow && options.onShow();
        });

        $vm.$off("onHide");
        $vm.$on("onHide", () => {
          $vm.hide();
          options && options.onHide && options.onHide();
        });
        $vm.$off("onConfirm");
        $vm.$on("onConfirm", val => {
          $vm.hide();
          options && options.onConfirm && options.onConfirm(val);
        });
        $vm.$off("onCancel");
        $vm.$on("onCancel", () => {
          $vm.hide();
          options && options.onCancel && options.onCancel();
        });
        $vm.show();
      },
      hide() {
        $vm.hide();
        console.log("hide::", $vm.value);
      }
    };
    Vue.mixin({
      created() {
        if (!this.$tui) {
          this.$tui = {
            datePicker
          };
        } else {
          this.$tui.datePicker = datePicker;
        }
      }
    });
  }
};
