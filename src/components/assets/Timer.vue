<template>
    <v-container fluid>
        <v-row class="flex-column">
            <v-col>
                <v-icon>mdi-timer-sand</v-icon>
                <div>До мероприятия</div>
            </v-col>
            <v-col>
                <vue-countdown-timer :start-time="1563589200" :end-time="1623589200" :interval="1000"
                                     :end-text="'Свадьба состоялась'"
                                     :day-txt="'Дней'" :hour-txt="'Часов'" :minutes-txt="'Минут'"
                                     :seconds-txt="'Секнуд'">
                    <v-col slot="end-text" slot-scope="scope">{{scope.props.endText}}</v-col>
                    <div slot="countdown" slot-scope="scope">
                        <v-row justify="center">
                            <v-col>
                                <div>{{scope.props.dayTxt}}</div>
                                <div>{{scope.props.days}}</div>
                            </v-col>
                            <v-col>
                                <div>{{scope.props.hourTxt}}</div>
                                <div>{{scope.props.hours}}</div>
                            </v-col>
                            <v-col>
                                <div>{{scope.props.minutesTxt}}</div>
                                <div>{{scope.props.minutes}}</div>
                            </v-col>
                            <v-col>
                                <div>{{scope.props.secondsTxt}}</div>
                                <div>{{scope.props.seconds}}</div>
                            </v-col>

                        </v-row>
                    </div>
                </vue-countdown-timer>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>

</script>

<style>

</style>