<template>
  <div>
    <!-- <Header name="Horaires" /> -->

    <v-row class="main mt-6 pa-10">
      <InfoCondom />
    </v-row>
    <v-row class="pa-10">
      <InfoValence />
    </v-row>
  </div>
</template>

<script>
import Header from "@/components/contact/Header.vue";
import LeafletCondom from "@/components/leaflet/LeafletCondom.vue";
import LeafletValence from "@/components/leaflet/LeafletValence.vue";
import InfoCondom from "@/components/horaires/InfoCondom.vue";
import InfoValence from "@/components/horaires/InfoValence.vue";
export default {
  components: {
    Header,
    LeafletCondom,
    InfoCondom,
    LeafletValence,
    InfoValence,
  },
};
</script>

<style>
/* .traitBleu {
    content:"";
    background-color: navy;
    border:1px solid navy;
    margin:30px auto;
    width:70%;
} */
</style>