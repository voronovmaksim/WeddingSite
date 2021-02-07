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
     background-image:  url(./assets/background/flowerTop.svg), url(./assets/background/background.svg), url(./assets/background/flowerBottom.svg);
      background-repeat: no-repeat, repeat-y, no-repeat;
      background-position: top left, center,bottom right;
      background-size:30%, 60%, 30%;
      background-attachment: fixed, scroll, fixed;
  }

  @font-face {
  font-family: "Neothic";
  src: local("Neothic"),
   url(./assets/Neothic.ttf) format("truetype");
}

 @font-face {
  font-family: "KindlyJasmineG";
  src: local("KindlyJasmineG"),
   url(./assets/KindlyJasmineG.otf) format("truetype");
}
</style>