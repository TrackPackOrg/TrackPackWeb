<template>
  <div class="tabla-direccioness">
    <template>
      <b-table
        :data="this.direcciones"
        sticky-header
        height="300"
        class="text-is-1"
      >
        <b-table-column
          field="direccion"
          label="Direccion"
          width="20"
          numeric
          v-slot="props"
        >
          <p class="is-size-10">{{ props.row.direccion }}</p>
        </b-table-column>
        <b-table-column label="Municipio" width="30" numeric v-slot="props">
          {{ props.row.municipio }}
        </b-table-column>
        <b-table-column label="Departamento" width="40" numeric v-slot="props">
          {{ props.row.departamento }}
        </b-table-column>
        <b-table-column label="Acciones " width="40" numeric v-slot="props">
          {{ props.row.lat }}
        </b-table-column>
      </b-table>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
//Aqui logica del componente
export default {
  name: 'NombreComponente',
  components: {},
  data() {
    return {};
  },
  created() {
    this.fetchDirecciones();
    this.data = JSON.parse(JSON.stringify(this.direcciones));
  },

  methods: {
    ...mapActions('direccion', ['fetchDirecciones']),
  },
  computed: {
    ...mapGetters('direccion', ['direcciones']),
  },
};
</script>

<style>
/* Aquí estilos del componente */
</style>
