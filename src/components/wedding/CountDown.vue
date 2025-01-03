<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { computed } from 'vue'
import { useMainStore } from '@/stores/guests.js'
const store = useMainStore()

const guest = computed(() => {
  return store.currentGuest
})

// Define the target date and time
const targetDate = new Date('2025-05-03T15:30:00')

// Reactive state for time left
const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

let timerInterval

// Function to calculate the time left
const calculateTimeLeft = () => {
  const now = new Date()
  const diff = targetDate - now

  if (diff <= 0) {
    // Timer has reached the target date
    timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    clearInterval(timerInterval)
    return
  }

  timeLeft.value.days = Math.floor(diff / (1000 * 60 * 60 * 24))
  timeLeft.value.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  timeLeft.value.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  timeLeft.value.seconds = Math.floor((diff % (1000 * 60)) / 1000)
}

onMounted(() => {
  calculateTimeLeft()
  timerInterval = setInterval(calculateTimeLeft, 1000)
})

onBeforeUnmount(() => {
  clearInterval(timerInterval)
})
</script>

<template>
  <div class="countdown-wrapper">
    <div class="count-title">
      <img
        v-if="guest.hash !== 'haba-san' && guest.hash !== 'aikawa-san'"
        alt="img"
        width="320"
        src="@/assets/text/countdown.svg"
      />
      <img v-else alt="img" width="320" src="@/assets/text/en_counter.svg" />
    </div>
    <div class="countdown-timer">
      <div class="countdown-timer__item">
        <span>{{ timeLeft.days }}</span> days
      </div>
      <div class="countdown-timer__item">
        <span>{{ timeLeft.hours }}</span> hours
      </div>
      <div class="countdown-timer__item">
        <span>{{ timeLeft.minutes }}</span> minutes
      </div>
      <div class="countdown-timer__item">
        <span>{{ timeLeft.seconds }}</span> seconds
      </div>
    </div>
    <div class="count-footer">
      <img
        v-if="guest.hash !== 'haba-san' && guest.hash !== 'aikawa-san'"
        alt="img"
        src="@/assets/text/welcome_text.svg"
      />
      <img v-else alt="img" src="@/assets/text/en_wellcome.svg" />
    </div>
    <img src="@/assets/img/text-bg1.png" alt="Left Corner" class="countdown-wrapper-img left1" />
    <img src="@/assets/img/text-bg1.png" alt="Right Corner" class="countdown-wrapper-img right1" />
  </div>
</template>

<style scoped>
.count-title {
  text-align: center;
  font-size: 4rem;
  margin-top: 40px;
}
.count-footer {
  text-align: center;
  padding: 30px;
}

.count-footer img {
  max-width: 520px;
  width: 100%;
}
.countdown-timer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 7px;
}

.countdown-timer__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  border: 1px solid #403f3f;
  border-radius: 8px;
  padding: 12px;
  width: 120px;
}

.countdown-timer__item span {
  font-size: 36px;
  color: #403f3f;
  font-weight: bold;
}
.countdown-wrapper {
  position: relative;
  overflow: hidden;
}
.countdown-wrapper-img {
  position: absolute;
  max-width: 360px;
  height: auto;
  z-index: -1;
}
.countdown-wrapper-img.left1 {
  bottom: 0;
  left: -50px;
}

.countdown-wrapper-img.right1 {
  bottom: 0;
  right: -10px;
  transform: scaleX(-1);
}
@media (max-width: 1024px) {
  .countdown-wrapper-img {
    opacity: 0.4;
  }
}
@media (max-width: 500px) {
  .countdown-wrapper-img.right1 {
    display: none;
  }
}
</style>
