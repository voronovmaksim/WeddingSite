<template>
    <v-container fluid>
        <v-row class="flex-column">
            <v-col>
                <v-icon>mdi-emoticon-happy-outline</v-icon>
                <div class="font-italic">Ведущая</div>
            </v-col>
            <v-col>
                <v-avatar>
                    <img src="https://sun1-88.userapi.com/s/v1/ig2/3droen9-mZvqcOM7X2MNXWjZE1dvguEwuPH_4UhQNHWuwyeFJzdcuu0ZLbu74e9yqtg3wjjeGsY2yNotdyalbuHM.jpg?size=200x0&quality=96&crop=283,685,630,630&ava=1">
                </v-avatar>
                <v-row justify="center" class="flex-column" no-gutters>
                    <v-col>Диана Зальвовская
                        <a :href="urlVk">
                            <v-icon>$vuetify.icons.vk</v-icon>
                        </a>
                    </v-col>
<!--                    <v-col>(по любым вопросам)</v-col>-->
                </v-row>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
export default {
    data() {
        return {
            urlVk: "https://vk.com/id117172188"
        };
    },
}
</script>

<style>

</style>