<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useMainStore } from '@/stores/guests.js'
const store = useMainStore()

const guest = computed(() => {
  return store.currentGuest
})
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
  <div v-if="guest.hash !== 'parents1'">
    <div class="form-title">
      <img alt="img" width="320" src="@/assets/text/form.svg" />
    </div>
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
