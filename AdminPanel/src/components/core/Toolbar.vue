<template>
  <v-app-bar
    v-scroll="onScroll"
    :color="!loggedIn ? 'transparent' : 'white'"
    :text="!isScrolling"
    :elevation="!loggedIn ? '0' : '3'"
    app
    dark
  >
    <v-btn
      v-if="loggedIn && this.$vuetify.breakpoint.smAndUp"
      icon
      color="#4A6BAE"
      text
      @click="toggleSideBar"
    >
      <v-icon
      :style="getIconStyle()"
      >
      {{this.closed}}
      </v-icon>
    </v-btn>

    <div       v-if="loggedIn && this.$vuetify.breakpoint.smAndUp"
 style="color:#4A6BAE;position: fixed;right:50px;">Administrador</div>
    <v-layout
      row
      justify-center>

    </v-layout>

    <v-tooltip
      bottom>

      <span
        v-html="'User'"
      />
    </v-tooltip>
  </v-app-bar>
</template>

<script>
/* eslint-disable */
  // Utilities
  import { mapMutations } from 'vuex'
  import Authentication from '@/components/Authentication'
  import { Slide } from 'vue-burger-menu'
  import router from '@/router'

  export default {
    props: {
      menuColor: String
    },
    data: () => ({
      isScrolling: false,
      closed: 'mdi-menu',
      items: [
        {text:'Productos',to:'/'},
        {text:'Usuarios',to:'/users'},
        {text:'Oficinas',to:'/offices'},
        {text:'Cupones',to:'/cupons'},
        {text:'Quejas y Sugerencias',to:'/suggestions'},
        {text:'Pedidos',to:'/orders'},
        {text:'FAQ',to:'/FAQ'}
      ]
    }),
    components: {
      Slide: Slide
    },
    computed: {
      loggedIn () {
        return this.$cookies.get('H1BPidLo') !== null
      }
      // items () {
      //   return this.$t('View.items')
      // }
    },
    methods: {
      getIconStyle () {
        return 'color:' + this.menuColor + ' !important'
      },
      toggleSideBar () {

        if(this.closed == 'mdi-menu'){
          this.closed = 'mdi-close'
        }else{
          this.closed = 'mdi-menu'
        }

        this.$emit('toggleSideBar')
      },
      onScroll () {
        this.isScrolling = (window.pageYOffset ||
          document.documentElement.scrollTop || 0) > 100
      },
      submitSignout () {
        this.$cookies.set('IjkBPusrnmLo', null)
        this.$cookies.set('H1BPidLo', null)
        this.$cookies.remove('BP')
        this.$cookies.remove('H1BPidLo')
        this.$cookies.remove('IjkBPusrnmLo')
        window.location.reload()
        this.$emit('alert', 'black', 'Sesión terminada.')
      },
    }
  }
</script>

<style>
 .bm-burger-button {
    z-index: 10; 
    position: absolute;
    width: 30px;
    height: 20px;
    left: 36px;
    top: 25px;
    cursor: pointer;
  }
  .bm-burger-bars {
    z-index: 10; 
    background-color: #ff6625;
  }
  .bm-menu {
    /* border-top-color: #64CCC9;
    border-bottom-color: rgb(254 80 0);
    border-right-color: rgb(254 80 0);
    border-left-color: #64CCC9;
    border-style: solid; */
    height: 900%; /* 100% Full-height */
    width: 0; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1000; /* Stay on top */
    top: 0;
    left: 0;
    background-color:#fcf0f0; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    transition: .5s; /*0.5 second transition effect to slide in the sidenav*/
  }
</style>
