<template>
  <v-row class="main my-3" align="center" justify="center">
    <v-col md="4" sm="4" xs="12">
      <v-row 
      data-aos="fade-right"
      data-aos-delay="500"
      class="pa-6" align="center">
        <div class="icon">
          <v-icon pa-4>mdi-phone</v-icon>
        </div>
        <div>
          <h3>Telephone :</h3>
          <a href="tel:0619727540">tel : 06.19.72.75.40</a>
        </div>
      </v-row>
    </v-col>
    <v-col md="4" sm="4" xs="12">
      <v-row 
      data-aos="fade-right"
      data-aos-delay="600"
      class="pa-6" align="center">
        <div class="icon">
          <v-icon pa-4>mdi-message-text</v-icon>
        </div>
        <div>
          <h3>Formulaire</h3>
          <a href="#formulaire">Acceder</a>
        </div>
      </v-row>
    </v-col>
    <v-col md="4" sm="4" xs="12">
      <v-row 
      data-aos="fade-right"
      data-aos-delay="700"
      class="pa-6" align="center">
        <div class="icon">
          <v-icon pa-4>mdi-at</v-icon>
        </div>
        <div>
          <h3 class="text-navy">Email :</h3>
          <a href="mailto:remipradere@gmail.com">remipradere@gmail.com</a>
        </div>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  height: 280px;
}
.v-col {
  margin: 20px;
}
.formulaire {
  background-color: navy;
  font-size: 30px;
  padding: 2px 5px;
}

.v-icon {
  margin-right: 30px;
  font-size:40px;
  height: 70px;
  width: 70px;
  background-color: navy;
  border-radius: 50%;
  padding: 10px;
  color:white
}

@media screen and (max-width:450px) {
  .main {
    display:flex;
    flex-direction: column;
    height:500px
  }
}
</style>