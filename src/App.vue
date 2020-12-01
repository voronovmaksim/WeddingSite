<template>
  <v-app id="page">
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  
}
</script>

<style>
   #page {
     background-image: url('./assets/background.jpg');
     /* background-color: #8f2c2c; */
    /* height: 100vh; */
    background-position: center;
    background-repeat: repeat-y;
    background-size: cover;
    position: relative;
  }
</style>