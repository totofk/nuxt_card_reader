<template>

</template>

<script>
export default {
  mounted () {
    this.$hello('mounted')
    // will console.log 'Hello mounted!'
  },
  asyncData ({ $hello ) {
    $hello('asyncData')
  }
}
</script>
