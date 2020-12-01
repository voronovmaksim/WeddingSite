<template>
  <v-container>
    <v-row justify="center" class="text-center mb-5" style=" font: 2vw Montserrat; font-weight: 900">
      Свадьба состоится в Яхт-клуб "Лето" по адресу: <br>
      Набережная Гребного канала, 109, Нижний Новгород
    </v-row>
    <yandex-map :settings="settings" :coords="coords" >
      <ymap-marker 
        marker-id="123" 
        :coords="coords"
        :balloon-template="balloonTemplate"
      ></ymap-marker>
    </yandex-map>
  </v-container>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
export default {
  components: { yandexMap, ymapMarker },
  data: () => ({
    coords: [56.329627, 44.055070],
    settings: {
      apiKey: '',
      lang: 'ru_RU',
      coordorder: 'latlong',
      version: '2.1'
    }
  }),
  computed: {
    balloonTemplate() {
      return `
        <h1 class="red">Hi, everyone!</h1>
        <p>I am here: ${this.coords}</p>
        <img src="http://via.placeholder.com/350x150">
      `
    }
  },
}
</script>

<style>
.ymap-container {
  height: 600px;
}

.red {
  color: white;
}
</style>