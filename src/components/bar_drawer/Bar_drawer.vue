<template>
  <div class="bardrawer">
    <v-toolbar dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Sistema</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn @click="exit" icon>
        <span class="strangeNumbers">
        <v-icon>mdi-export</v-icon>
         Salir
        </span>
        </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-card class="mx-auto" width="300">
        <v-list>
          <v-list-item-group>
            <v-list-item :to="home">
              <v-list-item-title :to="home">Home</v-list-item-title>

              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-item-group>

          <v-list-group :value="false" prepend-icon="mdi-account-circle">
            <template v-slot:activator>
              <v-list-item-title>Almacén</v-list-item-title>
            </template>

            <v-list-item
              v-for="([title, icon, enlace], i) in admins"
              :key="i"
              link
              :to="enlace"
            >
              <v-list-item-title
                v-text="title"
                :to="enlace"
              ></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group :value="false" prepend-icon="mdi-account-circle">
            <template v-slot:activator>
              <v-list-item-title>Compras</v-list-item-title>
            </template>

            <v-list-item
              v-for="([title, icon, enlace], i) in compras"
              :key="i"
              link
              :to="enlace"
            >
              <v-list-item-title
                v-text="title"
                v-bind:to="enlace"
              ></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </div>
</template>

<script>
//Hola mundo
export default {
  name: "BarDrawer",
  props: {},
  data: () => ({
    drawer: false,
    group: null,
    idShow: "",
    home: "homepage",
    admins: [
      ["Categorías", "mdi-account-multiple-outline", "categorias"],
      ["Artículos", "mdi-cog-outline", "articulos"],
    ],
    compras: [
      ["Ingresos", "mdi-account-multiple-outline", "ingresos"],
      ["Proveedores", "mdi-account-multiple-outline", "proveedores"],
    ],
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    exit: function () {
      localStorage.setItem("user-token", null); // store the token in localstorage
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.strangeNumbers {
  word-spacing: 0.1em;
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
