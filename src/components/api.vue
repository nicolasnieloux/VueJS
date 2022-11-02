<template>
  <!--  <div id="app">-->
  <!--    {{ info }}-->
  <!--  </div>-->
  <div>
    <div :key="index" v-for="(ville, index) in villes">
      <h3>{{ ville.name }}</h3>
      <p>{{ ville.id }}</p>
      <p>{{ ville.main.temp }}</p>

      <hr>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "apiVille",
  components: {},
  data() {
    return {
      // info: null,
      villes: [],
      loading: false,
      error: null
    }
  },
  mounted() {

    axios
        .get('https://api.openweathermap.org/data/2.5/find?lat=45.188&lon=5.724&cnt=20&cluster=yes&lang=fr&units=metric&APPID=f07e77b8c27c9d0e8dc39b4159e27685')
        .then((response) => {
          this.villes = response.data.list;
          console.log('success');
        })
        .catch(error => {
          console.log(error);
          this.error = true;
        })
        .finally(() => this.loading = false)
  },


  created() {
    console.log('En cours');
  }

}
</script>

<style scoped>

</style>