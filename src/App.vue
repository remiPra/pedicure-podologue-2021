<template>
  <v-app>
    <div> 
    <v-row v-if="install" class="rowMenu add-button" justify="center">
      
      <v-btn class="">
        Installer Appli
      </v-btn>
      <v-btn @click="install=false"> Fermer</v-btn>
    </v-row>
    <BandDrawer />
    <Drawer />
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-btn onclick="window.open('tel:+33619727540')" class="btnPhone">
      <v-icon>mdi-phone</v-icon>
    </v-btn>
    </div>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Drawer from "./components/menu/Drawer.vue";
import BandDrawer from "./components/menu/BandDrawer.vue";

export default {
  name: "App",

  components: {
    HelloWorld,
    Drawer,
    BandDrawer,
  },

  data: () => ({
    install:true
  }),
   mounted() {
    let deferredPrompt;
    const addBtn = document.querySelector(".add-button");
    addBtn.style.display = "none";
    console.log(addBtn)
    
    window.addEventListener("beforeinstallprompt", (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI to notify the user they can add to home screen
      addBtn.style.display = "block";
      console.log(deferredPrompt)
      addBtn.addEventListener("click", (e) => {
        // hide our user interface that shows our A2HS button
        addBtn.style.display = "none";
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === "accepted") {
            console.log("User accepted the A2HS prompt");
          } else {
            console.log("User dismissed the A2HS prompt");
          }
          deferredPrompt = null;
        });
      });
    });
  },
};
</script>
<style scoped>
.btnPhone  {
  opacity:0
}
.rowMenu {
  display:none
}
@media screen and (max-width:600px) {
.rowMenu {
    z-index: 1111112;
    position: absolute;
    inset: 0px;
    background-color: pink;
    width: 100% !important;
    height: 100% !important;
    display: block;
}
  
.btnPhone {
       opacity: 1;
    position: fixed;
    top: 450px;
    left: 73%;
    z-index: 10000;
    background-color: orange!important;
    color: white;
    height: 50px!important;
    border-radius: 50%;
} 
}

</style>