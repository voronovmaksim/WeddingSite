<template>
    <div class="infoAdaptiveFontResolver">
        <div>До свадьбы осталось</div>
        <vue-countdown-timer :start-time="1563589200" :end-time="1623589200" :interval="1000"
                             :end-text="'Свадьба состоялась'"
                             :day-txt="'Дней'" :hour-txt="'Часов'" :minutes-txt="'Минут'" :seconds-txt="'Секнуд'">
            <div slot="end-text" slot-scope="scope">
                <h1>{{scope.props.endText}}</h1>
            </div>
            <div slot="countdown" slot-scope="scope">
                <v-row id="test" justify="center">
                    <div>
                        <div class="text-center">{{scope.props.dayTxt}}</div>
                        <v-progress-circular :size="progressCircularFactor * 29" :width="progressCircularFactor * 26"
                                             :value="100"
                                             color="green">
                            {{scope.props.days}}
                        </v-progress-circular>
                    </div>
                    <div>
                        <div>{{scope.props.hourTxt}}</div>
                        <v-progress-circular :size="progressCircularFactor * 28" :width="progressCircularFactor * 3"
                                             color="green">
                            {{scope.props.hours}}
                        </v-progress-circular>
                    </div>
                    <div>
                        <div>{{scope.props.minutesTxt}}</div>
                        <v-progress-circular :size="progressCircularFactor * 28" :width="progressCircularFactor * 3"
                                             color="green">
                            {{scope.props.minutes}}
                        </v-progress-circular>
                    </div>
                    <div>
                        <div>{{scope.props.secondsTxt}}</div>
                        <v-progress-circular :size="progressCircularFactor * 28" :width="progressCircularFactor * 3"
                                             color="green">{{scope.props.seconds}}
                        </v-progress-circular>
                    </div>
                </v-row>
            </div>
        </vue-countdown-timer>
    </div>
</template>

<script>
    import VariablesScss from '../styles/variables.scss'

    export default {
        name: "Timer",
        methods: {},
        computed: {
            progressCircularFactor() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs':
                        return VariablesScss.xsFontSizeFactor * 2
                    case 'sm':
                        return VariablesScss.smFontSizeFactor * 2
                    case 'md':
                        return VariablesScss.mdFontSizeFactor * 1.8
                    case 'lg':
                        return VariablesScss.lgFontSizeFactor * 1.5
                    case 'xl':
                        return VariablesScss.xlFontSizeFactor * 1.5
                    default:
                        alert("Error vor");
                        return ""
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import 'src/styles/styles.scss';

    #test {
        @include vor-font-size-breakpoints(0.5)
    }
</style>