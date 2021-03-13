<template>
    <v-container fluid class="text-center ma-0 pa-0">
        <vor-header></vor-header>
        <vor-info></vor-info>
        <vor-footer></vor-footer>
    </v-container>
</template>

<script>
    import HeaderVue from '../components/Header.vue'
    import InfoVue from '../components/Info.vue'
    import FooterVue from '../components/Footer.vue'
    export default {
        components: {
            vorHeader: HeaderVue,
            vorInfo: InfoVue,
            vorFooter: FooterVue
        }
    }
</script>

<style scoped>
</style>
