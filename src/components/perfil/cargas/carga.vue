<template>
  <div>
    <ModalPaquetes
      :activo="detalleActivo"
      :paquetes="paquetes"
      :carga="carga"
      @cerrarModalPaquetes="cerrarDetalle($event)"
    />
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">{{ carga.idCarga }}</p>
        <a href="#" class="card-header-icon" aria-label="more options"> </a>
      </header>
      <div class="card-content">
        <div class="tile is-ancestor">
          <div class="tile is-6 is-vertical is-parent">
            <div class="tile is-child">
              <p class="">Paquetes</p>
              <p class="title">{{ paquetes.length }}</p>
            </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child ">
              <p class="subtitle">{{ carga.estado }}</p>
            </div>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item" @click="mostrarDetalles"
          >Ver detalles</a
        >
        <!-- <a href="#" class="card-footer-item">Modificar</a>
        <a href="#" class="card-footer-item">Eliminar</a> -->
      </footer>
    </div>
  </div>
</template>

<script>
import ModalPaquetes from '../paquetes/modalPaquetes';
import Axios from 'axios';

export default {
  data() {
    return {
      detalleActivo: false,
      paquetes: [],
    };
  },
  props: ['carga', 'estado'],
  components: {
    ModalPaquetes,
  },
  methods: {
    retrievePaquetes() {
      Axios.get(`${process.env.VUE_APP_API}package/byLoadId`, {
        headers: { token: localStorage.getItem('token') },
        params: {
          idCarga: this.carga.idCarga,
        },
      })
        .then((res) => {
          this.paquetes = res.data.result;
        })
        .catch((err) => {
          console.log(err.response.data.error);
        });
    },
    mostrarDetalles() {
      this.detalleActivo = true;
    },
    cerrarDetalle(event) {
      this.detalleActivo = false;
      this.paquetes = event;
    },
  },
  mounted() {
    this.retrievePaquetes();
  },
};
</script>

<style scoped></style>
