<template>
    <v-container fluid>
        <v-row class="flex-column">
            <v-col>
                <v-icon>mdi-calendar-range</v-icon>
                <div class="font-italic">Когда</div>
            </v-col>
            <v-col>
                <div>7 августа</div>
                <div>2021 года</div>
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
            var start = new Date('August 7, 2021 12:30:00') //WTF time is incorretct
            var end = new Date('August 7, 2021 20:00:00')
            var loc="Загородный клуб Авиатор. ул. Авиационная, дом 1, Большое Козино";
            this.$ics.addEvent("ru", "Свадьба Максима и Светланы", "Будем рады вас видеть", loc, start, end,"",{})
        }
    }

</script>

<style>

</style>