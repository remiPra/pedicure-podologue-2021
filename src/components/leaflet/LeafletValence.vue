 <template>
  <div id="mapContainer2" class="relative" style="height: 300px; width: 100%">
    <!-- <div class="opacity"></div>           -->
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";

export default {
  name: "Map",
  data() {
    return {
      center: [37, -122],
      results: "",
      mapDiv: "init",
      marker:"",
    }},
    methods:{
       setupLeafletMap:function(){
           this.mapDiv = L.map("mapContainer2", {
          // Set latitude and longitude of the map center (required)
          center: this.center,
          // Set the initial zoom level, values 0-18, where 0 is most zoomed-out (required)
          zoom: 13,
          scrollWheelZoom: false
        });
        console.log(this.mapDiv)
        L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.mapDiv);

       },
    },
       mounted(){
           console.log("ere")
           this.setupLeafletMap()
       }     

  
}  
</script>
<style scoped>
.flex {
  display: flex;
}

.v-btn a {
  text-decoration: none;
  color: navy;
}
.relative {
  position: relative;
}
.opacity {
  z-index: 19999999999999999;
  background-color: navy;
  width: 100%;
  height: 80%;
  opacity: 0.2;
  position: absolute;
}
</style>