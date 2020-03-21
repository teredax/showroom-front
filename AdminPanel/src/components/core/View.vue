<template>
  <span 
    v-if="!loggedIn">
    <v-content 
      style="background-color:white" 
      class="pt-5">
      <v-fade-transition 
        mode="out-in">
        <router-view 
          @alert="alert" />
      </v-fade-transition>
    </v-content>
  </span>
  <span 
    v-else>
    <v-content 
      class="content-View pt-5">
      <v-fade-transition 
        mode="out-in">
        <router-view 
          @alert="alert" />
      </v-fade-transition>
    </v-content>
  </span>
</template>

<script>
/* eslint-disable */
  export default {
    methods: {
      alert (text, color) {
        this.$emit('toggleAlert', text, color)
      },
    },
    computed: {
      isHome () {
        return this.$route.path === '/'
      },
      loggedIn () {
        return this.$cookies.get('H1BPidLo') !== null
      }
    },
    watch: {
      '$route': function () {
        this.$vuetify.goTo(0)
      }
    }
  }
</script>
<style>
  .content-View {
    background-color: rgba(255,255,255,.8); 
    height:100%
  }
</style>
