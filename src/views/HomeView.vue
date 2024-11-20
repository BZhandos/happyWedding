<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { useMainStore } from '@/stores/guests'

const store = useMainStore()
</script>

<template>
  <main>
    <TheWelcome />
  </main>
  <div>
      {{ store.guestList }}
  </div>
</template>
