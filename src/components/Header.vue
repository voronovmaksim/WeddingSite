<template>
  <v-container app fluid id="header">
    <v-row>
      <v-col sx12 md6 class="text-center">
          <h1 >Дорогие</h1>
          <h1>{{guestName}}</h1>
          <p style="font: 2vw Montserrat;" class="mb-5">
              Мы будем счастливы видеть вас на нашей свадьбе, которая состоится:
          </p>
          <p style=" font: 2vw Montserrat; font-weight: 900">
              13 июня 2021 года
          </p>
          <v-btn>Пойду</v-btn>
          <v-btn>Не пойду</v-btn>
      </v-col>
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

h1 {
  /* font-size:8vw; */
  font: 7vw Montserrat;
  /* font: 8vw; */
}

</style>
