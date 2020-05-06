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
                            <p class="Admin-title" style="color:#809DED; font:SemiBold Raleway; font-size:40px">Usuarios</p>
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
            <MyUsers @updatePage="updatePage" @updatePerPage="updatePerPage" :totalLength="totalLength" :pageCount="pageCount" :page="page" :rowsPerPage="rowsPerPage" :items="items" :light="false" :search="search" />
        </v-card>
    </v-container>

    <v-dialog v-model="dialog" max-width="800" content-class="dialog-radius">
        <v-card>
            <v-card-title class="headline" style="justify-content:left;color:#809DED;">Crear Nuevo Usuario</v-card-title>
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
                                                    <v-text-field height="40" v-model="newUsr.Name" color="#4a6cac" outlined dense style="border-color:coral;">
                                                        <template v-slot:label>
                                                            <p v-html="'Nombre'" />
                                                        </template>
                                                    </v-text-field>
                                                </v-flex>
                                                <v-flex sm12 class="pa-1">
                                                    <v-select v-model="value" outlined :items="tags" attach color="#4a6cac" chips label="Tags" multiple>
                                                        <template v-slot:label>
                                                            <p v-html="'Tags'" />
                                                        </template>
                                                    </v-select>
                                                </v-flex>
                                                <v-flex sm12 class="pa-1">
                                                    <v-textarea dense v-model="newUsr.Desc" outlined rows="5" row-height="45" :rules="[v => !!v || 'La descripción es requerida']" required color="#4a6cac" counter maxlength="250" style="border-color:coral;">
                                                        <template v-slot:label>
                                                            <p v-html="'Descripción'" />
                                                        </template>
                                                    </v-textarea>
                                                </v-flex>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>

                                    <v-flex xs12 sm4>
                                        <v-flex sm12 class="pa-1">
                                            <v-text-field height="40" color="#4a6cac" outlined dense type="password" style="border-color:coral;">
                                                <template v-slot:label>
                                                    <p v-html="'Contraseña'" />
                                                </template>
                                            </v-text-field>
                                        </v-flex>
                                        <v-flex sm12 class="pa-1">
                                            <v-text-field height="40" color="#4a6cac" outlined type="password" dense style="border-color:coral;">
                                                <template v-slot:label>
                                                    <p v-html="'Confirmar Contraseña'" />
                                                </template>
                                            </v-text-field>
                                        </v-flex>
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
        newUsr:{
            Name:"",
            Desc: "",
        },
        search: "",
        dialog: false,
        tags: ['foo', 'bar', 'fizz', 'buzz'],
        items: [{
                _id: "12345",
                name: "Angel Figueroa",
                rol: "Admin",
                showrooms: 5
            },
            {
                _id: "13245",
                name: "Jesus Lugo",
                rol: "User",
                showrooms: 5
            },
            {
                _id: "74526",
                name: "Gonzalo Adrian",
                rol: "User",
                showrooms: 5
            },
            {
                _id: "23948",
                name: "Jorge Sabella",
                rol: "Admin",
                showrooms: 5
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

        getServer(i) {
        var server = {
            process: (fieldName, file, metadata, load, error, progress, abort) => {
            const formData = new FormData();
            formData.append(fieldName, file, file.name);
            this.rows[0].images[i].title = URL.createObjectURL(file);
            if (i == 0) {
                this.imageform1 = formData;
            }
            abort();
            }
        };
        return server;
        },
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
            if(this.newUsr.Name != "" && this.newUsr.Desc){
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
            this.newUsr.Name = ""
            this.newUsr.Desc = ""
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
        MyUsers: () => import("@/components/viewComponents/Users/Users-Table")
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
