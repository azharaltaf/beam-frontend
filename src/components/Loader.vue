<template>
  <div v-show="this.$store.state.loader">
    <div class="loaderBackground" />
    <v-dialog v-model="this.$store.state.loader" hide-overlay persistent width="300">
      <v-card color="#333333" dark>
        <v-card-text>
          <center>
            <img src="./../assets/images/beam_logo_final.png" class="loader-logo">
          </center>
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
          <center style="padding-top: 10px">Please stand by</center>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "loader"
};
</script>