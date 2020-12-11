<template>
  <div>
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
          <form @submit="agregarPaquete">
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

    <div class="modal" :class="activo ? 'is-active' : null" v-if="!modalActivo">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <button
            class="delete"
            aria-label="close"
            @click="cerrarModalPaquetes"
          ></button>
          <p class="modal-card-title">Tus Paquetes</p>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
          <table class="table">
            <thead>
              <tr>
                <th>No. Rastreo</th>
                <th>Tipo de Paquete</th>
                <th>Curier</th>
                <th>Descripción</th>
                <th>Día Recibido</th>
                <th>Recibido por</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="paquete in paquetes" :key="paquete.idPaquete">
                <td>{{ paquete.trackingUsa }}</td>
                <td>{{ paquete.tipo }}</td>
                <td>{{ paquete.nombreCurrier }}</td>
                <td>{{ paquete.descripcion }}</td>
                <td>{{ paquete.datetimeRecibido.substring(0,10) }}</td>
                <td>{{ paquete.recibidoPor }}</td>
                <td>
                  <div class="columns">
                    <div class="column">
                      <button
                       :class="carga.estado ==='Esperando pickup' || carga.estado === 'En tránsito' ? 'is-static':null"
                        class="button is-small is-danger"
                        @click="confirmCustomDelete(paquete.idPaquete)"
                      >
                        <i class="fas fa-trash"></i>
                      </button>
                    </div>
                    <!-- <div class="column">
                    <button class="button is-small is-dark">
                      <i class="fas fa-edit"></i>
                    </button>
                  </div> -->
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="mostrarModal" :class="carga.estado ==='Esperando pickup' || carga.estado === 'En tránsito' ? 'is-static':null"  >
            Agregar Nuevo
          </button>
          <button type="button" name="button" class="button is-success" :class="carga.estado === 'En tránsito' ? null:'is-static'" @click="mostrarRastreo">Rastrear</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Axios from 'axios';
export default {
  data() {
    return {
      tipos: [],
      curriers: [],
      modalActivo: false,
      mensaje: '',
      rastreo: '',
      descripcion: '',
      idTipo: null,
      idCurrier: null,
      idPaqueteEliminar: null,
    };
  },
  props: ['activo', 'paquetes', 'carga'],
  components: {},
  methods: {
    ...mapActions('utils',['cambiarOpcion', 'estableceIdCarga']),
    cerrarModalPaquetes() {
      this.$emit('cerrarModalPaquetes', this.paquetes);
    },
    agregarPaquete(handler) {

      handler.preventDefault();
      const data = {
        idCarga: this.carga.idCarga,
        trackingUsa: this.rastreo,
        idTipo: this.idTipo,
        descripcion: this.descripcion,
        idCurrier: this.idCurrier,
      };
      Axios.post(`${process.env.VUE_APP_API}package`, data, {
        headers: { token: localStorage.getItem('token') },
      })
        .then(() => {
          this.rastreo = ''
          this.idTipo = null
          this.descripcion= ''
          this.idCurrier= null
          this.cerrarModal();
          this.retrievePaquetes();
        })
        .catch((err) => (this.mensaje = err.response.data.error));
    },
    eliminarPaquete(idPaquete) {
      Axios.delete(`${process.env.VUE_APP_API}package?idPaquete=${idPaquete}`, {
        headers: {
          token: localStorage.getItem('token'),
        },
      }).then(() => {
        this.retrievePaquetes();
        this.cerrarModal();
      });
    },
    confirmCustomDelete(idPaquete) {
      this.retrievePaquetes();
      this.idPaqueteEliminar = idPaquete;
      if (this.paquetes.length != 1) {
        this.$buefy.dialog.confirm({
          title: 'Eliminar Paquete',
          message:
            'Estás a punto de eliminar tu paquete. Esta acción no se puede deshacer.',
          confirmText: 'Eliminar',
          type: 'is-danger',
          hasIcon: true,
          cancelText: 'Cancelar',
          onConfirm: () => {
            this.eliminarPaquete(this.idPaqueteEliminar);
            this.retrievePaquetes();
          },
        });
      } else {
        this.alert();
      }
    },
    alert() {
      this.$buefy.dialog.alert('Debes tener al menos un paquete en tu carga.');
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
    cerrarModal() {
      console.log(this.carga.estado);
      this.modalActivo = false;
    },
    mostrarModal() {
      this.modalActivo = true;
    },
    sleccionarCurrier(handler) {
      this.idCurrier = handler.target.value;
    },
    seleccionarTipo(handler) {
      this.idTipo = handler.target.value;
    },
    mostrarRastreo(){
      this.cerrarModal()
      this.estableceIdCarga(this.carga.idCarga)
      this.cambiarOpcion('rastreo')
    }
  },

  mounted() {
    this.retrieveTipos();
    this.retrieveCurriers();
  },
};
</script>

<style scoped>
.modal-card {
  width: 50%;
}
</style>
