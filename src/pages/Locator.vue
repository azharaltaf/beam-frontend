<template>
  <v-app id="login">
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex xs12 sm8 md4 lg12>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <v-form>
                  <v-text-field
                    name="longitute"
                    placeholder="Please specify the longitute"
                    label="Longitute"
                    type="number"
                    v-model="searchDto.long"
                    required
                    v-validate="'required'"
                    data-vv-name="longitute"
                    :error-messages="errors.collect('longitute')"
                    v-on:click="resetError()"
                  />
                  <v-text-field
                    name="latitute"
                    placeholder="Please specify the latitute"
                    label="Latitute"
                    type="number"
                    v-model="searchDto.lat"
                    required
                    v-validate="'required'"
                    data-vv-name="latitute"
                    :error-messages="errors.collect('latitute')"
                    v-on:click="resetError()"
                  />
                  <v-text-field
                    name="radius"
                    placeholder="Please specify the search radius"
                    label="Radius"
                    type="number"
                    v-model="searchDto.radius"
                    required
                    v-validate="'required'"
                    data-vv-name="radius"
                    :error-messages="errors.collect('radius')"
                    v-on:click="resetError()"
                  />
                  <v-text-field
                    name="numbikes"
                    placeholder="Please specify the number of bikes to fetch"
                    label="Number of Bikes"
                    type="number"
                    v-model="searchDto.numBikes"
                    required
                    v-validate="'required'"
                    data-vv-name="num of bikes"
                    :error-messages="errors.collect('numbikes')"
                    v-on:click="resetError()"
                  />
                </v-form>

                <div style="color: red" v-if="failed">{{ errorMessage }}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click="search" :loading="loading"
                  >Search</v-btn
                >
              </v-card-actions>
            </v-card>
            <v-card class="elevation-1 pa-3" style="height:800px !important;" v-if="resultPanel">
              <v-card-text>
                <div>
                  Found <b>{{results.length }} </b> vehicles at the locations below.
                  <l-map
                    :zoom="zoom"
                    :center="center"
                    ref="map"
                    style="position: absolute !important; width: 90% !important; height: 80% !important"
                  >
                    <l-tile-layer
                      :url="url"
                      :attribution="attribution"
                    ></l-tile-layer>
                    <!-- <l-marker :lat-lng="center"/> -->
                    <l-marker
                      v-for="(item, index) in results"
                      :key="'marker-' + index"
                      :lat-lng="item.coordinates"
                    ></l-marker>
                    <l-circle-marker :lat-lng="center"></l-circle-marker>
                  </l-map>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-content v-if="resultPanel"> </v-content>
  </v-app>
</template>

<script>
import L from "leaflet";
import { LMap, LTileLayer, LMarker, LCircleMarker } from "vue2-leaflet";
import DataService from "@/services/dataService.js";
const service = new DataService();

export default {
  components: { LMap, LTileLayer, LMarker, LCircleMarker },
  data() {
    return {
      loading: false,
      errorMessage: "",
      failed: false,
      searchDto: {},
      results: [],
      resultPanel: false,
      zoom: 13,
      center: L.latLng(1.33315262, 103.7422865),
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(1.33315262, 103.7422865),
      markers: [
        {
          location: [1.33315262, 103.7422865],
        },
        {
          location: [1.322113736, 103.8149845],
        },
      ],
    };
  },
  methods: {
    resetError() {
      this.failed ? (this.failed = false) : "";
    },
    search() {
      let parent = this;
      this.$validator.validateAll().then(() => {
        if (!this.errors.any()) {
          parent.$setLoader();
          this.center = L.latLng(this.searchDto.lat, this.searchDto.long),
          service
            .search(this.searchDto)
            .then((r) => {
              let processed = [];
              r.forEach((r1) => {
                processed.push({
                  coordinates: [
                    r1.coordinates[1]["$numberDecimal"],
                    r1.coordinates[0]["$numberDecimal"],
                  ],
                });
              });

              this.results = processed;
              this.resultPanel = true;
              parent.$disableLoader();
            })
            .catch((error) => {
              this.errorMessage = error.message;
              this.failed = true;
              parent.$disableLoader();
            });
        }
      });
    },
  },

  // methods: {
  //   login () {
  //     this.loading = true;
  //     setTimeout(() => {
  //       this.$router.push('/dashboard');
  //     }, 1000);
  //   }
  // }
};
</script>
<style scoped lang="css">
.logo {
  height: auto;
  width: 200px;
  margin-top: 25px;
  margin-bottom: 25px;
}
#login {
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: 0;
}
</style>
