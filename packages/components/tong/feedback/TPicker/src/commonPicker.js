export default {
  mounted() {
    // this.setDataInit();
  },
  watch: {
    data: {
      handler: function() {
        // 只第一次重置数据，如果后面还需要重置，可以增加配置
        if (this.hasInitData) {
          this.setDataInit();
          this.hasInitData = false;
        } else {
          // 更新列表不重置数据，若chooseValue[index]不在data[index]中，则展示data[index]最末的数值
          let tempValue = [...this.chooseValue];
          for (let index = 0; index < this.data.length; index++) {
            if (
              this.data[index].indexOf(tempValue[index]) === -1 ||
              tempValue[index] === undefined
            ) {
              for (let i = index; i < this.data.length; i++) {
                tempValue[i] = this.data[i][this.data[i].length - 1];
              }
            }
          }
          this.chooseValue = tempValue;
        }
      },
      deep: true
    }
  },
  computed: {},
  methods: {
    setDataInit() {
      if (
        this.defaultValue &&
        this.defaultValue.length > 0 &&
        this.chooseValue.length === 0
      ) {
        this.chooseValue = this.defaultValue;
      } else {
        for (let index = 0; index < this.data.length; index++) {
          try {
            this.chooseValue[index] = this.data[index][0];
          } catch (error) {
            this.chooseValue[index] = undefined;
          }
        }
      }
      this.$nextTick(() => {
        this.setPositionInit();
      });
    },
    setLastData() {
      for (let index = 0; index < this.data.length; index++) {
        try {
          if (this.chooseValue[0])
            this.chooseValue[index] = this.data[index][length];
        } catch (error) {
          this.chooseValue[index] = undefined;
        }
      }

      this.$nextTick(() => {
        this.setPositionInit();
      });
    },
    setPositionInit() {
      for (let index = 0; index < this.chooseValue.length; index++) {
        this.setChooseValue(index, this.chooseValue[index]);
      }
    },
    chooseCommonItem(value, index) {
      this.chooseValue[index] = value;
      this.$emit("onChoose", this, value, index, this.chooseValue);
    }
  }
};
