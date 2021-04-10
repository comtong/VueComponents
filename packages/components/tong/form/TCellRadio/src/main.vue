<template>
  <div>
    <t-cell v-if="title" :label="title" :line="true"> </t-cell>
    <div class="tui-radio_container">
      <t-radio-group
        v-model="defaultValue"
        direction="horizontal"
        justifyContent="space-between"
        @onChange="onChange"
        :defaultValue="defaultValue"
      >
        <t-radio
          v-for="item in options"
          :key="item.value"
          :value="item.value"
          :label="item.label"
        />
      </t-radio-group>
    </div>
  </div>
</template>
<script>
import TCell from "../../../layout/TCell";
import { TRadio, TRadioGroup } from "../../../feedback/TRadio";
export default {
  name: "t-cell-radio",
  props: {
    title: String,
    options: Array,
    defaultValue: {
      type: String,
      default: "100"
    }
  },
  components: {
    TCell,
    TRadio,
    TRadioGroup
  },
  data() {
    return {};
  },
  mounted() {
    this.value = this.defaultValue;
  },
  methods: {
    onChange(value) {
      this.$emit("onChange", value);
    }
  }
};
</script>
<style lang="less" scoped>
.tui-radio_container {
  background-color: white;
  padding: 0 10px;
}
</style>
