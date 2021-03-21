<template>
    <v-app id="page">
        <v-main fluid>
            <v-container class="ma-0 pa-0" fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
        <vor-footer></vor-footer>
    </v-app>
</template>

<script>
    import FooterVue from './components/Footer.vue'
    export default {
        components: {
            vorFooter: FooterVue
        }
    }
</script>

<style lang="scss">
    @font-face {
        font-family: $guest-font;
        src: local($guest-font),
        url(./assets/fonts/saint-amour-regular.woff) format("truetype");
    }
</style>