<template>
  <div id="hello">
    <v-container>
      <v-row>
        
        <div  data-aos-delay="1000"
    data-aos="zoom-in"
    data-aos-easing="ease-in-out" class="button">
          <v-icon pa-4>mdi-phone</v-icon>
          <a href="tel:0619727540">tel : 06.19.72.75.40</a>
        </div>
        
        <div data-aos-delay="1200"
    data-aos="zoom-in"
    data-aos-easing="ease-in-out" class="button">
          <v-icon>mdi-at</v-icon>
          <a href="mailto:remipradere@gmail.com">remipradere@gmail.com</a>
        </div>
        
        <div data-aos-delay="1400"
    data-aos="zoom-in"
    data-aos-easing="ease-in-out" class="button">
          <v-icon>mdi-clock</v-icon>
          <a href="">Ouvert du mer au ven 9h00 19h00</a>
        </div>
        
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  padding: 10px;
}
.v-application a {
  color: #1976d2;
  padding:10px;
      text-decoration: none;
    cursor: pointer;
}
.v-application i {
  color: navy
}

@media screen and (max-width: 600px) {
  #hello  {
    display: none;
  }
  
}
</style>