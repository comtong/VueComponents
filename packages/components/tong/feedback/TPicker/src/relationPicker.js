export default {
  mounted() {
    this.resetData();
  },
  watch: {
    relationData: {
      handler: function() {
        this.resetData();
      },
      deep: true
    }
  },
  computed: {
    relationPickerList() {
      let list = [];
      let key = "root";
      for (let index = 0; index < this.columns; index++) {
        if (key === undefined || !this.relationData.get(key)) {
          list.push([]);
        } else {
          list.push(this.relationData.get(key));
        }
        key = this.chooseValue[index];
      }
      return list;
    }
  },
  methods: {
    setRelationPositionInit() {
      for (let index = 0; index < this.chooseValue.length; index++) {
        this.setChooseValue(index, this.chooseValue[index]);
      }
    },
    resetData() {
      if (this.defaultValue && this.defaultValue.length > 0) {
        this.chooseValue = this.defaultValue;
      } else {
        let key = "root";
        let tempChooseValue = [];
        for (let index = 0; index < this.columns; index++) {
          try {
            key = this.relationData.get(key)[0]; // 这一层的value就是下一层的key
            tempChooseValue[index] = key;
          } catch (error) {
            tempChooseValue[index] = undefined;
          }
        }
        this.chooseValue = [...tempChooseValue];
      }
      this.$nextTick(() => {
        this.setRelationPositionInit();
      });
    },
    chooseRelationItem(value, index) {
      // 如果本次移动本身没有改变值，那么不需要做任何处理
      if (this.chooseValue[index] === value) {
        return;
      }
      let chooseValueTemp = [...this.chooseValue];
      chooseValueTemp[index] = value;
      let i = index;
      let lastValue = value;
      while (i + 1 < this.columns) {
        try {
          // 前一列改变了，下一列直接回到第一个值
          chooseValueTemp[i + 1] = this.relationData.get(lastValue)[0];
          this.setChooseValue(i + 1, chooseValueTemp[i + 1]);
        } catch (error) {
          chooseValueTemp[i + 1] = undefined;
        }
        lastValue = chooseValueTemp[i + 1];
        i++;
      }
      console.log("chooseValueTemp:::::::", chooseValueTemp);
      this.chooseValue = chooseValueTemp;
      this.$emit("onChoose", this, value, index, this.chooseValue);
    }
  }
};
