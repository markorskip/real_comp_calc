<template>
  <div id="app">
    <RealCompensationCalculator></RealCompensationCalculator>
    </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

<script>
import RealCompensationCalculator from "@/components/realCompensation/RealCompensationCalculator";
  export default {
    name: 'App',
    components: {
      RealCompensationCalculator
    }
  }
</script>
