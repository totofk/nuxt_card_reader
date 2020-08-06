<template>
  <div class="container">
    <register-form></register-form>
  </div>
</template>

<script>
import RegisterForm from '@/components/registerForm'
export default {
  components: { RegisterForm },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
