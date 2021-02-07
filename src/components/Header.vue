<template>
  <v-container app fluid id="header">
    <v-row>
      <v-container sx12 md6 class="text-center">
          <h1 style="font: 15vw KindlyJasmineG; margin-bottom: 5vw">{{guestName}}</h1>
          <v-container justify="center" style="font: 2vw Montserrat;">
            <v-row justify="center" style="font: 2vw Neothic;">Мы будем рады видеть вас на нашей свадьбе,</v-row>
            <v-row justify="center" style="font: 2vw Neothic; margin-bottom: 5vw"> которая состоится:</v-row>
            <v-row justify="center" style="font: 4vw Neothic;">13 июня 2021 года</v-row>
          </v-container>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      guestName: "Тимур и Лида"
    };
  }
};
</script>

<style scoped>
</style>
