<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

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

  // Calculate days, hours, minutes, and seconds
  timeLeft.value.days = Math.floor(diff / (1000 * 60 * 60 * 24))
  timeLeft.value.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  timeLeft.value.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  timeLeft.value.seconds = Math.floor((diff % (1000 * 60)) / 1000)
}

// Start the countdown timer
onMounted(() => {
  calculateTimeLeft()
  timerInterval = setInterval(calculateTimeLeft, 1000)
})

// Cleanup the interval on unmount
onBeforeUnmount(() => {
  clearInterval(timerInterval)
})
</script>

<template>
  <div class="count-title">До свадьбы осталось</div>
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
</template>

<style scoped>
.count-title {
  text-align: center;
  font-size: 4rem;
  margin-top: 40px;
}
.countdown-timer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.countdown-timer__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  border: 1px solid #403f3f;
  border-radius: 8px;
  padding: 12px;
  width: 120px;
}

.countdown-timer__item span {
  font-size: 36px;
  color: #403f3f;
}
</style>
