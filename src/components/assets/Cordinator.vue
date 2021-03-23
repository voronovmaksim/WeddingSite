<template>
    <v-container fluid>
        <v-row class="flex-column">
            <v-col>
                <v-icon>mdi-emoticon-happy-outline</v-icon>
                <div class="font-italic">Координатор</div>
            </v-col>
            <v-col>
                <v-avatar>
                    <img src="https://sun1-20.userapi.com/s/v1/if1/X13KeYXxrwcBjrGqbk4-d5-tOD2XVj4w_c_AbHu3-awEQ_Lh57IB26JnJvRgsQ_Kd171mE2d.jpg?size=50x0&quality=96&crop=58,394,1297,1297&ava=1">
                </v-avatar>
                <v-row justify="center" class="flex-column" no-gutters>
                    <v-col>Дарья Чегодаева
                        <a :href="urlVk">
                            <v-icon>$vuetify.icons.vk</v-icon>
                        </a>
                    </v-col>
                    <v-col>(по любым вопросам)</v-col>
                </v-row>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
export default {
    data() {
        return {
            urlVk: "https://vk.com/chegodaevaaa"
        };
    },
}
</script>

<style>

</style>

<!--<template>-->
<!--    <v-container style="margin-top: -0.5%;">-->
<!--        <v-row justify="center" style="font: 1vw Neothic;">-->
<!--            Хештег мероприятия: <a :href=urlInsta> #наконецВороновы</a>-->
<!--        </v-row>-->
        <v-row justify="center" style="font: 1vw Neothic;">
<!--            Посомтреть все фотографии: <a :href=urlInsta>-->
<!--            <v-icon>$vuetify.icons.inst</v-icon>-->
<!--&lt;!&ndash;        </a>&ndash;&gt;-->
<!--        </v-row>-->
<!--    </v-container>-->
<!--</template>-->

<!--<script>-->
<!--    export default {-->
<!--        data() {-->
<!--            return {-->
<!--                urlInsta: "https://www.instagram.com/explore/tags/%D0%BD%D0%B0%D0%BA%D0%BE%D0%BD%D0%B5%D1%86%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%BE%D0%B2%D1%8B/"-->
<!--            };-->
<!--        },-->
<!--        methods: {-->
<!--            next() {-->
<!--                window.location.href = this.urlInsta;-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
