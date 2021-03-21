<template>
    <v-container fluid>
        <v-row class="flex-column">
            <v-col>
                <v-icon>mdi-calendar-range</v-icon>
                <div>Когда</div>
            </v-col>
            <v-col>
                <div>13</div>
                <div>Июня 2021</div>
            </v-col>
            <v-col>
                <v-btn elevation="15" @click="downloadCalendar()">Добавить в календарь</v-btn>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
    export default {
        methods: {
            downloadCalendar() {
                this.$ics.download("WeddingMaksimAndTatyana")
            }
        },
        mounted() {
            this.$ics.removeAllEvents()
            var start = new Date('June 13, 2021 12:30:00') //WTF time is incorretct
            var end = new Date('June 13, 2021 20:00:00')
            var loc="Ресторан Шатер Яхт клуб Лето Набережная гребного каналаб 109с1";
            this.$ics.addEvent("ru", "Свадьба Максима и Татьяны", "Будем рады вас видеть", loc, start, end,"",{})
        }
    }

</script>

<style>

</style>