<script setup></script>

<template>
  <div class="details-container">
    <div class="details-title">Детали</div>
    <div class="details-desc">
      Мы от всего сердца просим воздержаться от традиционных криков "Горько" и поддержать атмосферу
      уютного семейного таинства, как это принято в Японии.
    </div>
    <div class="gift-title">Подарки</div>
    <div class="gift-desc">
      Пожалуйста, воздержитесь от дарения цветов или других вещей — к сожалению, мы не сможем
      насладиться ими или использовать их до нашего отъезда.
    </div>
    <div class="gift-desc">
      В Японии принято дарить деньги в качестве свадебного подарка, и мы будем благодарны, если вы
      поддержите эту традицию, отдавая предпочтение наличным средствам(йены).
    </div>
    <img src="@/assets/img/text-bg3.png" alt="Left Corner" class="details-container-img left2" />
    <img src="@/assets/img/text-bg1.png" alt="Right Corner" class="details-container-img right2" />
  </div>
</template>

<style scoped>
.gift-title {
  text-align: center;
  font-size: 4rem;
  margin-top: 40px;
}
.gift-desc {
  font-size: 20px;
  text-align: center;
  max-width: 520px;
  margin: 0 auto;
  padding: 0 10px;
}
.details-container {
  position: relative;
  overflow: hidden;
}
.details-title {
  text-align: center;
  font-size: 4rem;
  margin-top: 40px;
}
.details-desc {
  font-size: 20px;
  text-align: center;
  max-width: 520px;
  margin: 0 auto;
  padding: 0 10px;
}
.details-container-img {
  position: absolute;
  max-width: 360px;
  height: auto;
  z-index: -1;
}

.details-container-img.left2 {
  top: 10px;
  left: -50px;
  transform: rotate(30deg);
}

.details-container-img.right2 {
  top: 250px;
  right: -10px;
  transform: rotate(-30deg);
}
@media (max-width: 1024px) {
  .details-container-img.left2 {
    opacity: 0.3;
  }
  .details-container-img.right2 {
    top: 350px;
    opacity: 0.3;
  }
}
@media (max-width: 500px) {
  .details-container-img.left2 {
    opacity: 0.3;
  }
  .details-container-img.right2 {
    display: none;
  }
}
</style>
