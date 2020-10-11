<template>
  <l-map ref="map" lazy
    :zoom="zoom"
    :center="formatCoordinates(coordinates)"
    style="height: 500px; z-index: 0"
  >
    <l-tile-layer :url="url"></l-tile-layer>
    <l-marker :lat-lng="formatCoordinates(coordinates)">
      <l-popup :minWidth="100">{{ coordinates }}</l-popup>
    </l-marker>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker, LIcon, LPopup } from 'vue2-leaflet';

export default {
  components: {
    LMap, LTileLayer, LMarker, LIcon, LPopup
  },
  props: {
    coordinates: String,
    zoom: Number
  },
  data() {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    }
  },
  mounted() {    
    setTimeout(function() { window.dispatchEvent(new Event('resize')) }, 2500);
  },
  methods: {
    formatCoordinates(coordinates) {
      if (coordinates && coordinates != null && coordinates != undefined) {
        let latLng = coordinates.split(',')

        return [ parseFloat(latLng[0]), parseFloat(latLng[1]) ]
      } else {
        return [ 0, 0 ]
      }
    }
  }
}
</script>