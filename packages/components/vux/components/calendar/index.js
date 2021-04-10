import Calendar from "./main.vue";
Calendar.install = function(Vue) {
  Vue.component(Calendar.name, Calendar);
};
export default Calendar;
