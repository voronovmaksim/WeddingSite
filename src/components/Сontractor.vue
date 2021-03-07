<template>
  <v-container style="margin-top: -1.5%; width: 65%;">
    <v-row justify="center">
      <v-col>
          <v-row elevation="25" justify="center" style="font: 1vw Neothic;">Координатор: Дарья Чегодаева <a :href=vkDasha><v-icon>$vuetify.icons.vk</v-icon></a> </v-row>
          <v-row   justify="center">
            <v-img  contain width="30vw" height="30vh"  src="@/assets/photos/Daria.jpg"></v-img>
          </v-row>
        </v-col>
        <v-divider vertical insert></v-divider>
        <v-col>
          <v-row justify="center" style="font: 1vw Neothic;">Ведущий: Дмитрий Лобанов <a :href=vkDima><v-icon>$vuetify.icons.vk</v-icon></a></v-row>
          <v-row justify="center">
            <v-img class="elevation-25" contain width="30vw" height="30vh"  src="@/assets/photos/Lobanov.jpg"></v-img>
          </v-row>
      </v-col>
    </v-row>

  </v-container>
</template>
<script>
export default {
  data (){
    return {
      vkDasha: "https://vk.com/chegodaevaaa",
      vkDima: "https://vk.com/lobanovdmitryy"
    }
  }
};
</script>

<style scoped>
</style>
