<template>
  <v-row class="main">
    <picture>
    <source srcset="@/assets/image1mobile.jpg"
            media="(max-width: 600px)">
    <img src="@/assets/image1.jpg" alt="">    
</picture>



    <v-col data-aos="fade-down"   data-aos-delay="500" class="header" md="6" sm="12">
      <h1>Rémi PRADERE Pédicure Podologue</h1>
      <h2>Cabinet de podologie de Condom et Valence Sur Baise</h2>
      <v-btn>Disponibilité</v-btn>
    </v-col>
    
  </v-row>
</template>

<script>
 
  export default {
    
  }
</script>
<style  scoped>
  .main {
    position: relative;
    height:600px;
    overflow: hidden;
      }
  h1{
    margin: 30px auto
  }

  h2 {
    margin: 20px auto
  }
    .v-btn {
      margin:20px auto
    }
  
    .header {
      color:white;
      z-index:1;
      padding: 100px
    }
  
  
   img {
     position:absolute;
     z-index:0;
     top:10px;
     width:100%
   }


   @media screen and (max-width: 600px) {
     .header {
       padding:50px;
       color:white
       
     }

  

   }

</style>