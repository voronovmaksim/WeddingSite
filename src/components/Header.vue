<template>
  <v-container fluid>
    <v-row>
      <v-container sx12 md6 class="text-center">
          <h1 id="guestName">{{guestName}}</h1>
          <v-container>
            <v-row justify="center" class="adaptiveFontResolver">
                Мы будем рады видеть вас на нашей свадьбе, <br>
                которая состоится: <br>
                13 июня 2021 года <br>
            </v-row>
          </v-container>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      guestName: "Тимур и Лида"
    };
  }
};
</script>

<style lang="scss">
    @import 'src/styles/styles.scss';

    #guestName {
        font-family: $guest-font;
        @include vor-font-size-breakpoints(4)
    }
</style>
