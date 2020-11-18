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
              <span>
                <b-icon pack="fas" icon="edit" size="is-small"> </b-icon>
              </span>
            </p>
          </div>
          <div class="column">
            <div class="m-3">
              <h3 class="title is-3">Mis cargas</h3>
              <TablaCargas />
            </div>
            <br />
            <br />
            <a @click="this.launchModal">Ver mis direcciones</a>

            <b-modal v-model="isModalActive" class="columns is-vcentered">
              <div class="card column is-two-thirds is-absolute-centered">
                <h1 class="title">Hello</h1>
                <template>
                  <b-table :data="data" :columns="columns">
                    <b-table-column
                      field="id"
                      label="Dirección"
                      width="40"
                      numeric
                    >
                    </b-table-column>
                  </b-table>
                </template>
              </div>
            </b-modal>
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
    launchModal() {
      this.isModalActive = true;
      console.log(this.isModalActive);
    },
  },
  data() {
    return {
      isCodeSent: true,
      isModalActive: false,
    };
  },
  computed: mapGetters(['storenombre', 'storeapellido', 'storetelefono']),
};
</script>
<style scoped></style>
