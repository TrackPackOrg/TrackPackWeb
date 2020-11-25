<template>
  <div class="tabla-cargas">
    <div class="modal-direcciones">
      <b-modal v-model="modalCargaActivo" class="columns is-vcentered">
        <div class="card column is-two-thirds is-absolute-centered">
          <h1 class="title">Nueva Carga</h1>
          <Alerta />
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
              >
                {{ direccion.direccion }}, {{ direccion.departamento }}
              </option>
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
      <b-modal v-model="modalPaqueteActivo" class="columns is-vcentered">
        <div class="card column is-two-thirds is-absolute-centered">
          <h1 class="title">Nuevo Paquete</h1>
          {{ selected.idCarga }}
          <Alerta />
          <b-field
            message="Número de rastreo generado por la empresa que lleva tu paquete a nuestra bodega."
            label="Número de rastero"
          >
            <b-input v-model="rastreoNuevoPaquete"></b-input>
          </b-field>
          <b-field label="Tipo de artículo">
            <b-select
              placeholder="Selecciona el tipo de artículo"
              v-model="tipoNuevoPaquete"
            >
              <option
                v-for="tipo in tipos"
                :key="tipo.idTipo"
                :value="tipo.idTipo"
              >
                {{ tipo.tipo }}
              </option>
            </b-select>
          </b-field>
          <b-field
            label="Currier"
            message="Currier: Empresa que lleva tu paquete a nuestra bodega en USA"
          >
            <b-select
              placeholder="Selecciona un currier"
              v-model="currierNuevoPaquete"
            >
              <option
                v-for="currier in curriers"
                :key="currier.idCurrier"
                :value="currier.idCurrier"
              >
                {{ currier.nombreCurrier }}
              </option>
            </b-select>
          </b-field>
          <b-field label="Descripión">
            <b-input
              maxlength="200"
              type="textarea"
              v-model="descripcionNuevoPaquete"
            ></b-input>
          </b-field>
          <b-button
            class="m-2"
            type="is-primary"
            @click="crearNuevoPaquete"
            expanded
            >Guardar</b-button
          >
        </div>
      </b-modal>
    </div>

    <div class="card columns">
      <div class="column is-one-third custom-scrollbar">
        <b-table
          @click="cambioSeleccion()"
          height="450"
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
        <b-table
          height="450"
          sticky-header
          :data="paquetes"
          @click="borrarPaquete($event)"
        >
          <b-table-column
            field="idPaquete"
            label="Nº Rastreo"
            width="40"
            numeric
            v-slot="props"
          >
            {{ props.row.trackingUsa }}
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
              <b-icon pack="fas" type="is-danger" icon="trash"> asd </b-icon>
            </span>
          </b-table-column>
        </b-table>
        <div class="columns">
          <b-button
            class="column"
            expanded
            inverted
            type="is-primary"
            @click="launchModalPaquete"
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
import Alerta from '@/components/alerta.vue';
//Aqui logica del componente
export default {
  name: 'TablaCargas',
  components: {
    Alerta,
  },
  data() {
    const dataCarga = [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
      },
      {
        id: 5,
      },
      {
        id: 6,
      },
      {
        id: 8,
      },
      {
        id: 9,
      },
      {
        id: 10,
      },
      {
        id: 11,
      },
      {
        id: 12,
      },
    ];
    return {
      idPaquete: '',
      rastreoNuevoPaquete: '',
      tipoNuevoPaquete: '',
      currierNuevoPaquete: '',
      descripcionNuevoPaquete: '',
      modalCargaActivo: false,
      modalPaqueteActivo: false,
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
    ...mapActions('paquete', [
      'fetchPaquetes',
      'aggPaquete',
      'eliminarPaquete',
    ]),
    ...mapActions('direccion', ['fetchDirecciones']),
    ...mapActions('currier', ['fetchCurriers']),
    ...mapActions('tipo', ['fetchTipos']),
    cambioSeleccion() {
      this.fetchPaquetes(this.selected.idCarga);
    },
    launchModal() {
      this.modalCargaActivo = true;
      this.fetchDirecciones();
    },
    launchModalPaquete() {
      this.modalPaqueteActivo = true;
      this.fetchCurriers();
      this.fetchTipos();
    },
    crearNuevoPaquete() {
      const data = {
        idCarga: +this.selected.idCarga,
        trackingUsa: this.rastreoNuevoPaquete,
        idTipo: +this.tipoNuevoPaquete,
        descripcion: this.descripcionNuevoPaquete,
        idCurrier: +this.currierNuevoPaquete,
      };
      this.$forceUpdate();
      this.aggPaquete(data);
    },
    alert() {
      this.$buefy.dialog.alert(
        'Hemos creado una nueva carga. Puedes empezar a agregar tus paquetes.'
      );
    },
    crearNuevaCarga() {
      this.aggCarga(this.idDireccion);
      this.$forceUpdate();
      this.fetchCargas();
    },
    borrarPaquete(e) {
      this.idPaquete = e.idPaquete;
      this.confirmCustomDelete();
    },
    confirmCustomDelete() {
      this.$buefy.dialog.confirm({
        title: 'Eliminar paquete',
        message:
          '¿Estás seguro que quieres <b>eliminar</b> este paquete? Esta acción no se puede deshacer.',
        confirmText: 'Eliminar Paquete',
        type: 'is-danger',
        hasIcon: true,
        cancelText: 'Cancelar',
        onConfirm: () => {
          this.eliminarPaquete(this.idPaquete);
          this.$forceUpdate();
          this.$buefy.toast.open('Paquete Eliminado');
          this.fetchPaquetes();
        },
      });
    },
  },
  computed: {
    ...mapGetters('cargas', ['cargas']),
    ...mapGetters('paquete', ['paquetes']),
    ...mapGetters('direccion', ['direcciones']),
    ...mapGetters('currier', ['curriers']),
    ...mapGetters('tipo', ['tipos']),
  },
};
</script>

<style scoped>
/* Aquí estilos del componente */
</style>
