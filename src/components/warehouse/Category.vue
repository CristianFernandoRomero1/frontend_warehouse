<template>
  <div class="category">
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Categoría</th>
            <th class="text-left">Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in categoria" :key="item.categoria"> 
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
  name: "Category",
  props: {},
  data() {
    return {
        categoria:[],
    };
  },
    mounted() {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      //var mytoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDgwZGNmYWNjODAyOTIzZTQ2N2E1NzMiLCJpYXQiOjE2MTk5MDM3MTksImV4cCI6MTYyMDUwODUxOX0.xULcqEM31DJKFKwT8j3kARJtNA2L3e86UNx7VfuMgD0"; 
      var mytoken = localStorage.getItem("user-token")
      axios({
        url: "http://localhost:5000/api/categoria/",
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          token: mytoken, //the token is a variable which holds the token
        },
      })
        .then((resp) => {
          if (resp.status === 200) {
            console.log(resp.data.categoria[0])
            this.categoria = resp.data.categoria;
            console.log(this.categoria)
          }
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
