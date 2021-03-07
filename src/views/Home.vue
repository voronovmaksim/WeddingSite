<template>
    <v-container class="text-center adaptiveFontResolver">
        <vor-header></vor-header>
        <vor-countdown></vor-countdown>
        <vor-address></vor-address>
        <vor-dresscode></vor-dresscode>
        <vor-program></vor-program>
        <vor-contractor></vor-contractor>
        <vor-hashtag></vor-hashtag>
    </v-container>
</template>

<script>
    import HeaderVue from '../components/Header.vue'
    import CountdownVue from '../components/Countdown.vue'
    import AddressVue from '../components/Address.vue'
    import DresscodeVue from '../components/Dresscode.vue'
    import HashtagVue from '../components/Hashtag.vue'
    import ProgramVue from '../components/Program.vue'
    import ContractorVue from '../components/Сontractor.vue'
    // import FooterVue from '../components/Footer.vue'
    export default {
        components: {
            vorHeader: HeaderVue,
            vorCountdown: CountdownVue,
            vorAddress: AddressVue,
            vorDresscode: DresscodeVue,
            vorHashtag: HashtagVue,
            vorProgram: ProgramVue,
            vorContractor: ContractorVue,
            // vorFooter: FooterVue,
            // VueScrollSnap
        }
    }
</script>

<style scoped>
    .v-container{
        padding:5px
    }
</style>
