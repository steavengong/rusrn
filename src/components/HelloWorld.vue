<template>
  <div class="hello">
    <cube-tab-bar v-model="seletedTab" :data="tabs" showSlider/>
    <cube-button :style="{marginTop:'20px'}" @click="showPopup">Hello</cube-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      picker: null,
      selelctedIndex: [-1],
      column1: [],
      seletedTab: 0,
      tabs: [{ value: 0, label: "test1" }, { value: 1, label: "test2" }]
    };
  },
  methods: {
    showPopup() {
      this.$createMyPopup({
        tabIndex: this.seletedTab,
        onChange: event => {
          this.seletedTab = event;
        }
      }).show();
    },
    showPicker() {
      this.picker = this.$createPicker({
        data: this.column1.length ? [this.column1] : [],
        selectedIndex: this.selelctedIndex,
        onSelect: (val, index, text) => {
          console.log(val);
          console.log(index);
          console.log(text);
        }
      });

      this.picker.show();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
