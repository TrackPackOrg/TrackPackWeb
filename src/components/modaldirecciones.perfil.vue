<template>
  <div class="modal-direcciones">
    <a @click="this.launchModal">Ver mis direcciones</a>

    <b-modal v-model="activo" class="columns is-vcentered">
      <div class="card column is-two-thirds is-absolute-centered">
        <h1 class="title">Mis direcciones</h1>
        <TablaDirecciones v-show="!aggNueva" />
        <FormNuevaDireccion
          v-show="aggNueva"
          :estado="aggNueva"
          @estadoCambio="aggNueva = $event"
        />

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

export default {
  name: 'NombreComponente',
  components: {
    TablaDirecciones,
    FormNuevaDireccion,
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
      this.activo = true;
    },
  },
};
</script>

<style>
/* Aquí estilos del componente */
</style>
