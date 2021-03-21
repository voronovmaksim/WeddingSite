<template>
    <v-footer app fixed dark padless class="text-center">
            <v-col cols="12">
                <a :href="urlInsta" class="white--text text-md-h5 subtitleFont">#наконецВороновы</a>
                <v-icon>$vuetify.icons.inst</v-icon>
            </v-col>
    </v-footer>
</template>

<script>
    export default {
        data() {
            return {
                urlInsta: "https://www.instagram.com/explore/tags/%D0%BD%D0%B0%D0%BA%D0%BE%D0%BD%D0%B5%D1%86%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%BE%D0%B2%D1%8B/"
            };
        },
        methods: {
            next() {
                window.location.href = this.urlInsta;
            }
        }
    }

</script>

<style lang="scss" scoped>
    .subtitleFont {
        font-family: 'Lora', serif !important;
    }
</style>