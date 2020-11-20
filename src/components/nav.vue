<template>
  <b-navbar shadow>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Trackpack
      </b-navbar-item>
    </template>
    <!-- <template slot="start">
      <b-navbar-item href="#">
        Home
      </b-navbar-item>
      <b-navbar-item href="#">
        Documentation
      </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#">
          About
        </b-navbar-item>
        <b-navbar-item href="#">
          Contact
        </b-navbar-item>
      </b-navbar-dropdown>
    </template> -->

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary" @click="cerrarSesion">
            <strong>Cerrar Sesion</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  components: {},
  methods: {
    cerrarSesion() {
      localStorage.removeItem('sesion');
      window.location.href = '/';
    },
  },
};
</script>
