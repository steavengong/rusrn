<template>
  <cube-popup v-model="visible" type="my-popup" position="bottom">
    <cube-tab-bar v-model="seletedTab" :data="tabs" show-slider/>
    <div :style="{width:'100%',height:'200px',marginTop:'20px',background:'red'}">
      <cube-slide
        :initialIndex="seletedTab"
        :showDots="false"
        :autoPlay="false"
        :loop="false"
        :options="slideOptions"
        ref="slide"
      >
        <cube-slide-item>
          <div v-for="i in 10" :key="i">{{i}}</div>
        </cube-slide-item>
        <cube-slide-item>
          <div v-for="i in 10" :key="10+i">{{10+i}}</div>
        </cube-slide-item>
      </cube-slide>
    </div>
    <cube-button :style="{marginTop:'20px'}" @click="hide">关闭</cube-button>
  </cube-popup>
</template>

<script>
export default {
  name: "my-popup",
  data() {
    return {
      visible: false,
      seletedTab: 0,
      slideOptions: {
        probeType: 3,
        click: false
      },
      tabs: [{ value: 0, label: "test1" }, { value: 1, label: "test2" }]
    };
  },
  props: {
    tabIndex: {
      type: Number,
      default: 0
    }
  },
  watch: {
    visible(val) {
      if (val) {
        this.seletedTab = this.tabIndex;
      }
    },
    seletedTab(val) {
      this.$emit("change", val);
    }
  },
  mounted() {
    setTimeout(() => {
      this.$nextTick(() => {
        this.$refs.slide.refresh();
      });
    }, 200);
  },
  methods: {
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    }
  }
};
</script>
<style lang="scss">
.cube-my-popup {
  & > .cube-popup-bottom {
    & > .cube-popup-content {
      height: 100%;
      background-color: #FFF;
    }
  }
}
</style>

