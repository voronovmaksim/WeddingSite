<template>
    <div class="infoAdaptiveFontResolver">
        <div>
            Мы будем рады видеть джентельменов в классическеих костюмах,<br>
            дам в вечерних платьях следующих цветов:
        </div>

        <div>
            <v-row class="dresscode" justify="center">
                <v-col cols="3" sm="1">
                    <div class="pa-9 red rounded-circle"></div>
                    <div>Крансый</div>
                </v-col>
                <v-col cols="3" sm="1">
                    <div class="pa-9 black rounded-circle"></div>
                    <div>Черный</div>
                </v-col>
                <v-col cols="3" sm="1">
                    <div class="pa-9 blue rounded-circle"></div>
                    <div>Синий</div>
                </v-col>
                <v-col cols="3" sm="1">
                    <div class="pa-9 yellow rounded-circle"></div>
                    <div>Желтый</div>
                </v-col>
            </v-row>
        </div>
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
                        return VariablesScss.xsFontSizeFactor * 1.4
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

<style scoped lang="scss">
    @import 'src/styles/styles.scss';

    .dresscode {
        @include vor-font-size-breakpoints(0.5)
    }
</style>
