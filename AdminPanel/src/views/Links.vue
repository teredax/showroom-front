<template>
<section id="services" style="width:100%;">
    <br>
    <br>
    <br>
    <v-container class="pa-0" grid-list-md text-xs-center>
        <v-container class="pa-0" grid-list-md text-xs-center>
            <v-layout row wrap>
                <v-flex xs12 sm2>
                    <v-layout column>
                        <v-layout row justify-start style="margin: 0;">
                            <p class="Admin-title" style="color:#809DED; font:SemiBold Raleway; font-size:40px">Links</p>
                        </v-layout>
                    </v-layout>
                </v-flex>
                <v-flex xs12 sm4 style="padding-top:9px;">
                    <v-layout column>
                        <template>
                            <v-text-field height="40" dense :background-color="'white'" color="#809DED" v-model="search" outlined style="border-color:coral;">
                                <template v-slot:label>
                                    <p v-html="'Búsqueda General...'" />
                                </template>
                            </v-text-field>
                        </template>
                    </v-layout>
                </v-flex>
                <v-flex xs12 sm4>
                    <v-layout column>

                    </v-layout>
                </v-flex>
                <v-flex xs12 sm2>
                    <v-layout column>
                        <v-btn class="mx-2" fab small dark color="#496CAB" @click="dialog = true">
                            <v-icon dark>mdi-plus</v-icon>
                        </v-btn>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-container>

        <v-card class="mx-auto" :elevation="0">
            <MyLinks @updatePage="updatePage" @updatePerPage="updatePerPage" :totalLength="totalLength" :pageCount="pageCount" :page="page" :rowsPerPage="rowsPerPage" :items="items" :light="false" :search="search" />
        </v-card>
    </v-container>

    <v-dialog v-model="dialog" max-width="800" content-class="dialog-radius">
        <v-card>
            <v-card-title class="headline" style="justify-content:left;color:#809DED;">Nuevo Showroom</v-card-title>
            <v-card-text>
                <v-container class="pa-0" grid-list-md text-xs-center>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <v-container class="pa-0" grid-list-md text-xs-left>
                                <v-layout row wrap>
                                    <v-flex xs12 sm8>
                                        <v-layout column>
                                            <v-flex sm6 class="pa-1">
                                                <v-flex sm12 class="pa-1">
                                                    <v-text-field height="40" v-model="newLink.Name" color="#4a6cac" outlined dense style="border-color:coral;">
                                                        <template v-slot:label>
                                                            <p v-html="'Nombre'" />
                                                        </template>
                                                    </v-text-field>
                                                </v-flex>
                                                <v-flex sm12 class="pa-1">
                                                    <v-select v-model="value" outlined :items="tags" attach color="#4a6cac" chips label="Items" multiple>
                                                        <template v-slot:label>
                                                            <p v-html="'Tags'" />
                                                        </template>
                                                    </v-select>
                                                </v-flex>
                                                <v-flex sm12 class="pa-1">
                                                    <v-textarea dense v-model="newLink.Desc" outlined rows="5" row-height="45" :rules="[v => !!v || 'La descripción es requerida']" required color="#4a6cac" counter maxlength="250" style="border-color:coral;">
                                                        <template v-slot:label>
                                                            <p v-html="'Descripción'" />
                                                        </template>
                                                    </v-textarea>
                                                </v-flex>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>

                                    <v-flex xs12 sm4>
                                        <v-layout column>
                                            <template>
                                                <v-data-table :light="light" no-data-text="No hay datos" :page.sync="page" :items-per-page.sync="perPage" :headers="headers" :items="added" hide-default-footer item-key="_id">
                                                    <template v-slot:item="props">
                                                        <tr>
                                                            <td class="request-td">{{props.item.name}}</td>
                                                            <td class="request-td" :class="'accion'" style="text-align:center; min-width:100px;">
                                                                <v-icon small @click="deletdialog = true " color="black">mdi-delete</v-icon>
                                                            </td>
                                                        </tr>
                                                    </template>
                                                </v-data-table>
                                            </template>
                                        </v-layout>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
            <v-card-actions style="justify-content: center;">
                <v-btn style="text-transform: none; width: 25%; margin-right: 10%;" color="#E36E6E" @click="dialog = false" dark>Cancelar</v-btn>
                <v-btn depressed style="text-transform: none; width: 25%; background-color: #809DED; color: white;" @click="dialog = false" color="#809DED">Aceptar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

