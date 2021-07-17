<template>
    <div class="infoAdaptiveFontResolver">
        <div>Свадьба состоится в Яхт-клуб "Лето" по адресу: <br>
            Большое Козино, ул. Авиационная, дом 1, Нижегородская обл
        </div>

        <v-row justify="center">
            <v-col cols="12" sm="6" id="yandex-map-app">
                <yandex-map :settings="settings" :coords="coords">
                    <ymap-marker :coords="coords" marker-id="123123"/>
                </yandex-map>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import {yandexMap, ymapMarker} from 'vue-yandex-maps'

    export default {
        components: {yandexMap, ymapMarker},
        data: () => ({
            coords: [56.410898, 43.766693],
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

<style lang="scss" scoped>
    #yandex-map-app {
        width: 100%;
        height: 27vh;
    }

    .ymap-container {
        height: 100%;
    }


</style>