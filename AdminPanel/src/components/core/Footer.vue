<template>
  <div>
    <v-footer 
    dark
    id="footer_app-App"
    :style="!loggedIn ? 'margin-top: -5% !important;' : 'margin-top: 0% !important;'"
    :fixed="false">
    <v-layout
    row
    justify-center>
      <div 
        :style="!loggedIn ? 'width:100%;margin:0 auto' : 'width:90px;'">
      </div> 
    </v-layout>
    </v-footer>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    methods: {
      getStyle () {
        if (this.$router.name === 'Login' || this.$router.name === 'Home' ) {
          return 'color: white'

        } else {
          return 'color: black'
        } 
      }
    },
    computed: {
      loggedIn () {
        return this.$cookies.get('H1BPidLo') !== null
      }
    }
  }
</script>
<style>
  #footer_app-App {
    background-color: transparent !important;
    border-color: transparent !important;
  }
</style>