</section>
</template>

<script src="https://unpkg.com/filepond-plugin-image-preview"></script>
<script src="https://unpkg.com/filepond"></script>
<script src="https://unpkg.com/vue-filepond"></script>
<script>
import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

const FilePond = vueFilePond(
    FilePondPluginFileValidateType,
    FilePondPluginImagePreview
);
import Axios from "axios";
import Authentication from "@/components/Authentication";
export default {
    data: () => ({
        pageCount: 0,
        totalLength: 0,
        rowsPerPage: 10,
        page: 1,
        newLink:{
            Name:"",
            Desc: ""
        },
        search: "",
        dialog: false,
        added: [{
                _id: "htttps",
                name: "Item1"
            },
            {
                _id: "htttps",
                name: "Item2"
            },
            {
                _id: "htttps",
                name: "Item3"
            },
        ],
        headers: [{
                text: "Items",
                value: "name",
                sortable: false,
                align: "center"
            },
            {
                text: "Actions",
                value: "null",
                sortable: false,
                align: "center"
            }
        ],
        tags: ['foo', 'bar', 'fizz', 'buzz'],
        items: [{
                _id: "htttps",
                name: "Angel Figueroa",
                tags: 5
            },
            {
                _id: "htttps",
                name: "Jesus Lugo",
                tags: 5
            },
            {
                _id: "htttps",
                name: "Gonzalo Adrian",
                tags: 5
            },
            {
                _id: "htttps",
                name: "Jorge Sabella",
                tags: 5
            },
        ],
    }),
    watch: {

    },
    computed: {

    },
    methods: {
        updatePage(page) {
            this.page = page;
            this.getHistorial();
        },
        updatePerPage(per) {
            this.rowsPerPage = per;
            this.getHistorial();
        },
        getItems() {

            //SetItems
            /*
            this.items = [];
            db.get(
                    `${BAPI}/api/items/`, {
                        headers: {
                            Authorization: authentication.getAuthenticationHeader(this)
                        },
                        params: {}
                    }
                )
                .then(response => {
                    this.items = response.data.items;
                })
                .catch(error => {
                    this.$store.commit("toggle_alert", {
                        color: "red",
                        text: error.message
                    });
                });
            */
        },
        createItem(){
            
        //Check API Call
        /*
            if(this.newLink.Name != "" && this.newLink.Desc){
                Axios.post(`${BAPI}/api/item/`)
            .then(res => {
              return res.data;
            })
            .then(res => {
              if(this.imageform1 != null){
              return Promise.all([
                Axios.post(
                  `${BAPI}/api/${res.data.id}/images/`,
                  this.imageform1
                )
              ]);
              }
            })
            .then(res => {
              this.loader = null
              this.waitforload = false
              this.dialog = false;
              this.$store.commit("toggle_alert", {
                color: "green",
                text: "Registro exitoso!"
              });
            this.newLink.Name = ""
            this.newLink.Desc = ""
            })
            .catch(err => {
              this.loader = null
              this.waitforload = false
              console.warn(err);
              this.$store.commit("toggle_alert", {
                color: "error",
                text: err.response.data.message
              });
            });
        } else {
          this.loader = null
          this.waitforload = false
          console.warn("No se puede registrar, faltan obligatorios");
          this.$store.commit("toggle_alert", {
            color: "red",
            text: "Las contraseñas deben de ser iguales"
          });
        }*/
        },
        handleFilePondInit: function (a) {

        }
    },
    mounted() {

    },
    components: {
        MyLinks: () => import("@/components/viewComponents/Links/Links-Table")
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
