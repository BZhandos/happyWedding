<script setup>
import { ref, computed } from 'vue'
import audioFile from '@/assets/song.mp3'
import { useRoute } from 'vue-router'
import { useMainStore } from '@/stores/guests'

const route = useRoute()
const store = useMainStore()

const guestHash = computed(() => route.params?.hash)

const guest = computed(() => {
  return store.guestList[guestHash.value]
})

const isPlaying = ref(false)
const counter = ref(0)

const audio = new Audio(audioFile)

function playMusicHandler() {
  counter.value++
  isPlaying.value = true
  audio.play()
  if (counter.value > 5) {
    alert('Stop clicking')
    counter.value = 0
  }
}
function stopMusicHandler() {
  isPlaying.value = false
  audio.pause()
}
</script>

<template>
  <div class="main-block">
    <div class="main-block__header">Our wedding</div>
    <div class="main-box">
      <img alt="img" class="main-box__img" src="@/assets/img/mainFram.png" />
      <div class="main-box__title">
        <img
          v-if="!isPlaying"
          @click="playMusicHandler"
          alt="img"
          class="main-box__song"
          src="@/assets/img/song_img.svg"
        />
        <img
          v-else
          @click="stopMusicHandler"
          alt="img"
          class="main-box__song"
          src="@/assets/img/song_pause.svg"
        />
        <div>
          <img alt="img" class="" src="@/assets/img/names.svg" />
        </div>
        <div>3 | MAY | 2025</div>
      </div>
    </div>
    <!--    <div class="main-block__desc">-->
    <!--      On this day we would like to invite you to share with us the joy of the best and most touching-->
    <!--      day of our lives!-->
    <!--    </div>-->

    <div class="main-block__desc">
      <div class="background-image"></div>
      <div class="main-block__desc">
        {{ guest.name }}
        この日、私たちの人生で最高で最も感動的な日の喜びを、皆さんと一緒に分かち合いたいと思います。
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-block {
  padding: 20px 10px 10px 10px;
  height: 100vh;
}
.main-block__header {
  text-align: center;
  font-size: 26px;
}
.main-block__desc {
  margin: 0 auto;
  text-align: center;
  font-size: 22px;
  max-width: 320px;
}
.background-image {
  position: absolute; /* Position the image relative to .text-overlay */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/img/text-bg1.png'); /* Replace with your image URL */
  background-size: cover; /* Ensures the image covers the entire div */
  background-position: center; /* Centers the image */
  opacity: 0.4; /* Adjust opacity as needed */
  z-index: -1; /* Places the background behind the text */
}
.main-box {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
.main-box__song {
  position: absolute;
  top: -100px;
  left: 25px;
  cursor: pointer;
  animation: pulsing 0.8s infinite linear;
  backface-visibility: hidden;
}
@media (max-width: 740px) {
  .main-box__song {
    top: -80px;
  }
}
.main-box__img {
  max-width: 800px;
  width: 100%;
}
.main-box__title {
  position: absolute;
  top: 50%;
  left: 48%;
  transform: translate(-50%, -50%);
  color: black;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  text-align: center;
}
@keyframes pulsing {
  0% {
    transform: scale(1, 1);
    animation-timing-function: linear;
  }
  50% {
    transform: scale(1.05, 1.05);
    animation-timing-function: linear;
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>
