<template>
  <div>
    <AppBar />
    <div class="columns">
      <div class="column is-2">
        <MenuCliente />
      </div>
      <div class="column">
        <ListaCargas v-if="opcionMenu === 'cargas'" />
        <TablaDirecciones v-if="opcionMenu === 'direcciones'" />
        <Rastreo v-if="opcionMenu ==='rastreo'"/>
      </div>
    </div>
  </div>
</template>

<script>
import MenuCliente from '../components/perfil/menu';
import AppBar from '../components/perfil/appbar';
import ListaCargas from '../components/perfil/cargas/listaCargas';
import TablaDirecciones from '../components/perfil/direcciones/tablaDirecciones';
import Rastreo from './Tracking'
import { mapGetters } from 'vuex';
export default {
  data() {
    return {};
  },
  props: [],
  components: {
    MenuCliente,
    AppBar,
    ListaCargas,
    TablaDirecciones,
    Rastreo,
  },
  methods: {},
  computed: {
    ...mapGetters('utils', ['opcionMenu']),
  },
};
</script>

<style scoped></style>
