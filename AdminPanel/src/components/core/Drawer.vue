<template>
  <v-navigation-drawer
      id="side_menu"
      app
      class="pa-0"
      permanent
      :mini-variant.sync="bMini"
      :style="{ 'background-color':'#4a6CAC' }"
    >
      <v-layout 
        column>
        <v-toolbar
          :style="{ 'background-color':'transparent','box-shadow':'none'}">
          <v-list elevation ="0">
            <v-list-item>
              <v-list-item-title>
                <v-layout
                  row
                  justify-center>
                  <img 
                    class="titleImg" 
                    :src="titleLogo" 
                    style="background-color: #4a6CAC;"
                    alt   
                  />
                </v-layout>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-toolbar>

        <v-list 
          dense
          elevation ="0"
          style="box-shadow: none;background-color:#4a6CAC;"
          class="pt-0">
          <v-list-item 
            elevation ="0"
            class="rmb"
            :class="{'rmt': index==0}"
            v-for="(item, index) in items"
            :key="item.to"
            :to="item.to"
          >
            <v-list-item-action>
              <v-tooltip
                bottom>
                <template 
                  v-slot:activator="{ on }"
                >
                  <span 
                    v-on="on">
                    <div
                      :class="getNavClass(item.to)">
                      <v-icon
                        :color="iconColor" 
                        v-html="item.icon" 
                      />
                    </div>
                  </span>
                </template>
                <span
                  v-html="item.title"
                />
              </v-tooltip>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title 
              :style="textColor" 
              class="primaryText--text menu-text"
              v-text="item.title" 
            />
            </v-list-item-content>
          </v-list-item>
        </v-list>
<v-spacer></v-spacer>
        <v-list
          class="logout-tile"
           :style="{ 'background-color':'#4a6CAC','box-shadow':'none'}">
          <v-list-item :style="{ 'background-color':'#4a6CAC','box-shadow':'none'}" @click="logout">
            <v-list-item-action>
              <v-icon 
                id="logout-icon" 
                :color="'white'"
                v-html="'mdi-power'"
              />
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title 
                class="menu-text"
                :style="'color: white'"
                v-html="'Salir'">
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-layout>
    </v-navigation-drawer>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    color: String,
    items: Array,
    mini: Boolean,
    textColor: String,
    iconColor: String  },
  data () {
    return {
      right: null,
      smallLogo: "",
      bigLogo: "https://www.bluepeople.com/assets/images/base/bluepeople.png"
    };
  },
  computed: {
    titleLogo: function() {
      if (this.mini) {
        return this.smallLogo
      } else {
        return this.bigLogo
      }
    },
    static_elements () {
      return this.$t('coreDrawer')
    },
    bMini: function () {
      return this.mini
    }
  },
  methods: {
    getNavClass (href) {

      if (this.$route.fullPath === href) {
        return 'selected_icon'

      } else {
        return 'normal_icon'
      }
    },
    logout () {
      this.$cookies.set('IjkBPusrnmLo', null)
      this.$cookies.set('H1BPidLo', null)
      this.$cookies.remove('BP')
      this.$cookies.remove('H1BPidLo')
      this.$cookies.remove('IjkBPusrnmLo')
      this.$router.push('/')
      window.location.reload()
      this.$emit('alert', 'black', 'Sesión terminada.')
    }
  }
};
</script>

<style scoped>
  #side_menu .v-list {
    background-color: transparent;
  }
  .divider-menu {
    background-color: transparent !important
  }
  .menu-text {
    font-family: 'Open sans', sans-serif;
    font-weight: bold;
    font-size: 15px;
    color: red;

  }
  #side_menu {
    z-index: 10
  }
 .selected_icon {
    background-color:#809DED; 
    color: white;
    border-radius: 80%; 
    padding: 6px
  }
  .normal_icon {
  }
.logout-tile {
  font-size: 10px;
  cursor: pointer;
}
#side_menu .drawer {
  position: fixed;
  z-index: 5;
}
.title-drawer {
  height: 60px;
}



.titleImg {
  display: block;
  margin: auto;
  margin-top: 30px;
  height: 76%;
  width: 76%;
  overflow: visible;
}
#logout-icon{
}
.my-fill-height{
  height: auto;
}
#side_menu .rmb{
  margin-bottom:3vh;
}
#side_menu .rmt{
  margin-top:10vh;
}

</style>