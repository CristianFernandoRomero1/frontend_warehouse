<template>
  <div class="login">
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col cols="12" sm="4"> </v-col>
        <v-col cols="12" sm="4">
          <v-container fluid fill-height class="login">
            <v-layout flex align-center justify-center>
              <v-flex>
                <v-toolbar class="pt-5 blue darken-4">
                  <v-toolbar-title class="white--text"
                    ><h4>Login</h4></v-toolbar-title
                  >
                </v-toolbar>

                <v-form>
                  <v-container>
                    <v-text-field label="Email" v-model="email"></v-text-field>
                  </v-container>
                  <v-container>
                    <v-text-field
                      label="Password"
                      type="password"
                      v-model="password"
                    ></v-text-field>
                  </v-container>
                  <v-btn @click="login" depressed> Sign in </v-btn>
                </v-form>
              </v-flex>
            </v-layout>
          </v-container>
        </v-col>
        <v-col cols="12" sm="4"> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  props: {},
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      ///
      var payload = { email: this.email, password: this.password };
      axios({
        url: "http://localhost:5000/api/usuario/login",
        data: payload,
        method: "POST",
      })
        .then((resp) => {
          if (resp.status === 200) {
            const token = resp.data.token;
            localStorage.setItem("user-token", token); // store the token in localstorage
            console.log(token);
            this.$router.push("/homepage");
            // console.log(this.$router.currentRoute.fullPath);
          }
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("user-token"); // if the request fails, remove any possible user token if possible
        });

      ///
    },
  },
  mounted() {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
      //var mytoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MDgwZGNmYWNjODAyOTIzZTQ2N2E1NzMiLCJpYXQiOjE2MTk5MDM3MTksImV4cCI6MTYyMDUwODUxOX0.xULcqEM31DJKFKwT8j3kARJtNA2L3e86UNx7VfuMgD0"; 
      var mytoken = localStorage.getItem("user-token")
      axios({
        url: "http://localhost:5000/api/usuario/token",
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          token: mytoken, //the token is a variable which holds the token
        },
      })
        .then((resp) => {
          if (resp.status === 200) {
            this.$router.push("/homepage");
          }
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("user-token"); // if the request fails, remove any possible user token if possible
        });
    });
  },
};
</script>

<style scoped>
/* #login {
  left: 50%;
  top: 40%;
  position: absolute;
  transform: translate(-50%, -50%);
  display: inline-block;
  text-align: center;
} */

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
