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
  <div>
    form block
    <h2>NOT FOR parents 3</h2>

    <div class="g-form">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSckifOqeP-UVhuASdWHIojNCQYJvYgZV5TCGaqnyfHtOaVBeg/viewform?embedded=true"
        :width="currentWidth"
        height="920"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Загрузка…
      </iframe>
    </div>
  </div>
</template>

<style scoped>
.g-form {
  margin: 0 auto;
  text-align: center;
}
</style>
