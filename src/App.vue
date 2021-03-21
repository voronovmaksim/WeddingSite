<template>
    <v-app id="page">
        <v-main fluid>
            <v-container class="ma-0 pa-0" fluid>
                <router-view></router-view>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    @font-face {
        font-family: $guest-font;
        src: local($guest-font),
        url(./assets/fonts/saint-amour-regular.woff) format("truetype");
    }
</style>