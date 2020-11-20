<template>
  <div class="tabla-cargas">
    <div class="modal-direcciones">
      <b-modal v-model="modalCargaActivo" class="columns is-vcentered">
        <div class="card column is-two-thirds is-absolute-centered">
          <h1 class="title">Nueva Carga</h1>
          <b-field label="Selecciona la dirección de entrega de tu carga">
            <b-select
              placeholder="Selecciona dirección"
              expanded
              v-model="idDireccion"
            >
              <option
                v-for="direccion in direcciones"
                :key="direccion.idDireccion"
                :value="direccion.idDireccion"
                >{{ direccion.direccion }}, {{ direccion.departamento }}</option
              >
            </b-select>
          </b-field>
          <b-button
            class="m-2"
            type="is-primary"
            @click="crearNuevaCarga"
            expanded
            >Crear</b-button
          >
        </div>
      </b-modal>
    </div>

    <div class="card columns">
      <div class="column is-one-third custom-scrollbar">
        <b-table
          @click="cambioSeleccion()"
          height="300"
          sticky-header
          :data="cargas"
          :columns="columnCarga"
          :selected.sync="selected"
        ></b-table>
        <div class="columns">
          <b-button
            class="column"
            expanded
            inverted
            type="is-primary"
            @click="launchModal"
            >Nueva carga</b-button
          >
        </div>
      </div>
      <div class="column">
        <b-table height="300" sticky-header :data="paquetes">
          <b-table-column
            field="idPaquete"
            label="Nº Rastreo"
            width="40"
            numeric
            v-slot="props"
          >
            {{ props.row.idCarga }}
          </b-table-column>
          <b-table-column
            field="currier"
            label="Currier"
            width="20"
            numeric
            v-slot="props"
          >
            {{ props.row.nombreCurrier }}
          </b-table-column>
          <b-table-column
            field="descripcion"
            label="Descripción"
            width="70"
            numeric
            v-slot="props"
          >
            {{ props.row.descripcion }}
          </b-table-column>
          <b-table-column
            field="fechaRecibido"
            label="Recibido"
            width="20"
            numeric
            v-slot="props"
          >
            {{ props.row.fechaRecibido }}
          </b-table-column>
          <b-table-column
            field="recibidoPor"
            label="Recibido Por"
            width="40"
            numeric
            v-slot="props"
          >
            {{ props.row.recibidoPor }}
          </b-table-column>
          <b-table-column label="Acciones" width="20">
            <span>
              <b-icon pack="fas" icon="edit"> </b-icon>
              <b-icon pack="fas" type="is-danger" icon="trash"> </b-icon>
            </span>
          </b-table-column>
        </b-table>
        <div class="columns">
          <b-button class="column" expanded inverted type="is-primary"
            >Nuevo paquete</b-button
          >
          <b-button class="column" expanded inverted type="is-primary"
            >Solicita el envío de tu carga</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
//Aqui logica del componente
export default {
  name: 'TablaCargas',
  components: {},
  data() {
    const dataCarga = [
      {
        id: 1,
      },
    ];
    return {
      modalCargaActivo: false,
      dataCarga,
      idDireccion: null,
      selected: dataCarga[1],

      columnCarga: [
        {
          field: 'idCarga',
          label: 'Nº Rastreo',
          numeric: true,
        },
        {
          field: 'estado',
          label: 'Estado',
          numeric: false,
        },
      ],
    };
  },
  created() {
    this.fetchCargas();
  },
  methods: {
    ...mapActions('cargas', ['fetchCargas', 'aggCarga']),
    ...mapActions('paquete', ['fetchPaquetes']),
    ...mapActions('direccion', ['fetchDirecciones']),
    cambioSeleccion() {
      this.fetchPaquetes(this.selected.idCarga);
    },
    launchModal() {
      this.modalCargaActivo = true;
      this.fetchDirecciones();
    },
    alert() {
      this.$buefy.dialog.alert(
        'Hemos creado una nueva carga. Puedes empezar a agregar tus paquetes.'
      );
    },
    crearNuevaCarga() {
      this.aggCarga(this.idDireccion);
      this.alert();
      this.fetchCargas();
      this.$forceUpdate();
    },
  },
  computed: {
    ...mapGetters('cargas', ['cargas']),
    ...mapGetters('paquete', ['paquetes']),
    ...mapGetters('direccion', ['direcciones']),
  },
};
</script>

<style scoped>
/* Aquí estilos del componente */
</style>
