<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentWidth = ref(window.innerWidth)

const setDefaultFlagsValues = () => {
  currentWidth.value = window.innerWidth
}

onMounted(() => {
  setDefaultFlagsValues()
  window.addEventListener('resize', setDefaultFlagsValues)
})
onUnmounted(() => {
  window.removeEventListener('resize', setDefaultFlagsValues)
})
</script>

<template>
  <div class="form-title">Анкета гостя</div>
  <div>
    <div class="g-form">
      <!--      <iframe-->
      <!--        src="https://docs.google.com/forms/d/e/1FAIpQLSckifOqeP-UVhuASdWHIojNCQYJvYgZV5TCGaqnyfHtOaVBeg/viewform?embedded=true"-->
      <!--        :width="currentWidth"-->
      <!--        height="920"-->
      <!--        frameborder="0"-->
      <!--        marginheight="0"-->
      <!--        marginwidth="0"-->
      <!--      >-->
      <!--        Загрузка…-->
      <!--      </iframe>-->
    </div>
  </div>
</template>

<style scoped>
.form-title {
  text-align: center;
  font-size: 4rem;
  margin-top: 40px;
}
.g-form {
  margin: 0 auto;
  text-align: center;
}
</style>
