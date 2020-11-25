<template>
  <div class="modal-direcciones">
    <a @click="this.launchModal">Ver mis direcciones</a>

    <b-modal v-model="activo" class="columns is-vcentered">
      <div class="card column is-12 is-absolute-centered">
        <Alerta />
        <h1 class="title">Mis direcciones</h1>
        <TablaDirecciones v-show="!aggNueva" />
        <FormNuevaDireccion v-show="aggNueva" />

        <b-button
          class="m-2"
          type="is-primary is-inverted"
          @click="aggNueva = !aggNueva"
          >{{ aggNueva ? 'Cancelar' : 'Nueva' }}</b-button
        >
      </div>
    </b-modal>
  </div>
</template>

<script>
import TablaDirecciones from '@/components/tabladirecciones.perfil.vue';
import FormNuevaDireccion from '@/components/formnuevadireccion.perfil.vue';
import Alerta from '@/components/alerta.vue';

export default {
  name: 'NombreComponente',
  components: {
    TablaDirecciones,
    FormNuevaDireccion,
    Alerta,
  },
  props: [],
  data() {
    return {
      activo: false,
      aggNueva: false,
    };
  },
  methods: {
    launchModal() {
      this.aggNueva = false;
      this.activo = true;
    },
  },
};
</script>

<style>
/* Aquí estilos del componente */
</style>
