<template>
  <div>
    <v-app 
      v-if="!loggedIn" 
      class="black">
      <core-toolbar />
      <core-jumbotron 
        v-if="!loggedIn" 
        @alert="toggleAlert"/>

      <core-footer style="z-index:999"/>

      <v-snackbar
        dark
        class="snack_bar-App"
        v-model="snackbar"
        :color="color"
        :timeout="3000"
        miltiline
        bottom
      >
        <p
          class="alert-text-NOTlogged"
          v-html="text"
        />
        <v-btn
          dark
          text
          v-html="'Cerrar'"
          @click="snackbar = false"
        />
      </v-snackbar>
    
    </v-app>

    <v-app 
      v-else 
      style="background-color:#FAFAFA;"
      class="app_container-App"
      >
      <div style="background-color:blue" class="Huehue">
      <core-toolbar 
        :menuColor="'menuColor'"
        @toggleSideBar="toggleSideBar"
        @alert="toggleAlert" />

      <core-drawer 
        :color="colorSideBar"
        :items="sidebarItems"
        :mini="mini"
        :textColor="textColor"
        :iconColor="iconColor"
      />
      </div>
      <core-view 
        @toggleAlert="toggleAlert" />

      <core-footer />

  <!-- Start application's alerts -->
    <v-snackbar
      v-model="snackbar"
      :color="color"
    >
      <p  
        v-html="text"
        class="app_alert_text"
      />
      <v-btn
        :color="btn_text_color"
        text
        @click="snackbar = false"
        v-html="alert_close_text"
      />
    </v-snackbar>
    <!-- End application's alerts -->

    </v-app>
  </div>
</template>

<script>
import router from '@/router'

  export default {
    data: ()  => ({
      menuColor: '#4a6CAC',
      snackbar: false,
      btn_text_color: 'white',
      alert_close_text: 'Cerrar',
      sidebarItems: [
        {
          title: "Items", 
          icon: "mdi-chart-bar", 
          to: "/items" 
        },
        {
          title: "Links", 
          icon: "mdi-account-multiple", 
          to: "/links" 
        },
        {
          title: "Tags", 
          icon: "mdi-apps", 
          to: "/tags" 
        },
        {
          title: "Usuarios", 
          icon: "mdi-domain", 
          to: "/users" 
        },
      ],
      mini: true,
      colorSideBar: 'white',
      iconColor: 'white',
      textColor: 'color: white; font-weight: bold',
    }),
    methods: {
      toggleSideBar () {
        this.mini = !this.mini
      },
      toggleAlert (color, text) {
        this.color = color
        this.text = text
        this.snackbar = true
      }
    },
    beforeMount () {
      if ( this.$cookies.get('H1BPidLo') === null ) {
        
        router.push('/login')
      }
    },
    watch: {
      '$route' (to, from) {
        if (to.name !== 'Login' || to.name !== 'Home') {
          switch (this.loggedIn) {
            case true:
              return
            case false:
              this.$router.push('/')
          }
        }
      },
      // set snackbar alert to toggled
      alert () {
        this.snackbar = this.alert
      },
      // set VueX state:alert to the current value
      snackbar () {
        this.$store.commit('set_alert', this.snackbar)
      }
    },
    components: {
      CoreDrawer: () => import('@/components/core/Drawer'),
      CoreFooter: () => import('@/components/core/Footer'),
      CoreJumbotron: () => import('@/components/core/Jumbotron'),
      CoreToolbar: () => import('@/components/core/Toolbar'),
      CoreView: () => import('@/components/core/View')
    },
    computed: {
      loggedIn () {
        return this.$cookies.get('H1BPidLo') !== null
      },
      alert () {
        return this.$store.state.alert
      },
      text () {
        return this.$store.state.text
      },
      color () {
        return this.$store.state.color
      }
    }
  }
</script>
<style>


/*Indice del navigator seleccionado  */
/*Item list selected icons  */


/* --------- */

#app{
  background-color: white !important;
}

/* Textfield solo center text change in case of height */



</style>
