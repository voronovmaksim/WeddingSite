<template>
    <v-container fluid id="vorHeader">
        <v-row class="text-no-wrap white--text">
            <v-col cols="12" >
                <div class="text-md-h1 text-h4 vorFont">Максим & Татьяна</div>
                <div class="text-md-h5 text-h7">Are getting mmaried</div>
            </v-col>
            <v-col cols="12">
                <div class="text-md-h2 text-h5">{{guestName}}</div>
                <div class="text-md-h3 text-h7">Приглашаем вас на нашу свадьбу</div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                guestName: "Тимур & Лида"
            };
        }
    };
</script>

<style lang="scss" scoped>
    .vorFont{
        font-family: $guest-font, sans-serif !important;
    }

    $background-attr: background;
    #vorHeader {
        @media #{map-get($display-breakpoints, 'md-and-up')} {
            background: url('../assets/background/header/pcBack.png');
            background-size: cover;
            background-repeat: no-repeat;
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
