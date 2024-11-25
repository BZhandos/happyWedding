<script setup></script>

<template>
  <div class="schedule-title">Расписание</div>
  <div class="plan-box">
    <div class="plan-box__item">
      <div class="plan-icon">
        <img class="plan-icon__bg" alt="img" src="@/assets/planning/planning-flowers.png" />
        <img class="plan-icon__img" alt="img" src="@/assets/planning/_1.png" />
      </div>
      <div class="plan-box__title">Сбор гостей</div>
      <div class="plan-box__dec">Japan, Tokyo, Roppongi-ku</div>
      <div class="plan-box__time">14:30-15:00</div>
    </div>
    <div>
      <div class="plan-icon">
        <img class="plan-icon__bg delay1" alt="img" src="@/assets/planning/planning-flowers.png" />
        <img class="plan-icon__img" alt="img" src="@/assets/planning/_2.png" />
      </div>
      <div class="plan-box__title">Регистрация</div>
      <div class="plan-box__dec">Roof</div>
      <div class="plan-box__time">15:30-16:30</div>
    </div>
    <div>
      <div class="plan-icon">
        <img class="plan-icon__bg delay2" alt="img" src="@/assets/planning/planning-flowers.png" />
        <img class="plan-icon__img" alt="img" src="@/assets/planning/_3.png" />
      </div>
      <div class="plan-box__title">Банкет</div>
      <div class="plan-box__dec">Main Hall under Sakura Tree</div>
      <div class="plan-box__time">16:30-21:00</div>
    </div>
  </div>
</template>

<style scoped>
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
</style>
