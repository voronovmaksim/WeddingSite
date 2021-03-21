<template>
    <v-container fluid class="text-center ma-0 pa-0">
        <vor-header></vor-header>
        <vor-info></vor-info>
    </v-container>
</template>

<script>
    import HeaderVue from '../components/Header.vue'
    import InfoVue from '../components/Info.vue'
    export default {
        components: {
            vorHeader: HeaderVue,
            vorInfo: InfoVue,
        }
    }
</script>

<style scoped>
</style>
