<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
import MainBlock from "@/components/wedding/MainBlock.vue";
import ScheduleBlock from "@/components/wedding/ScheduleBlock.vue";
import DressCode from "@/components/wedding/DressCode.vue";
import RulesBlock from "@/components/wedding/RulesBlock.vue";
import GiftBlock from "@/components/wedding/GiftBlock.vue";
import FromBlock from "@/components/wedding/FromBlock.vue";
import CountDown from "@/components/wedding/CountDown.vue";
import AddressBlock from "@/components/wedding/AddressBlock.vue";
</script>

<template>
  <header>
<!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->

<!--    <div class="wrapper">-->
<!--      <HelloWorld msg="Happy Wife and Life" />-->
<!--      <nav>-->
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--        <RouterLink to="/about">About</RouterLink>-->
<!--      </nav>-->
<!--    </div>-->
  </header>
<!--  <RouterView />-->
  <main-block />
  <schedule-block />
  <dress-code />
  <rules-block />
  <gift-block />
  <from-block />
  <count-down />
  <address-block />

</template>

<style scoped>




@media (min-width: 1024px) {

}
</style>
