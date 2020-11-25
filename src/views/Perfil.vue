<template>
  <div class="perfil">
    <Navbar />
    <div class="columns mt-0 is-centered">
      <div class="column is-three-quarters is-centered">
        <div class="columns">
          <div
            class="column is-one-fifth"
            style="border-right :#e6e6e6 1px solid"
          >
            <img src="@/assets/user-avatar.png" />
            <h4 class="title is-4"></h4>
            <p></p>
          </div>
          <div class="column">
            <div class="m-3">
              <h3 class="title is-3">Mis cargas</h3>
              <TablaCargas />
            </div>
            <br />
            <br />
            <ModalDirecciones />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/nav.vue';
import TablaCargas from '@/components/tablacargas.perfil.vue';
import ModalDirecciones from '@/components/modaldirecciones.perfil.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Perfil',
  components: {
    Navbar,
    TablaCargas,
    ModalDirecciones,
  },
  methods: {
    ...mapActions(['']),
  },
  data() {
    return {
      isModalActive: false,
      input: 'Texto prueba',
    };
  },

  computed: mapGetters('session', ['sesion']),
};
</script>
<style scoped></style>
