<script setup>
import { computed } from 'vue'
import { useMainStore } from '@/stores/guests.js'
const store = useMainStore()

const guest = computed(() => {
  return store.currentGuest
})
</script>

<template>
  <div class="code-title">
    <img
      v-if="guest.hash !== 'haba-san' && guest.hash !== 'aikawa-san' && guest.hash !== 'akihiro'"
      alt="img"
      width="265"
      src="@/assets/text/dress.svg"
    />
    <img v-else alt="img" width="265" src="@/assets/text/en_dress.svg" />
  </div>
  <template
    v-if="guest.hash !== 'haba-san' && guest.hash !== 'aikawa-san' && guest.hash !== 'akihiro'"
  >
    <div class="code-desc">Для нас главное - Ваше присутствие!</div>
    <div class="code-desc">
      Но нам будет приятно, если Вы поддержите цветовую гамму нашего торжества!
    </div>
  </template>
  <template v-else>
    <div class="code-desc">The most important thing for us is your presence!</div>
    <div class="code-desc">
      But we will be pleased if you support the color scheme of our celebration!
    </div>
  </template>

  <div class="code-wrap">
    <div class="code-icon">
      <img class="code-icon__bg" alt="img" src="@/assets/planning/planning-flowers.png" />
      <div class="code-icon__img" style="background-color: #6d8176"></div>
    </div>
    <div class="code-icon with-margin">
      <img class="code-icon__bg" alt="img" src="@/assets/planning/planning-flowers.png" />
      <div class="code-icon__img" style="background-color: #bec6bb"></div>
    </div>
    <div class="code-icon with-margin">
      <img class="code-icon__bg" alt="img" src="@/assets/planning/planning-flowers.png" />
      <div class="code-icon__img" style="background-color: #f4d3c4"></div>
    </div>
    <div class="code-icon">
      <img class="code-icon__bg" alt="img" src="@/assets/planning/planning-flowers.png" />
      <div class="code-icon__img" style="background-color: #fef0e7"></div>
    </div>
  </div>
</template>

<style scoped>
.code-title {
  text-align: center;
  font-size: 4rem;
  margin-top: 40px;
}
.code-desc {
  font-size: 20px;
  text-align: center;
  max-width: 520px;
  margin: 0 auto;
  padding: 0 10px;
}
.code-wrap {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}
.code-icon {
  width: 270px;
  position: relative; /* Set the parent container as the positioning context */
  display: inline-block; /* Ensure the size is based on its content */
}

.code-icon__bg {
  display: block; /* Ensure it takes its natural dimensions */
  width: 100%; /* Optional: Set width if you want responsiveness */
  height: auto; /* Maintain aspect ratio */
  animation: swing 99s linear infinite;
}

.code-icon__img {
  position: absolute; /* Allows positioning relative to the .plan-icon */
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Adjust for the image dimensions */
  z-index: 1; /* Ensure it overlays the background image */
  width: 139px;
  height: 130px;
  background: #baac8f;
  border-radius: 50%;
  border: 4px solid #ede7e3;
}

@keyframes swing {
  0% {
    transform: rotate(-30deg); /* Start at -30 degrees */
  }
  50% {
    transform: rotate(30deg); /* Swing to 30 degrees */
  }
  100% {
    transform: rotate(-30deg); /* Swing back to -30 degrees */
  }
}
.with-margin {
  margin-top: 80px;
}
@media (max-width: 1024px) {
  .with-margin {
    margin: 0;
  }
}
</style>
