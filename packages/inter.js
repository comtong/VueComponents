// tui组件
import TButton from "./components/tong/base/TButton/index";
import TIcon from "./components/tong/base/TIcon/index";
import TPopup from "./components/tong/base/TPopup/index";
import { TFlex, TFlexItem } from "./components/tong/layout/TFlex/index";
import { TGrid, TGridItem } from "./components/tong/layout/TGrid/index";
import TCell from "./components/tong/layout/TCell/index";

import TPicker from "./components/tong/feedback/TPicker/index";
import TDatePicker from "./components/tong/feedback/TDatePicker/index";
import TDatePickerPlugin from "./plugins/TDatePicker/index";

import TConfirm from "./components/tong/feedback/TConfirm/index";
import TConfirmPlugin from "./plugins/TConfirm/index";
import TActionSheet from "./components/tong/feedback/TActionSheet/index";
import TActionSheetPlugin from "./plugins/TActionSheet/index";
import TToast from "./components/tong/feedback/TToast/index";
import TToastPlugin from "./plugins/TToast/index";
import TLoading from "./components/tong/feedback/TLoading/index";
import TLoadingPlugin from "./plugins/TLoading/index";
import TVplKeyboard from "./components/tong/business/TVplKeyboard/index";
import TVplKeyboardPlugin from "./plugins/TVplKeyboard/index";
import TAuthConfirm from "./components/tong/business/TAuthConfirm/index";
import TUnbundingRadio from "./components/tong/business/TUnbundingRadio/index";
import TSelect from "./components/tong/feedback/TSelect/index";
import TSwitch from "./components/tong/feedback/TSwitch/index";
import {
  TRadio,
  TRadioGroup
} from "./components/tong/feedback/TRadio/index";
import TChecklist from "./components/tong/feedback/TChecklist/index";
import TButtonTab from "./components/tong/navigation/TButtonTab/index";
import THeader from "./components/tong/navigation/THeader/index";
import TInput from "./components/tong/feedback/TInput/index";
import TCellInput from "./components/tong/form/TCellInput/index";
import TScroller from "./components/tong/datashow/TScroller/index";
import TCaptcha from "./components/tong/business/TCaptcha/index";
import TCellCaptcha from "./components/tong/form/TCellCaptcha/index";
import TCellRadio from "./components/tong/form/TCellRadio/index";
import TCellSwitch from "./components/tong/form/TCellSwitch/index";
import TCellDatePicker from "./components/tong/form/TCellDatePicker/index";
import TBanner from "./components/tong/business/TBanner/index";

// vux组件
import Actionsheet from "./components/vux/components/actionsheet/index";
import Calendar from "./components/vux/components/calendar/index";
import Datetime from "./components/vux/components/datetime/index";
import DatetimePlugin from "./components/vux/plugins/datetime/index";
import DatetimeRange from "./components/vux/components/datetime-range/index";
import DatetimeView from "./components/vux/components/datetime-view/index";
import Checklist from "./components/vux/components/checklist/index";
import CheckIcon from "./components/vux/components/check-icon/index";
import Checker from "./components/vux/components/checker/index";
import CheckerItem from "./components/vux/components/checker-item/index";
import Radio from "./components/vux/components/radio/index";
import Cell from "./components/vux/components/cell/index";
import Flexbox from "./components/vux/components/flexbox/index";
import FlexboxItem from "./components/vux/components/flexbox-item/index";
import Group from "./components/vux/components/group/index";
import InlineDesc from "./components/vux/components/inline-desc/index";
import Picker from "./components/vux/components/picker/index";
import Popup from "./components/vux/components/popup/index";
import PopupHeader from "./components/vux/components/popup-header/index";
import PopupPicker from "./components/vux/components/popup-picker/index";
import XButton from "./components/vux/components/x-button/index";
import XSwitch from "./components/vux/components/x-switch/index";
import InlineXSwitch from "./components/vux/components/inline-x-switch/index";
import Tab from "./components/vux/components/tab/index";
import TabItem from "./components/vux/components/tab-item/index";
import Tabbar from "./components/vux/components/tabbar/index";
import TabbarItem from "./components/vux/components/tabbar-item/index";

const components = {
  TCell,
  THeader,
  TIcon,
  TSwitch,
  TChecklist,
  TRadio,
  TRadioGroup,
  TSelect,
  TFlex,
  TFlexItem,
  TGrid,
  TGridItem,
  TButton,
  TConfirm,
  TConfirmPlugin,
  TActionSheet,
  TActionSheetPlugin,
  TToast,
  TToastPlugin,
  TLoading,
  TLoadingPlugin,
  TButtonTab,
  TVplKeyboard,
  TVplKeyboardPlugin,
  TAuthConfirm,
  TUnbundingRadio,
  TPicker,
  TDatePicker,
  TDatePickerPlugin,
  TPopup,
  TInput,
  TCellInput,
  TScroller,
  TCaptcha,
  TCellCaptcha,
  TCellRadio,
  TCellSwitch,
  TCellDatePicker,
  TBanner,

  Actionsheet,
  Calendar,
  Datetime,
  DatetimePlugin,
  DatetimeRange,
  DatetimeView,
  Checklist,
  CheckIcon,
  Checker,
  CheckerItem,
  Radio,
  Cell,
  Flexbox,
  FlexboxItem,
  Group,
  InlineDesc,
  Picker,
  Popup,
  PopupHeader,
  PopupPicker,
  XButton,
  XSwitch,
  InlineXSwitch,
  Tab,
  TabItem,
  Tabbar,
  TabbarItem
};

const install = function(Vue) {
  if (install.installed) {
    return;
  }
  install.installed = true;
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export {
  install,
  TCell,
  THeader,
  TIcon,
  TSwitch,
  TChecklist,
  TRadio,
  TRadioGroup,
  TSelect,
  TFlex,
  TFlexItem,
  TGrid,
  TGridItem,
  TButton,
  TConfirm,
  TConfirmPlugin,
  TActionSheet,
  TActionSheetPlugin,
  TToast,
  TToastPlugin,
  TLoading,
  TLoadingPlugin,
  TButtonTab,
  TVplKeyboard,
  TVplKeyboardPlugin,
  TPicker,
  TDatePicker,
  TDatePickerPlugin,
  TPopup,
  TAuthConfirm,
  TUnbundingRadio,
  TInput,
  TCellInput,
  TScroller,
  TCaptcha,
  TCellCaptcha,
  TCellRadio,
  TCellSwitch,
  TCellDatePicker,
  TBanner,
  Actionsheet,
  Calendar,
  Datetime,
  DatetimePlugin,
  DatetimeRange,
  DatetimeView,
  Checklist,
  CheckIcon,
  Checker,
  CheckerItem,
  Radio,
  Cell,
  Flexbox,
  FlexboxItem,
  Group,
  InlineDesc,
  Picker,
  Popup,
  PopupHeader,
  PopupPicker,
  XButton,
  XSwitch,
  InlineXSwitch,
  Tab,
  TabItem,
  Tabbar,
  TabbarItem
};
