<template>
  <v-row>
    <v-col 
    data-aos="fade-down"
    data-aos-delay="1000"
    class="image pa-8" md="6">
      <img src="@/assets/image2.jpg" alt="" />
    </v-col>
    <v-col 
    data-aos="fade-up"
    data-aos-delay="800"
    
    md="6" sm="8">
      <div class="mt-4">
        <h3 id="formulaire" class="display-1">Formulaire de contact</h3>
      </div>
      <div>
        <div>
          <v-text-field
          v-model="nom"
            label="Nom"
           
          ></v-text-field>
          <v-text-field hide-details="auto" label="Prenom" v-model="prenom"></v-text-field>
          <v-text-field hide-details="auto" label="Email" v-model="email"></v-text-field>
          <v-textarea label="Message" rows="3" v-model="message"></v-textarea>
          <v-row justify="center">
            <v-btn @click="sendMail">Envoyer</v-btn>
          </v-row>
        </div>
      </div>
    </v-col>
  </v-row>
</template>
<script>
export default{
  data(){
    return{
      nom:"",
      prenom:"",
      email:"",
      message:"",
    }
  },
  methods:{
    sendMail(){
      let mail = {
        nom:this.nom,
        prenom:this.prenom,
        email:this.email,        
        message:this.message,        
      }
      console.log(mail)
      let data = this.toFormData(mail)
      this.sendAxios(data)
      this.$router.push('./messageEnvoye')
    },
    toFormData(obj) {
                    // conversion d'une données javascript 
                    let fd = new FormData();
                    console.log(obj)
                    for (let i in obj) {
                        fd.append(i, obj[i]);
                    }
                    console.log(fd);
                    // retourne le resultat
                    return fd;
                },
  sendAxios(name){
    axios.post("index.php?action=mail",name).then(function(response) {
                            if (response.data.error) {
                                
                                console.log(app.errorMsg)
                            } else {
                                console.log(response.data);
                                console.log("success");
                            }
                        });

  }
  },
}
</script>

<style scoped>
img {
  width: 100%;
  box-shadow: 0px 3px 15px grey;
}
.image {
  display:block
  }



h3,
.v-text-field {
  color: "#5f6f97" !important;
}
.v-text-field {
  padding: 15px;
}


@media screen and (max-width:1000px) {
  .image {
  display:none
  }
  
}
</style>
