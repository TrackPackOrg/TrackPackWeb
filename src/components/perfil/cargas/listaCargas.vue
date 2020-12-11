<template>
  <div class="pt-3">
    <div class="modal" :class="modalActivo ? 'is-active' : null">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Nueva Carga</p>
          <button
            class="delete"
            aria-label="close"
            @click="cerrarModal"
          ></button>
        </header>
        <section class="modal-card-body">
          <article class="message is-danger" v-if="mensaje">
            <div class="message-body">
              {{ mensaje }}
            </div>
          </article>
          <form @submit="agregarCarga">
            <div class="field">
              <label class="label">Dirección</label>
              <div class="control">
                <div class="select">
                  <select v-model="direccion" required>
                    <option
                      :selected="direccion"
                      :value="direccion.idDireccion"
                      v-for="direccion in direcciones"
                      :key="direccion.idDireccion"
                      >{{ direccion.direccion }}</option
                    >
                  </select>
                </div>
              </div>
            </div>
            <hr />
            <h5 class="title is-5">Agrega un paquete a tu carga</h5>

            <div class="field">
              <label class="label">Numero de rastreo</label>

              <div class="control">
                <input
                  class="input"
                  type="text"
                  required
                  pattern="[a-zA-Z0-9]{6,}"
                  placeholder="Número de rastero"
                  v-model="rastreo"
                />
                <p class="help">
                  El número de rastreo que te proporcionó la empresa que lleva
                  tu paquete a nuestra bodega.
                </p>
              </div>
            </div>

            <div class="field">
              <label class="label">Currier</label>
              <div class="control">
                <div class="select">
                  <select @change="sleccionarCurrier" required>
                    <option value="">Currier</option>
                    <option
                      :value="currier.idCurrier"
                      v-for="currier in curriers"
                      :key="currier.idCurrier"
                      >{{ currier.nombreCurrier }}</option
                    >
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Tipo de paquete</label>
              <div class="control">
                <div class="select">
                  <select @change="seleccionarTipo" required>
                    <option value="">Tipo de paquete</option>
                    <option
                      :value="tipo.idTipo"
                      v-for="tipo in tipos"
                      :key="tipo.idTipo"
                      >{{ tipo.tipo }}</option
                    >
                  </select>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">Descripción</label>
              <div class="control">
                <textarea
                  required
                  class="textarea"
                  placeholder="Descripción de tu paquete"
                  v-model="descripcion"
                ></textarea>
              </div>
            </div>

            <button class="button is-primary">Guardar</button>
          </form>
        </section>
      </div>
    </div>

    <div class="column">
      <button class="button is-success" @click="mostrarModal">
        Aggregar nueva
      </button>
    </div>
    <hr />
    <div class="cargas">
      <CardCarga v-for="carga in cargas" :key="carga.idCarga" :carga="carga" @recargaCargas='retrieveCargas'/>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
import CardCarga from './carga';

export default {
  data() {
    return {
      cargas: [],
      direcciones: [],
      tipos: [],
      curriers: [],
      modalActivo: false,
      idCargaNueva: null,
      direccion: null,
      rastreo: '',
      descripcion: '',
      idTipo: null,
      idCurrier: null,
      mensaje: null,
    };
  },
  props: [],
  components: {
    CardCarga,
  },
  methods: {
    retrieveDirecciones() {
      Axios.get(`${process.env.VUE_APP_API}address`, {
        headers: { token: localStorage.getItem('token') },
      })
        .then((res) => {
          this.direcciones = res.data.results;
        })
        .catch((err) =>
          console.log(
            'Parece que hubo un error al conectarse con el servidor. ' +
              err.response.data.error
          )
        );
    },
    retrieveCargas() {
      this.$forceUpdate()
      Axios.get(`${process.env.VUE_APP_API}load`, {
        headers: { token: localStorage.getItem('token') },
      })
        .then((res) => (this.cargas = res.data.result))
        .catch();
    },
    retrieveTipos() {
      Axios.get(`${process.env.VUE_APP_API}package/packageType`, {
        headers: { token: localStorage.getItem('token') },
      })
        .then((res) => {
          this.tipos = res.data.result;
        })
        .catch((err) => console.log(err.response.data.error));
    },
    retrieveCurriers() {
      Axios.get(`${process.env.VUE_APP_API}package/curriers`, {
        headers: { token: localStorage.getItem('token') },
      })
        .then((res) => {
          this.curriers = res.data.result;
        })
        .catch();
    },
    agregarCarga(handler) {
      handler.preventDefault();
      if (!this.idCargaNueva) {
        Axios.post(
          `${process.env.VUE_APP_API}load`,
          { idDireccion: this.direccion },
          {
            headers: { token: localStorage.getItem('token') },
          }
        )
          .then((res) => {
           
            this.idCargaNueva = res.data.idCarga;
            if (this.idCargaNueva) {
        const data = {
          idCarga: this.idCargaNueva,
          trackingUsa: this.rastreo,
          idTipo: this.idTipo,
          descripcion: this.descripcion,
          idCurrier: this.idCurrier,
        };
        Axios.post(`${process.env.VUE_APP_API}package`, data, {
          headers: { token: localStorage.getItem('token') },
        })
          .then(() => {
            this.retrieveCargas();
            this.cerrarModal();
             this.rastreo =''
            this.descripcion= ''
            this.idTipo = null
            this.idCurrier= null
          })
          .catch((err) => {
            this.mensaje = err.response.data.error;
          });
      }
          })
          .catch((err) => {
            this.mensaje = err.response.data.error;
          });
      }
      
    },
    mostrarModal() {
      this.modalActivo = true;
    },
    cerrarModal() {
      this.modalActivo = false;
    },
    seleccionarTipo(handler) {
      this.idTipo = handler.target.value;
    },
    sleccionarCurrier(handler) {
      this.idCurrier = handler.target.value;
    },
  },
  created() {
    this.retrieveCargas();
    this.retrieveDirecciones();
    this.retrieveCurriers();
    this.retrieveTipos();
  },
};
</script>

<style scoped>
.cargas {
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  grid-gap: 1rem;
}
</style>
