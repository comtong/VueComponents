<template>
  <div class="hello">
    <t-progress></t-progress>
  </div>
</template>

<script>
import { store, mutations } from '@/service/store'
// import SlotTest from '@/components/SlotTest'
import TProgress from '@/components/TProgress'

export default {
  name: 'Home',
  components: {
    TProgress
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
