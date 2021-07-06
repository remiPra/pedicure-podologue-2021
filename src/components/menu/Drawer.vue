<template>
  <v-card>
    <v-app-bar color="#5f6f97" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Remi PRADERE Podologue</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-row class="menuComputer">
        <v-btn @click="goHome" class="buttonMenu" icon>ACCUEIL</v-btn>
        <v-btn @click="goHoraires" class="buttonMenu" icon>NOUS TROUVER</v-btn>
        <v-btn class="buttonMenu" icon>A PROPOS</v-btn>
        <v-btn @click="goContact" class="buttonMenu" icon>CONTACT</v-btn>
        
        
      </v-row>
    </v-app-bar>

    <v-navigation-drawer
      color="#5f6f97"
      v-model="drawer"
      fixed
      temporary
      height="100%"
      class="white--text"
    >
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="text--accent-4">
          <div>
            <div class="text-center mt-5">
              <h2 class="white--text">Rémi PRADERE </h2>
              <h3 class="white--text">Pédicure Podologue</h3>
            </div>
           <div class="my-8">
            <v-list-item
              v-for="item in items"
              :key="item.title"
              :to="item.to"
              link
            >
              <v-list-item-icon>
                <v-icon class="white--text">{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="white--text">{{
                item.title
              }}</v-list-item-title>
            </v-list-item>
           </div>
             
          </div>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    items: [
      { title: "Accueil", icon: "mdi-home-circle", to: "/" },
      { title: "Nous Trouver", icon: "mdi-map-marker", to: "/horaires" },
      { title: "Contact", icon: "mdi-phone", to: "/contact" },
      {
        title: "Recherche sur la carte",
        icon: "mdi-help-box",
        to: "/confirmationVelo",
      },
    ],
    drawer: false,
    group: null,
  }),
  methods: {
    searchCard() {
      this.$router.push("./");
    },
    goHome(){
      this.$router.push("./")
    },
    goContact() {
      this.$router.push('./contact')
    },
    goHoraires() {
      this.$router.push('./horaires')
    }
  },
};
</script>
<style scoped>
.white--text,
v-list-item {
  color: white !important;
}

.menuSystem a{
  padding:2px;
  color:white
}

.buttonMenu {
  padding:1px 70px
}

.v-navigation-drawer {
  z-index:222222222
}

.menuComputer .v-btn:hover {
  background-color: #5f6f97
}
@media screen and (max-width: 1000px) {
  
.menuComputer {
  display: none;
}
}

</style>