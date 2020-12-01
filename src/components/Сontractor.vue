<template>
  <v-container>
    <v-row justify="center">
      <h1>На мероприятии будут присутствовать:</h1>
    </v-row>
    <v-row justify="center">
       <v-col cols="6">
         
         <v-row justify="center"><h2>Координатор Дарья Чегодаева</h2></v-row>
        <v-row justify="center"  class="mb-3">(По любым организицонным вопросам <v-icon>$vuetify.icons.vk</v-icon>)</v-row>
         <v-row justify="center">
          <v-img contain  max-height="443" max-width="452" src="@/assets/Daria.jpg"></v-img>
        </v-row>
      </v-col>

      <v-col cols="6">
        <v-row justify="center"><h2>Ведущий Дмитрий Лобанов</h2> </v-row>
        <v-row justify="center"  class="mb-3">(По любым вопросам во время свадьбы<v-icon>$vuetify.icons.vk</v-icon>)</v-row>
        <v-row justify="center">
          <v-img contain  max-height="340" max-width="472" src="@/assets/Lobanov.jpg"></v-img>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {};
</script>

<style scoped>
</style>
