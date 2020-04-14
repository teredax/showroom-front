<template>
                  <ul v-for="(tag,j) in itemObj.tags" :key="j"> <a href="#" class="badge badge-pill badge-primary"> {{tag}} </a></ul>
<div >
    <div >
        <div>
            <v-container fluid grid-list-md>
                <v-layout row wrap>
                    <template v-for="(itemObj,i) in items">
                        <v-flex :key="`${i}-${itemObj.title}`" xs12 sm4 md14>
                            <a  @click="displayDetails(itemObj._id)">
                                <img :src="itemObj.img_principal"  alt="...">
                                <div>
                                    <h1 class="card-title">{{itemObj.title}}</h1>
                                    <div class="overlay">
                                        <p class="card-text">{{itemObj.title_descr_1}}</p>
                                    </div>
                                    <div class="badge-position">
                                        <ul v-for="(tag,j) in itemObj.tags" :key="j"> <a href="#" class="badge badge-pill badge-primary"> {{tag}} </a></ul>
                                    </div>
                                </div>
                            </a>
                        </v-flex>
                    </template>
                </v-layout>
            </v-container>
            <!-- Moadal show details -->
            <div class="modal fade bd-example-modal-lg" tabindex="-1 " role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <DetailedItem></DetailedItem>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

</template>

<script>
import {
    mapState
} from 'vuex';

export default {
    name: "CardItem",
    data: () => ({
        cards: [

            {
                title: 'Proyecto 1',
                subtitle: 'Subtitulo de proyecto',
                src: require('@/assets/Proy1.png'),
                tags: "Financiero"
            },

        ],
    }),
    components: {
        DetailedItem: () => import('@/components/DetailsItem'),
    },
    computed: mapState(['items']),

    methods: {
        displayDetails(itemId) {
            // this.$store.dispatch('load',itemId)
            this.$store.dispatch('loadDetailsItem', itemId)
        }
    }
}
</script>

<style>
.rowCards {
    height: 500px;
}

.card-group {
    height: 500px;
}

.card {
    height: 500px;
}

.card-title {
    color: #14528D;
}

.card-text {
    color: #ffffff;
}

.card-img-overlay:hover {
    transition: 1s !important;
    transition-delay: 1s !important;
    background-image: linear-gradient(to top, rgba(46, 46, 46, 0), rgba(46, 46, 46, 1));
}

.badge {
    margin: 1px;
    font-size: 130% !important;
}

.badge-primary {
    background-color: #5576d1 !important;
}

.badge-primary:hover {
    background-color: #7e9df2 !important;
}

.badge-light {
    color: #5576d1 !important;
    border-color: #5576d1;
}

.badge-position {
    position: absolute;
    left: 0px;
    bottom: 5px;
    padding: 5px 10px;
}

.overlay {

    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .2s ease;
}

.card:hover .overlay {
    opacity: 1;
}

.nopadding {
    padding: 0 !important;
    margin: 0 !important;
}

.detailsItem {
    position: absolute;
}

ul,
a {
    display: inline;

}
</style>
