<template>
  <v-row>
    <v-col>

    <v-card data-aos="fade-down" class="mx-auto v-card-mobile" max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
        src="@/assets/condom.png"
      >
        <v-card-title class="navy--text">Cabinet de Condom</v-card-title>
      </v-img>

      <v-card-text class="text--primary">
        <div data-aos="fade-right" data-aos-delay="1000"  class="flex mt-4 pb-2">
          <v-icon class="navy--text mx-2">mdi-map-marker</v-icon>
          <a
            target="_blank"
            href="https://www.google.fr/maps/place/4+Rue+Honoré+Cazaubon,+32100+Condom/@43.9571424,0.3692446,17z/data=!3m1!4b1!4m5!3m4!1s0x12aa3ca6ca33ffff:0xaf38fb1514c98d07!8m2!3d43.9571386!4d0.3714333"
          >
            <h4 class="primary--text">
              4 bis rue Honoré Cazaubon 32100 CONDOM
            </h4>
          </a>
        </div>
        <div data-aos="fade-right" data-aos-delay="1100" class="flex mb-4">
          <v-icon class="navy--text mx-2">mdi-calendar-month</v-icon>
          <h4 class="primary--text">
            Ouvert du mercredi ou vendredi de 9h à 19h sur rendez vous
            telephonique
          </h4>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn @click="goContact" color="orange" text> Prendre RDV </v-btn>

        <v-btn color="orange" text> Voir carte </v-btn>
      </v-card-actions>
    </v-card>
    </v-col>

    <v-col class="v-card-mobile" data-aos="fade-up" data-aos-delay="500">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2872.1074535327953!2d0.3692446148242591!3d43.95714244074242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aa3ca6ca33ffff%3A0xaf38fb1514c98d07!2s4%20Rue%20Honor%C3%A9%20Cazaubon%2C%2032100%20Condom!5e0!3m2!1sfr!2sfr!4v1625565487091!5m2!1sfr!2sfr"
        width="300"
        height="300"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        ><h3 class="navy--text">Cabinet de CONDOM</h3></iframe
      >
    </v-col>
  </v-row>
</template>

<script>
export default {
  methods: {
    goContact() {
      this.$router.push("./contact");
    },
  },
};
</script>

<style>
@media screen and (max-width:400px) {
  .v-card-mobile {
    max-width:300px!important
  }
  
}
</style>