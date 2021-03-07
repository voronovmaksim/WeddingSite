<template>
    <div>
        <v-row justify="center">
            <v-col cols="5">
                <div>
                    Координатор: Дарья Чегодаева <a :href=vkDasha>
                    <v-icon>$vuetify.icons.vk</v-icon>
                </a></div>
                <div justify="center">
                    <v-img src="@/assets/photos/Daria.jpg"></v-img>
                </div>
            </v-col>
            <v-divider vertical insert></v-divider>
            <v-col cols="5">
                <div>Ведущи: Дмитрий Лобанов <a :href=vkDima>
                    <v-icon>$vuetify.icons.vk</v-icon>
                </a></div>
                <div>
                    <v-img src="@/assets/photos/Lobanov.jpg"></v-img>
                </div>
            </v-col>
        </v-row>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                vkDasha: "https://vk.com/chegodaevaaa",
                vkDima: "https://vk.com/lobanovdmitryy"
            }
        }
    };
</script>

<style scoped>
</style>
