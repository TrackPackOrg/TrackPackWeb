<template>
  <aside class="menu pt-5">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li>
        <a @click="cambiarOpcion('cargas')">Mis cargas</a>
      </li>
      <li>
        <a @click="cambiarOpcion('direcciones')">Mis direcciones</a>
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
  },
};
</script>

<style scoped>
.menu {
  background-color: #f2f2f2;
  height: 100vh;
}
</style>
