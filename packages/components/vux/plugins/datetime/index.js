import Datetime from "../../components/datetime/datetimepicker";
import ObjectAssign from "object-assign";
/* just for importing style and avoid less-loader issue */
import DatetimeComponent from '../../components/datetime/index' // eslint-disable-line

const libs = {
  show: function(options = {}) {
    options = ObjectAssign(
      {
        destroyOnHide: true,
        isOneInstance: true
      },
      options
    );
    const datetime = (libs.datetime = new Datetime(options));
    datetime.show();
  },
  hide: function() {
    libs.datetime && libs.datetime.hide();
  }
};

const plugin = {
  install(Vue) {
    // inject style
    const _Datetime = Vue.extend(DatetimeComponent);
    const div = document.createElement("div");
    if (typeof document !== "undefined") {
      let $vm = new _Datetime({
        el: div
      });
      $vm.$el.style.display = "none";
      $vm.$el.className += " vux-datetime-style-inject";
      document.body.appendChild($vm.$el);
    }

    if (!Vue.$vux) {
      Vue.$vux = {
        datetime: libs
      };
    } else {
      Vue.$vux.datetime = libs;
    }

    Vue.mixin({
      created: function() {
        this.$tui = Vue.$vux;
      }
    });
  }
};

export default plugin;
export const install = plugin.install;
