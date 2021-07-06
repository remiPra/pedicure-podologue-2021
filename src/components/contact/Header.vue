<template>
<div>
  <v-row class="header" align="center" justify="center" >
      <img src="@/assets/image1.jpg" alt="">
      <h1>{{name}}</h1>
  </v-row>
</div>

</template>

<script>
export default {
    props:['name']
    
}
</script>

<style scoped>
    .header {
        position:relative;
        height:150px;
        background-color:#5f6f97;
        overflow:hidden;
        margin-top:0px
    }
    img {
        position: absolute;
        opacity:0.6
    }
    h1 {color:white;z-index:1}
</style>