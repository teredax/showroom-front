<template>
  <v-card
  class="Error_container">
  <v-container 
    fill-height 
    grid-list-md 
    text-xs-center>
    <v-layout 
      row 
      wrap 
      align-center
      justify-center
      >
      <v-layout
        column
        justify-start
        justify-space-between
        >
        <p
          v-html="'Error 404: No se encontro la página'"
          class="major_title_Error"
        />
      </v-layout>
      <v-layout
        row>
        <v-btn
          v-html="'Regresar'"
          text
          :to="'/'"
          color="primary"
          flat
        />
      </v-layout>
    </v-layout>
  </v-container>
  </v-card>
</template>
<script>
export default {
}
</script>
<style scoped>
.Error_container {
  width: 100%;
  height: 100%
}
</style>