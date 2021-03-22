<template>
    <v-container fluid id="vorHeader">
        <v-row id="upFontSize" class="white--text">
            <v-col cols="12" >
                <div :class="{'pl-16 ml-16': $vuetify.breakpoint.smAndUp, 'pl-11':$vuetify.breakpoint.xsOnly}"
                     class="headerFont text-md-h1-em text-sm-h4-em text-h5-em">Максим & Татьяна</div>
                <div class="subtitleFont text-md-h3 text-sm-h5 text-subtitle-1">Are getting maried</div>
            </v-col>
            <v-col cols="12">
                <div class="subtitleFont text-lg-h1 text-sm-h4 text-h6 font-weight-medium">{{ guest.guestName }}</div>
                <div class="subtitleFont text-md-h3 text-sm-h5 text-subtitle-1">Приглашаем {{ pronoun }} на нашу свадьбу</div>
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
            },
            pronoun () {
                const guest = this.guest.guestName.toString().toLowerCase();
                let isVas = (guest.indexOf(" и ") != -1 || guest.indexOf("родители") != -1);
                console.log(guest.indexOf("родители"))
                var res ="Тебя";
                if (isVas){
                    res="Вас"
                }
                return res;
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
        /*@media #{map-get($display-breakpoints, 'md-and-up')} {*/
            background: url('../assets/background/header/pcBack.png');
            background-size: cover;

            /*background: red;*/

        /*}*/
 /*       @media #{map-get($display-breakpoints, 'sm-and-down')} {
            background: url('../assets/background/header/phoneBack.png');
            background-size: cover;
            background-repeat: no-repeat;
            !*background: red;*!
        }*/
    }

</style>
