<template >
<!--  <City name="Chambéry" weather="Beau" temperature=35 :updatedAt="new Date()"></City>-->

 <div>
<City v-for="city in cities" v-bind:key="city"
v-bind:name="city.name"
v-bind:weather="city.weather"
v-bind:temperature="city.temperature"
v-bind:updated-at="city.updatedAt.toLocaleString()">
</City>
 </div>

</template>

<script>
import City from "@/components/City"

export default {
  name: 'HelloWorld',
  components: {
    City,
  },






  data() {
    return {
      cities: [
        {
          id: 1,
          name: 'Ville 1',
          weather: 'Ensoleillé',
          temperature: 22.0,
          updatedAt: new Date()
        },
        {
          id: 2,
          name: 'Ville 2',
          weather: 'Peu nuageux',
          temperature: 19.5,
          updatedAt: new Date()
        }
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
