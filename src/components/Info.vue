<template>
    <v-container :class="{'raise-font-size': $vuetify.breakpoint.smAndUp}" class="ma-0 pa-0" fluid>
        <v-row no-gutters class="flex-column flex-md-row">
            <v-col md="4">
                <vor-where-vue></vor-where-vue>
            </v-col>
            <v-divider></v-divider>
            <v-col md="4">
                <vor-when-vue></vor-when-vue>
            </v-col>
            <v-divider></v-divider>
            <v-col md="4">
                <vor-guest-time></vor-guest-time>
            </v-col>
            <v-divider></v-divider>
            <v-col md="4">
                <vor-dresscode></vor-dresscode>
            </v-col>
            <v-divider></v-divider>
            <v-col md="4">
                <vor-timer></vor-timer>
            </v-col>
            <v-divider></v-divider>
            <v-col md="4">
                <vorCordinator></vorCordinator>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import WhenVue from './assets/When.vue'
    import WhereVue from './assets/Where.vue'
    import GuestTimeVue from './assets/GuestTime.vue'
    import DresscodeVue from './assets/Dresscode.vue'
    import TimerVue from './assets/Timer.vue'
    import CordinatorVue from './assets/Cordinator'

    export default {
        components: {
            vorWhenVue: WhenVue,
            vorWhereVue: WhereVue,
            vorGuestTime: GuestTimeVue,
            vorDresscode: DresscodeVue,
            vorTimer: TimerVue,
            vorCordinator: CordinatorVue
        }
    }
</script>

<style >
.raise-font-size{
    font-size: 20px;
}
</style>