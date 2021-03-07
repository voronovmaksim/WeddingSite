<template>
    <v-container>
        <v-container justify="center">
            <v-row justify="center" style="font: 1vw Neothic;">Свадьба состоится в Яхт-клуб "Лето" по адресу:</v-row>
            <v-row justify="center" style="font: 1vw Neothic;" class="mt-2">Набережная Гребного канала, 109, Нижний
                Новгород
            </v-row>
        </v-container>

        <v-row justify="center" style="margin-top: -1.3%;">
            <v-col cols="12" md="6">
                <div id="yandex-map-app">
                    <yandex-map :settings="settings" :coords="coords">
                        <ymap-marker :coords="coords" marker-id="123123"/>
                    </yandex-map>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {yandexMap, ymapMarker} from 'vue-yandex-maps'

    export default {
        components: {yandexMap, ymapMarker},
        data: () => ({
            coords: [56.329627, 44.055070],
            settings: {
                apiKey: '',
                lang: 'ru_RU',
                coordorder: 'latlong',
                version: '2.1',
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
    #yandex-map-app {
        width: 100%;
        height: 27vh;
    }

    .ymap-container {
        height: 100%;
    }


</style>