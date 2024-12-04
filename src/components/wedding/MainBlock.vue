<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMainStore } from '@/stores/guests'

const route = useRoute()
const store = useMainStore()

const guestHash = computed(() => route.params?.hash)

const guest = computed(() => {
  return store.currentGuest
})

onMounted(() => {
  const guest = store.guestList[guestHash.value]
  store.setGuest(guest)
})

const isPlaying = ref(false)
const counter = ref(0)
const audio = new Audio(
  'https://amplify-photobank-dev-173022-deployment.s3.us-east-1.amazonaws.com/song.mp3'
)

function playMusicHandler() {
  audio.loop = true
  isPlaying.value = true
  audio.play()

  counter.value++
  // if (counter.value > 5) {
  //   alert('Stop clicking')
  //   counter.value = 0
  // }
}
function stopMusicHandler() {
  isPlaying.value = false
  audio.pause()
}
</script>

<template>
  <div class="main-block">
    <div class="main-box">
      <picture>
        <source srcset="@/assets/img/mainfram-mob.png" media="(max-width: 700px)" />
        <img alt="img" class="main-box__img" src="@/assets/img/mr2.png" />
      </picture>
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
      <div class="main-box__title">
        <div>
          <img alt="img" class="main-box__names" src="@/assets/img/names2.svg" />
        </div>
        <div class="main-box__date">3 | May | 2025</div>
      </div>
    </div>

    <div class="main-block__desc">
      <div class="background-image"></div>
      <div class="main-block__desc">
        {{ guest.name }}
        Приглашаем вас на наше свадебное мероприятие разделить радость этого дня вместе с нами. We
        invite you to our wedding event to share the joy of this day with us.
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/img/text-bg1.png');
  background-size: cover;
  background-position: center;
  opacity: 0.2;
  z-index: -1;
}
.main-box {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
.main-box__song {
  position: absolute;
  top: 50%;
  left: 50%;
  cursor: pointer;
  animation: pulsing 0.8s infinite linear;
}
.main-box__names {
  width: 200px;
}
.main-box__date {
  color: #565452;
}

@media (max-width: 740px) {
  .main-box__names {
    max-width: 170px;
  }
}
.main-box__img {
  max-width: 800px;
  width: 100%;
}
.main-box__title {
  position: absolute;
  top: 50%;
  left: 50%;
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
