<template>
  <div>
    <v-card text width="100%">
      <v-data-table
        :light="light"
        no-data-text="No hay datos"
        :page.sync="page"
        :items-per-page.sync="perPage"
        :headers="headers"
        :items="items"
        item-key="_id"
        :search="search"
      >
        <template v-slot:item="props">
          <tr>
            <td>{{props.item._id}}</td>
            <td class="request-td">{{props.item.name}}</td>
            <td class="request-td" :class="'accion'" style="text-align:center; min-width:100px;">
              <v-icon small class="mr-7" @click="editdialog = true" color="black">mdi-pencil</v-icon>
              <v-icon small @click="deleteTag(props.item)" color="black">mdi-delete</v-icon>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>


<!-- Delet Dialog Pasar a componente -->

<v-dialog persistent max-width="35%" v-model="deletdialog">
      <v-card class="dialog_container">
        <v-layout column justify-end>
          <v-container>
            <v-layout row justify-center>
              <h2 style="color:#4a6CAC" v-html="'Eliminar Tag'" />
            </v-layout>
          </v-container>

          <v-container>
            <v-layout
              row
              justify-center
              align-center
              fill-height
              style="color:black;"
            >¿Estás seguro que deseas eliminar?</v-layout>
            <br />
            <v-container>
              <v-layout
                row
                justify-center
                align-center
                fill-height
                style="color:black;"
              >Al eliminar ya no se podrá recuperar ni</v-layout>
            </v-container>

            <v-layout
              row
              justify-center
              align-center
              fill-height
              style="color:black;"
            >deshacerlos cambios...</v-layout>

            <v-layout row justify-center>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <span v-on="on">
                    <v-btn
                        color="#E36E6E"
                        @click="deletdialog = false"
                        dark>Cancelar</v-btn>
                    </span>
                </template>
                <span v-html="'Cancelar'" />
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <span v-on="on">
                    <v-btn color="#4a6CAC" @click="confirmDelete" dark>Aceptar</v-btn>
                  </span>
                </template>
                <span v-html="'Eliminar Tag'" />
              </v-tooltip>
            </v-layout>
          </v-container>
        </v-layout>
      </v-card>
    </v-dialog>

<!-- Pasar a component edit, establecer reglas de negocios en revisión del primer sprint -->

    <v-dialog v-model="editdialog" max-width="450" content-class="dialog-radius">
      <v-card>
        <v-card-title class="headline" style="justify-content:left;color:#809DED;">Editar Tag</v-card-title>
        <v-card-text>
            <v-container class="pa-0" grid-list-md text-xs-center>
                    <v-layout row wrap>
                    <v-flex xs12>
                            <v-container class="pa-0" grid-list-md text-xs-left>
                            <v-layout row wrap>
                                <v-flex xs12 sm12>
                                <v-layout column>
                                    <v-flex sm6 class="pa-1">
                                        <v-flex sm12 class="pa-1">
                                            <v-text-field
                                            height="40"
                                            color="#4a6cac"
                                            outlined
                                            dense
                                            style="border-color:coral;"
                                            >
                                            <template v-slot:label>
                                                <p v-html="'Nombre'" />
                                            </template>
                                            </v-text-field>
                                        </v-flex>
                                        <v-flex sm12 class="pa-1">
                                            <template>
                                                <file-pond
                                                id="filePond"
                                                dark
                                                color="primary"
                                                name="files"
                                                ref="pond"
                                                label-idle="Elegir archivo o arrastrar archivo aquí"
                                                :allow-multiple="false"
                                                :allow-paste="false"
                                                :allow-reorder="false"
                                                accepted-file-types="image/jpeg, image/png"
                                                v-on:init="handleFilePondInit"
                                                />
                                            </template>
                                        </v-flex>
                                    </v-flex>
                                </v-layout>
                                </v-flex>
                            </v-layout>
                            </v-container>
                    </v-flex>
                    </v-layout>
            </v-container>
        </v-card-text>
        <v-card-actions style="justify-content: center;">
          <v-btn
            style="text-transform: none; width: 25%; margin-right: 10%;"
            color="#E36E6E"
            @click="editdialog = false"
            dark
          >Cancelar</v-btn>
          <v-btn
            depressed
            style="text-transform: none; width: 25%; background-color: #809DED; color: white;"
            @click="editdialog = false"
            color="#809DED"
          >Aceptar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
export default {
  data: () => ({
    perPage: 0,
    currentPage: 0,
    expand: false,
    dialog: false,
    myitems: [],
    descriptiondialog: false,
    editdialog: false,
    deletdialog: false,
    editedItem: {

    },
    headers: [
      {
        text: "ID",
        value: "_id",
        sortable: false,
        align: "left"
      },
      {
        text: "Name",
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
    ]
  }),
  watch: {
    currentPage: function(val) {
      this.$emit("updatePage", val);
    },
    perPage: function(val) {
      console.log("Change perpage");
      this.$emit("updatePerPage", val);
    }
  },
  filters: {
    toCurrency(value){
     value = Number(value)
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });
    return formatter.format(value);
    },
    formatDate(date) {
      date = new Date(date)
      date = new Date(date)
      let monthArray = [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sept",
        "Oct",
        "Nov",
        "Dic"
      ];
      let day = date.getDate();
      if (day < 10) day = "0" + day;
      let month = date.getMonth();
      let year = date.getFullYear();
      return `${day}/${monthArray[month]}/${year}`;
    }
  },
  methods: {
    getPrice(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    toggleNext() {
      this.$emit("next");
    },
    updateList() {
      this.$emit("updateList");
    },
    togglePrevious() {
      this.$emit("previous");
    },
    dateFormat(date) {
      var formattedDate = new Date(date);
      return formattedDate.toDateString();
    },
    deleteTag(item){
          this.deletdialog = true;
          this.myitem = item.id
    },
    confirmDelete(){
      //delete after connection
                  this.deletdialog = false;
      //Check delete call
      /*
           var body = new URLSearchParams()
            db.delete(`${BAPI}/api/${this.myitem}`,{
                    headers: {
                        'Authorization': authentication.getAuthenticationHeader(this),
                    }
                })
                .then((response) => {
                      this.$store.commit("toggle_alert", {
                      color: "green",
                      text: "Se elimino el item de manera exitosa"
                    });
                    this.getItems()
                    this.deletdialog = false

                })
                .catch((error) => {
                    this.loadEdit = false
                  this.$store.commit("toggle_alert", {
                    color: "red",
                    text: error.message
                  });                
                  })
        */ 
        },
  },
  mounted() {
    this.currentPage = this.page;
    this.perPage = this.rowsPerPage;
  },
  props: {
    items: Array,
    pageCount: Number,
    page: Number,
    rowsPerPage: Number,
    light: Boolean,
    search: String
  },
  components: {
  }
};
</script>

<style>
.rating-icon {
  margin: 0 10px;
}
.color-description {
  color: white;
}

.theme--light.v-data-table thead tr th {
  color: #000000;
}

.client_edit_title {
  margin-top: 5px;
  font-family: "Open sans", "sans-serif";
  text-align: center;
  color: white;
}
.request-td {
  text-align: center;
}
</style>
