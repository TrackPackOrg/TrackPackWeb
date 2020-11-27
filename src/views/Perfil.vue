<template>
  <div>
    <AppBar />
    <div class="columns">
      <!--el div del h1-->

      <div class="column">
        <div class="card pl-2 pt-2 mt-8">
          <header class="card-header">
            <p class="card-header-title is-size-2">username</p>
          </header>
          <div class="card-content is-size-4">
            <img class="pl-3" src="@/assets/user-avatar.png" />
            <p>
              {{ user.nombre }}
            </p>
          </div>
          <footer class="card-footer">
            <button class="button">Editar Perfil</button>
            <button class="button">No se... cambiar foto? xd</button>
          </footer>
        </div>
      </div>
      <div class="column is-two-fifths">
        <p class="is-size-1 has-text-centered">Tu Perfil</p>
        <div class="tabs is-centered is-boxed">
          <ul>
            <li class="is-active">
              <a>
                <span class="icon is-small"
                  ><i class="fas fa-map-marker-alt" aria-gidden="true"></i
                ></span>
                <span>Direcciones</span></a
              >
            </li>
            <li class="is-active">
              <a
                ><span class="icon is-small"
                  ><i class="fas fa-phone" aria-hidden="true"></i
                ></span>
                <span>Teléfonos</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBar from '../components/perfil/appbar';
import Axios from 'axios';

export default {
  data() {
    return {
      user: null,
    };
  },
  props: [],
  components: {
    AppBar,
  },
  methods: {
    retriebeUserData() {
      Axios.get(`${process.env.VUE_APP_API}customer/profile`, {
        headers: { token: localStorage.getItem('token') },
      })
        .then((res) => (this.user = res.data.result))
        .catch((err) => console.log(err.response.data.error));
    },
  },
  created() {
    this.retriebeUserData();
  },
};
</script>

<style scoped>
.links {
  color: rgb(102, 10, 163);
  background-color: whitesmoke;
}
.links p {
  padding-left: 10px;
}
.links p:hover {
  color: whitesmoke;
  background-color: rgb(102, 10, 163);
}
</style>
