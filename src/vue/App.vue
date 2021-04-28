<template lang="pug">
  .container 
    h2 Vue!
    h2 Let's count! {{counter}}
    ul
      li
        a(href='/index.html') Home
      li
        a(href='/react.html') go to React app!
</template>

<script lang="ts">
import Vue from "vue";

let counter: string;
counter = 0;

export default Vue.extend({
  data() {
    return {
      counter,
    };
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
});
</script>

<style lang="stylus" scoped>
bgStyle = darkslategray
textStyle = aquamarine

.container
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  width: 900px
  padding: 40px
  font-family: sans-serif
  background-color: bgStyle
  color: textStyle

  h2
    font-size: 64px

  a
    font-size: 28px
    color: mintcream
</style>
