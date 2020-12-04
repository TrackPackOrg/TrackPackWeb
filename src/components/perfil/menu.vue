<template>
  <aside class="menu pt-5">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li>
        <a @click="cambiarOpcion('cargas')"
          ><span><i class="fas fa-box-open"></i></span> Mis cargas</a
        >
      </li>
      <li>
        <a @click="cambiarOpcion('direcciones')"
          ><span><i class="fas fa-address-book"></i></span> Mis direcciones</a
        >
      </li>
      <!-- <li>
        <a @click="irPerfil">
          <span><i class="fas fa-user"></i></span>Mi Perfil</a
        >
      </li> -->
      <li>
        <a @click="cerrarSesion">
          <span><i class="fas fa-sign-out-alt"></i></span>Cerrar Sesión</a
        >
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {};
  },
  props: [],
  components: {},
  methods: {
    ...mapActions('utils', ['cambiarOpcion']),
    cerrarSesion() {
      localStorage.removeItem('token');
      this.$router.push('/');
    },
    irPerfil() {
      this.$router.push('/perfil');
    },
  },
};
</script>

<style scoped>
.menu {
  background-color: #f2f2f2;
  height: 100vh;
}
</style>
