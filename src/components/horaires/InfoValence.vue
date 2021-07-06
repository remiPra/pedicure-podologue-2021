<template>
<v-row>
  <v-col>

  <v-card data-aos="fade-down" data-aos_delay="500" class="v-card-mobile mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      src="@/assets/condom.png"
    >
      <v-card-title class="navy--text">Cabinet Valence sur Baise</v-card-title>
    </v-img>
    <v-card-text class="text--primary">
      <div class="flex mt-4 pb-2">
        <v-icon class="navy--text mx-2">mdi-map-marker</v-icon>
        <a
          target="_blank"
          href="https://www.google.fr/maps/place/Rémi+PRADERE+Pédicure+Podologue/@43.882765,0.3791326,17z/data=!3m1!4b1!4m5!3m4!1s0x12aa25a9ad6aabc1:0x96459db473e32bfd!8m2!3d43.882685!4d0.3812284"
        >
          <h4 class="primary--text">
            14 Place de L'hotel de ville 32310 Valence sur Baise
          </h4>
        </a>
      </div>
      <div class="flex mb-4">
        <v-icon class="navy--text mx-2">mdi-calendar-month</v-icon>

        <h4 class="primary--text">
          Ouvert le mercredi matin sur rendez vous telephonique
        </h4>
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text> Prendre RDV </v-btn>

      <v-btn color="orange" text> Voir carte </v-btn>
    </v-card-actions>
  </v-card>
  </v-col>
  
    <v-col data-aos="fade-up" data-aos-delay="500">
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
</style>