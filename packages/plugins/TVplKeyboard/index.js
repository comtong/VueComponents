import TVplKeyboard from "../../components/tong/business/TVplKeyboard";
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

const defaultOptions = () => ({
  title: "请输入您的车牌",
  buttonTitle: "完成",
  kbTitle: "隐藏",
  value: "",
  index: 0,
  newpower: false,
  showVplView: true,
  version: "1",
});

const plugin = {
  install(vue) {
    const VplKeyboard = vue.extend(TVplKeyboard);
    if (!$vm) {
      $vm = new VplKeyboard({
        el: document.createElement("div"),
        propsData: {}
      });
      document.body.appendChild($vm.$el);
    }
    const vplkb = {
      show(options) {
        if (typeof options === "object") {
          mergeOptions($vm, {
            ...defaultOptions(),
            ...options
          });
        }
        this.$watcher && this.$watcher();

        $vm.$off("on-complete");
        $vm.$off("on-cancel");
        $vm.$off("on-change-vpl");

        $vm.$on("on-complete", value => {
          $vm.hide();
          options && options.onComplete && options.onComplete(value);
        });
        $vm.$on("on-cancel", () => {
          $vm.hide();
          options && options.onCancel && options.onCancel();
        });
        $vm.$on("on-change-vpl", (value, index, newpower) => {
          options &&
            options.onChangeVpl &&
            options.onChangeVpl(value, index, newpower);
          $vm.value = value;
          $vm.index = index;
          $vm.newpower = newpower;
        });
        $vm.show();
      },
      isShow() {
        return $vm.sshow;
      },
      props(props) {
        console.log("kb-props", props);
        for (let key in props) {
          $vm[key] = props[key];
        }
      },
      hide() {
        $vm.hide();
      }
    };
    vue.$vplkb = vplkb;

    vue.mixin({
      created: function() {
        this.$vplkb = vue.$vplkb;
      }
    });
  }
};

export default plugin;
export const install = plugin.install;
