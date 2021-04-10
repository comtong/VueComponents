<template>
  <div>
    <form ref="ywtform" style="display:none" :action="url" :method="method">
      <input
        type="hidden"
        name="jsonRequestData"
        :value="body"
        v-if="method === 'post'"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: "t-ytw-pay",
  props: ["url", "body", "method"],
  mounted() {
    if (this.method === "get") {
      window.location.href = this.url;
      return;
    } else {
      this.$refs["ywtform"].submit();
    }
  },
  methods: {},
  data() {
    return {};
  }
};
</script>
