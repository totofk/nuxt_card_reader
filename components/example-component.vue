<template><div></div></template>

<script>
export default {
  asyncData({ $hello }) {
    $hello('asyncData')
  },
  mounted() {
    this.$hello('mounted')
    // will console.log 'Hello mounted!'
  },
}
</script>
