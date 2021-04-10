import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/base",
    name: "base",
    component: () => import("../demos/base"),
    redirect: "/base/button",
    children: [
      {
        path: "/base/button",
        component: () => import("../demos/base/button"),
        name: "button"
      },
      {
        path: "/base/icon",
        component: () => import("../demos/base/icon"),
        name: "icon"
      },
      {
        path: "/base/popup",
        component: () => import("../demos/base/popup"),
        name: "popup"
      }
    ]
  },
  {
    path: "/layout",
    name: "layout",
    component: () => import("../demos/layout"),
    redirect: "/layout/cell",
    children: [
      {
        path: "/layout/cell",
        component: () => import("../demos/layout/cell"),
        name: "cell"
      },
      {
        path: "/layout/flex",
        component: () => import("../demos/layout/flex"),
        name: "flex"
      },
      {
        path: "/layout/grid",
        component: () => import("../demos/layout/grid"),
        name: "grid"
      }
    ]
  },
  {
    path: "/feedback",
    name: "feedback",
    component: () => import("../demos/feedback"),
    redirect: "/feedback/actionsheet",
    children: [
      {
        path: "/feedback/actionsheet",
        component: () => import("../demos/feedback/actionsheet"),
        name: "actionsheet"
      },
      {
        path: "/feedback/confirm",
        component: () => import("../demos/feedback/confirm"),
        name: "confirm"
      },
      {
        path: "/feedback/datePicker",
        component: () => import("../demos/feedback/datePicker"),
        name: "datePicker"
      },
      {
        path: "/feedback/input",
        component: () => import("../demos/feedback/input"),
        name: "input"
      },
      {
        path: "/feedback/loading",
        component: () => import("../demos/feedback/loading"),
        name: "loading"
      },
      {
        path: "/feedback/picker",
        component: () => import("../demos/feedback/picker"),
        name: "picker"
      },
      {
        path: "/feedback/radio",
        component: () => import("../demos/feedback/radio"),
        name: "radio"
      },
      {
        path: "/feedback/checklist",
        component: () => import("../demos/feedback/checklist"),
        name: "checklist"
      },
      {
        path: "/feedback/select",
        component: () => import("../demos/feedback/select"),
        name: "select"
      },
      {
        path: "/feedback/switch",
        component: () => import("../demos/feedback/switch"),
        name: "switch"
      },
      {
        path: "/feedback/toast",
        component: () => import("../demos/feedback/toast"),
        name: "toast"
      }
    ]
  },
  {
    path: "/form",
    name: "form",
    component: () => import("../demos/form"),
    redirect: "/form/cellCaptcha",
    children: [
      {
        path: "/form/cellCaptcha",
        component: () => import("../demos/form/cellCaptcha"),
        name: "cellCaptcha"
      },
      {
        path: "/form/cellDatePicker",
        component: () => import("../demos/form/cellDatePicker"),
        name: "cellDatePicker"
      },
      {
        path: "/form/cellInput",
        component: () => import("../demos/form/cellInput"),
        name: "cellInput"
      },
      {
        path: "/form/cellRadio",
        component: () => import("../demos/form/cellRadio"),
        name: "cellRadio"
      },
      {
        path: "/form/cellSwitch",
        component: () => import("../demos/form/cellSwitch"),
        name: "cellSwitch"
      }
    ]
  },
  {
    path: "/business",
    name: "business",
    component: () => import("../demos/business"),
    redirect: "/business/authConfirm",
    children: [
      {
        path: "/business/authConfirm",
        component: () => import("../demos/business/authConfirm"),
        name: "authConfirm"
      },
      {
        path: "/business/unbundingRadio",
        component: () => import("../demos/business/unbundingRadio"),
        name: "unbundingRadio"
      },
      {
        path: "/business/vplKeyboard",
        component: () => import("../demos/business/vplKeyboard"),
        name: "vplKeyboard"
      },
      {
        path: "/business/banner",
        name: "cmbBanner",
        component: () => import("../demos/business/banner")
      }
    ]
  },
  {
    path: "/navigation",
    name: "navigation",
    component: () => import("../demos/navigation"),
    redirect: "/navigation/buttonTab",
    children: [
      {
        path: "/navigation/header",
        component: () => import("../demos/navigation/header"),
        name: "header"
      },
      {
        path: "/navigation/buttonTab",
        component: () => import("../demos/navigation/buttonTab"),
        name: "buttonTab"
      }
    ]
  },
  {
    path: "/datashow",
    name: "datashow",
    component: () => import("../demos/datashow"),
    redirect: "/datashow/scroller",
    children: [
      {
        path: "/datashow/scroller",
        component: () => import("../demos/datashow/scroller"),
        name: "scroller"
      }
    ]
  }
];

const router = new VueRouter({
  // mode: "history",
  // base: process.env.BASE_URL,
  routes
});

export default router;
