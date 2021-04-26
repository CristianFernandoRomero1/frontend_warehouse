<template>
  <div class="login">
    <v-form>
      <v-container>
        <v-text-field label="Email" v-model="email"></v-text-field>
      </v-container>
      <v-container>
        <v-text-field label="Password" type="password" v-model="password"></v-text-field>
    </v-container>
 <v-btn @click="login" depressed>
      Normal
    </v-btn>
    </v-form>
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
              this.$router.push("/homepage");
              console.log(this.$router.currentRoute.fullPath)
          }
        })
        .catch((err) => {
            console.log(err)
          localStorage.removeItem("user-token"); // if the request fails, remove any possible user token if possible
        });

      ///
    },
  },
};
</script>

<style scoped>
#form_login {
  left: 50%;
  top: 40%;
  position: absolute;
  transform: translate(-50%, -50%);
}

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
