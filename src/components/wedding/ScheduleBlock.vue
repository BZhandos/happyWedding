<script setup>
import { computed } from 'vue'
import { useMainStore } from '@/stores/guests.js'
const store = useMainStore()

const guest = computed(() => {
  return store.currentGuest
})

const goToGoogleMap = () => {
  const address =
    'https://www.google.com/maps/place/Palazzo+Ducale+Azabu/@35.6642886,139.7299422,17z/data=!3m1!4b1!4m6!3m5!1s0x60188b78979ae66d:0x6a1186edb573ea50!8m2!3d35.6642886!4d139.7299422!16s%2Fg%2F1tk1z0jh?entry=ttu&g_ep=EgoyMDI0MTIwMS4xIKXMDSoASAFQAw%3D%3D'
  window.open(address, '_blank')
}
</script>

<template>
  <div class="schedule-container">
    <div class="schedule-title">
      <img
        v-if="guest.hash !== 'haba-san' && guest.hash !== 'aikawa-san'"
        alt="img"
        width="265"
        src="@/assets/text/schedule.svg"
      />
      <img v-else alt="img" width="265" src="@/assets/text/en_schedule.svg" />
    </div>
    <div class="plan-box">
      <div class="plan-box__item">
        <div class="plan-icon">
          <img class="plan-icon__bg" alt="img" src="@/assets/planning/planning-flowers.png" />
          <img class="plan-icon__img" alt="img" src="@/assets/planning/_1.png" />
        </div>
        <div class="plan-box__title">
          <img
            v-if="guest.hash !== 'haba-san' && guest.hash !== 'aikawa-san'"
            alt="img"
            width="211"
            src="@/assets/text/guest.svg"
          />
          <img v-else alt="img" width="211" src="@/assets/text/en_guests.svg" />
        </div>
        <div class="plan-box__dec">
          Japan, Tokyo, Roppongi-ku <br />
          <span class="plan-box__dec-link" @click="goToGoogleMap"
            >Google map
            <img alt="map" src="@/assets/img/map.png" />
          </span>
        </div>
        <div class="plan-box__time">14:30-15:00</div>
      </div>
      <div>
        <div class="plan-icon">
          <img
            class="plan-icon__bg delay1"
            alt="img"
            src="@/assets/planning/planning-flowers.png"
          />
          <img class="plan-icon__img" alt="img" src="@/assets/planning/_2.png" />
        </div>
        <div class="plan-box__title">
          <img
            v-if="guest.hash !== 'haba-san' && guest.hash !== 'aikawa-san'"
            alt="img"
            width="211"
            src="@/assets/text/reg.svg"
          />
          <img v-else alt="img" width="211" src="@/assets/text/en_registration.svg" />
        </div>
        <div class="plan-box__dec">Terrace</div>
        <div class="plan-box__time">15:30-16:30</div>
      </div>
      <div>
        <div class="plan-icon">
          <img
            class="plan-icon__bg delay2"
            alt="img"
            src="@/assets/planning/planning-flowers.png"
          />
          <img class="plan-icon__img" alt="img" src="@/assets/planning/_3.png" />
        </div>
        <div class="plan-box__title">
          <img
            v-if="guest.hash !== 'haba-san' && guest.hash !== 'aikawa-san'"
            alt="img"
            width="140"
            src="@/assets/text/banket.svg"
          />
          <img v-else alt="img" width="140" src="@/assets/text/en_banquet.svg" />
        </div>
        <div class="plan-box__dec">Main Hall under Sakura Tree</div>
        <div class="plan-box__time">16:30-21:00</div>
      </div>
    </div>
    <img src="@/assets/img/text-bg2.png" alt="Left Corner" class="corner-image left" />
    <img src="@/assets/img/text-bg3.png" alt="Left Corner" class="corner-image left2 chisai" />

    <img src="@/assets/img/text-bg2.png" alt="Right Corner" class="corner-image right" />
    <img src="@/assets/img/text-bg1.png" alt="Right Corner" class="corner-image right2 chisai" />
  </div>
</template>

<style scoped>
.schedule-container {
  position: relative;
  overflow: hidden;
}
.corner-image {
  position: absolute;
  max-width: 460px;
  height: auto;
  z-index: -1;
}

.corner-image.left {
  top: 10px;
  left: -150px;
}

.corner-image.right {
  top: 10px;
  right: -200px;
  transform: rotate(30deg);
}
.chisai {
  max-width: 150px;
}
.corner-image.left2 {
  top: 150px;
  left: -50px;
  transform: rotate(30deg);
}

.corner-image.right2 {
  top: 150px;
  right: -10px;
}
@media (max-width: 1024px) {
  .corner-image.right {
    top: 240px;
  }
  .corner-image.right2 {
    top: 350px;
  }
}
@media (max-width: 431px) {
  .corner-image.right2 {
    top: 550px;
  }
  .corner-image.right {
    top: 550px;
  }
}
.schedule-title {
  text-align: center;
  font-size: 4rem;
}
.plan-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  text-align: center;
}

.plan-icon {
  width: 170px;
  position: relative; /* Set the parent container as the positioning context */
  display: inline-block; /* Ensure the size is based on its content */
}

.plan-icon__bg {
  display: block; /* Ensure it takes its natural dimensions */
  width: 100%; /* Optional: Set width if you want responsiveness */
  height: auto; /* Maintain aspect ratio */
  animation: swing 99s linear infinite;
}

.plan-icon__img {
  position: absolute; /* Allows positioning relative to the .plan-icon */
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%); /* Adjust for the image dimensions */
  z-index: 1; /* Ensure it overlays the background image */
  width: 91px;
  height: 91px;
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
.plan-box__title {
  font-size: 24px;
  margin-bottom: 20px;
}
.plan-box__dec {
  color: #403f3f;
  font-size: 14px;
}
.plan-box__time {
  color: rgb(216, 167, 75);
  font-size: 14px;
}
@media (max-width: 431px) {
  .plan-box {
    gap: 20px;
  }
  .plan-box__title {
    margin: unset;
  }
}
.plan-box__dec-link {
  text-decoration: underline;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.plan-box__dec-link:hover {
  color: cornflowerblue;
}

.plan-box__dec-link img {
  width: 24px;
}
</style>
