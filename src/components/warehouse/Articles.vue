<template>
  <div class="articles">
<v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Categoría</th>
            <th class="text-left">Artículo</th>
            <th class="text-left">Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in articulos" :key="item.articulos"> 
            <td>{{ item.categoria.nombre }}</td>
            <td>{{ item.nombre }}</td>
            <td>{{ item.descripcion }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Articles",
  props: {},
  data() {
    return {
      articulos:[],
    };
  },
      mounted() {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      //var mytoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDgwZGNmYWNjODAyOTIzZTQ2N2E1NzMiLCJpYXQiOjE2MTk5MDM3MTksImV4cCI6MTYyMDUwODUxOX0.xULcqEM31DJKFKwT8j3kARJtNA2L3e86UNx7VfuMgD0"; 
      var mytoken = localStorage.getItem("user-token")
      axios({
        url: "http://localhost:5000/api/articulo/",
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          token: mytoken, //the token is a variable which holds the token
        },
      })
        .then((resp) => {
  
            console.log(resp.data.articulos[0])
            this.articulos = resp.data.articulos;
            console.log(this.articulos)
          
        })
        .catch((err) => {
          console.log(err);
         });
    });
  },
};
</script>

<style scoped>

h3 {
  margin: 0px 0 0;
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
