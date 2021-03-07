<template>
    <div>
        <div id="guestName">{{guestName}}</div>
        <div>
            Мы будем рады видеть вас на нашей свадьбе, <br>
            которая состоится: <br>
            13 июня 2021 года <br>
        </div>
    </div>
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
