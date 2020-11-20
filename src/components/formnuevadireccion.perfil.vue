<template>
  <div class="form-nuevadireccion">
    <b-field label="Departamento">
      <select
        class="select"
        @click="fetchMunicipios($event)"
        v-model="departamento"
      >
        <option
          v-for="departamento in departamentos"
          :key="departamento.idDepartamento"
          :value="departamento.idDepartamento"
          >{{ departamento.departamento }}</option
        >
      </select>
    </b-field>
    <b-field label="Municipio">
      <select class="select " v-model="municipio">
        <option
          v-for="municipio in municipios"
          :key="municipio.idMunicipio"
          :value="municipio.idMunicipio"
          >{{ municipio.municipio }}</option
        >
      </select>
    </b-field>

    <b-field label="Direccion 1">
      <b-input v-model="direccion1"></b-input>
    </b-field>
    <b-field label="Direccion 2 (Opcional)">
      <b-input v-model="direccion2"></b-input>
    </b-field>
    <b-button class="" type="is-primary" @click="enviarForm" expanded
      >Guardar</b-button
    >
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
//Aqui logica del componente
export default {
  name: 'NombreComponente',
  components: {},
  data() {
    return {
      departamento: '',
      municipio: '',
      coords: null,
      direccion1: '',
      direccion2: '',
    };
  },
  props: ['estado'],
  created() {
    this.fetchDepartamentos();
  },
  methods: {
    ...mapActions('direccion', [
      'fetchDepartamentos',
      'fetchMunicipios',
      'aggDireccion',
    ]),

    obtenerGeolocalizacion() {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.coords = `${pos.coords.latitude}, ${pos.coords.longitude}`;
      });
    },

    enviarForm() {
      const direccion = {
        idMunicipio: this.municipio,
        direccion: `${this.direccion1}, ${this.direccion2}`,
      };
      this.aggDireccion(direccion);
      this.estado = false;
      this.$emit('estadoCambio', this.estado);
    },
  },
  computed: {
    ...mapGetters('direccion', ['departamentos', 'municipios']),
  },
};
</script>

<style>
/* Aquí estilos del componente */
</style>
