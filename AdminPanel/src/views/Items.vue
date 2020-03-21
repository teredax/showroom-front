<template>
<section id="services" style="width:100%;">
    <br>
    <br>
    <br>
    <v-container class="pa-0" grid-list-md text-xs-center>
        <v-layout row justify-start style="margin: 0;">
            <p class="Admin-title" style="color:#809DED; font:SemiBold Raleway; font-size:40px">Items</p>
        </v-layout>
        <v-card class="mx-auto" :elevation="0">

        </v-card>
    </v-container>
</section>
</template>

<script>
import Axios from "axios";
import Authentication from "@/components/Authentication";
export default {
    data: () => ({

    }),
    watch: {

    },
    computed: {

    },
    methods: {

    },
    mounted() {

    },
    components: {

    }
};
</script>

<style>
.selected-title-category {
    font-family: "Open sans", sans-serif;
    color: black;
    font-size: 20px;
}

.stat_title-Statistics {
    font-family: "Open sans", sans-serif;
}

.not_logged_in {
    background-color: black;
}

.content_title-Requests {
    background-color: rgba(250, 250, 250, 1);
}

.title_app-App {
    font-family: "Open sans", "sans-serif";
    color: black;
}

.add-btn {
    background-color: #4DAF7C !important;
    color: white !important;
    font-size: 30px !important;
    font-weight: 200 !important;
    width: 40px !important;
    height: 40px !important;
    min-width: 0 !important;
}

/**
 * Page Styles
 */
</style>
