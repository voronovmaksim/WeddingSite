<template>
    <v-container fluid id="vorHeader">
        <v-row id="upFontSize" class="text-no-wrap white--text">
            <v-col cols="12" >
                <div class="headerFont text-lg-h1-em text-h6-em">Максим & Татьяна</div>
                <div class="subtitleFont text-md-h3 text-subtitle-1">Are getting maried</div>
            </v-col>
            <v-col cols="12">
                <div class="subtitleFont text-lg-h1 text-subtitle-1">{{ guest.guestName }}</div>
                <div class="subtitleFont text-md-h3 text-subtitle-1">Приглашаем вас на нашу свадьбу</div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        computed: {
            getGuests(){
                return this.$store.getters.guests
            },
            guest () {
                const url = this.$route.params.url;
                return this.$store.getters.guestByUrl(url)
            }
        }
    };
</script>

<style lang="scss" scoped>
    .headerFont{
        font-family: $guest-font !important;
    }
    .subtitleFont{
        font-family: 'Lora', serif !important;
    }
    #upFontSize{
        font-size: 4rem;
    }

    $background-attr: background;
    #vorHeader {
        @media #{map-get($display-breakpoints, 'md-and-up')} {
            background: url('../assets/background/header/pcBack.png');
            background-size: cover;

            /*background: red;*/

        }
        @media #{map-get($display-breakpoints, 'sm-and-down')} {
            background: url('../assets/background/header/phoneBack.png');
            background-size: cover;
            background-repeat: no-repeat;
            /*background: red;*/
        }
    }

</style>
