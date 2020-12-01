<template>
<v-container>
    <vue-countdown-timer :start-time="1563589200" :end-time="1623589200" :interval="1000"
      :end-label="'До события осталось'" :end-text="'Свадьба состоялась'"
      :day-txt="'Дней'" :hour-txt="'Часов'" :minutes-txt="'Минут'" :seconds-txt="'Секнуд'"
    >
      <v-container class="text-center" slot="start-label" slot-scope="scope">
        <h1>{{scope.props.endLabel}}:</h1>
      </v-container>
      
      <v-container slot="countdown" slot-scope="scope">
        <v-row justify="center">
          <v-col cols="6">
             <v-row justify="center">
                  <v-col cols="3">
                    <v-row justify="center">{{scope.props.dayTxt}}</v-row>
                    <v-row justify="center"><v-progress-circular :size="100" :width="15" color="green">{{scope.props.days}}</v-progress-circular></v-row>
                  </v-col>
                   <v-col cols="3">
                    <v-row justify="center">{{scope.props.hourTxt}}</v-row>
                    <v-row justify="center"><v-progress-circular :size="100" :width="15" color="green">{{scope.props.hours}}</v-progress-circular></v-row>
                  </v-col>
                   <v-col cols="3">
                    <v-row justify="center">{{scope.props.minutesTxt}}</v-row>
                    <v-row justify="center"><v-progress-circular :size="100" :width="15" color="green">{{scope.props.minutes}}</v-progress-circular></v-row>
                  </v-col>
                   <v-col cols="3">
                    <v-row justify="center">{{scope.props.secondsTxt}}</v-row>
                    <v-row justify="center"><v-progress-circular :size="100" :width="15" color="green">{{scope.props.seconds}}</v-progress-circular></v-row>
                  </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

    </vue-countdown-timer>
  </v-container>
</template>
 
<script >
export default {
  name: "Timer",
  methods: {

  }
};
</script>

<style scoped>
/* #table{
  background-color: transparent;
} */
/* tr{
  pointer-events: none;
} */


</style>