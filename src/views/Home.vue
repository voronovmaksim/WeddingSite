<template>
    <div>
        <vue-scroll-snap :fullscreen="true">

            <div class="item">
                <vor-header></vor-header>
                <vor-countdown></vor-countdown>
            </div>
            <div class="item">
                <vor-address></vor-address>
                <vor-dresscode></vor-dresscode>
                <!-- <vor-hashtag></vor-hashtag> -->
                <vor-program></vor-program>
                <vor-contractor></vor-contractor>
                <!-- <vor-footer></vor-footer> -->
                <vor-hashtag></vor-hashtag>

            </div>
        </vue-scroll-snap>
    </div>
</template>

<script>
    import VueScrollSnap from "vue-scroll-snap";
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
            VueScrollSnap
        }
    }
</script>

<style scoped>
</style>
