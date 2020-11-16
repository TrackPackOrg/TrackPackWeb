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
            <h4 class="title is-4">
              {{ this.storenombre + ' ' + this.storeapellido }}
            </h4>
            <p>
              <strong>Teléfono:</strong> {{ this.storetelefono }}
              <span @click="this.alertT">
                <b-icon pack="fas" icon="edit" size="is-small"> </b-icon>
              </span>
            </p>
          </div>
          <div class="column">
            <div class="m-3">
              <h3 class="title is-3">Mis cargas</h3>
              <TablaCargas />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/nav.vue';
import TablaCargas from '@/components/tablacargas.perfil.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Perfil',
  components: {
    Navbar,
    TablaCargas,
  },
  methods: {
    ...mapActions(['cambiarNombre']),
    alertT() {
      alert('En vez de esto se debe mostrar modal para modificar número');
    },
  },
  data() {
    return {
      isCodeSent: true,
    };
  },
  computed: mapGetters(['storenombre', 'storeapellido', 'storetelefono']),
};
</script>
<style scoped></style>
