<template>
  <div class="mt-3" @focus="retrieveDirecciones">
    <div class="modal" :class="modalActivo ? 'is-active' : null">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Nueva dirección</p>
          <button
            class="delete"
            aria-label="close"
            @click="cerrarModal"
          ></button>
        </header>
        <form @submit="nuevaDireccion">
          <section class="modal-card-body">
            <div class="field">
              <label class="label">Departamento</label>
              <div class="control">
                <div class="select">
                  <select required @change="retrieveMunicipios">
                    <option value="">Departamento</option>
                    <option
                      v-for="departamento in departamentos"
                      :key="departamento.idDepartamento"
                      :value="departamento.idDepartamento"
                      >{{ departamento.departamento }}</option
                    >
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Municipio</label>
              <div class="control">
                <div class="select">
                  <select required @change="seleccionarMunicipio">
                    <option value="">Municipio</option>
                    <option
                      v-for="municipio in municipios"
                      :key="municipio.idMunicipio"
                      :value="municipio.idMunicipio"
                      >{{ municipio.municipio }}</option
                    >
                  </select>
                </div>
              </div>
            </div>
            <div class="field">
              <label class="label">Dirección 1</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Dirección 1"
                  v-model="direccion1"
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Dirección 2 (opcional)</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Dirección 2"
                  v-model="direccion2"
                />
              </div>
            </div>
            <!-- <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox" />
                  Marcar como preferida
                </label>
              </div>
            </div> -->
            <article class="message is-danger" v-if="mensaje">
              <div class="message-body">
                {{ mensaje }}
              </div>
            </article>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-primary">Guardar</button>
          </footer>
        </form>
      </div>
    </div>

    <h3 class="title is-3">Mis direcciones</h3>
    <div class="columns">
      <div class="column is-1">
        <button
          class="button is-success "
          @click="mostrarModal"
          autofocus
          @focus="retrieveDirecciones"
        >
          Agregar nueva
        </button>
      </div>
      <div class=" column is-1 ">
        <button class="button ml-2">
          <span class="icon is-large" @click="retrieveDirecciones">
            <i class="fas fa-sync"></i>
          </span>
        </button>
      </div>
    </div>
    <hr />
    <Direccion
    @guardarDireccion="retrieveDirecciones"
      v-for="direccion in direcciones"
      :key="direccion.idDireccion"
      :direccion="direccion"
      :idDepartamento="idDepartamento"
    />
  </div>
</template>

<script>
import Axios from 'axios';
import Direccion from './direccion';
export default {
  data() {
    return {
      direcciones: [],
      departamentos: [],
      municipios: [],
      idMunicipio: null,
      direccion1: '',
      direccion2: '',
      idDepartamento: null,
      modalActivo: false,
      mensaje: '',
      preferida: false,
    };
  },
  props: [],
  components: {
    Direccion,
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
    retrieveDepartamentos() {
      Axios.get(`${process.env.VUE_APP_API}address/states`).then((res) => {
        this.departamentos = res.data.states;
      });
    },
    retrieveMunicipios(handler) {
      this.idDepartamento = handler.target.value;
      Axios.get(`${process.env.VUE_APP_API}address/cities`, {
        params: { stateId: handler.target.value },
      }).then((res) => (this.municipios = res.data.cities));
    },
    nuevaDireccion(handler) {
      handler.preventDefault();
      const data = {
        idMunicipio: this.idMunicipio,
        direccion: `${this.direccion1}, ${this.direccion2}`,
      };
      Axios.post(`${process.env.VUE_APP_API}address/customer`, data, {
        headers: { token: localStorage.getItem('token') },
      })
        .then(() => {
          this.retrieveDirecciones();
          this.modalActivo = false;
          this.idMunicipio = null;
          this.direccion1 = '';
          this.direccion2 = '';
          this.mensaje = '';
        })
        .catch((err) => (this.mensaje = err.response.data.error));
    },
    seleccionarMunicipio(handler) {
      this.idMunicipio = handler.target.value;
    },
    mostrarModal() {
      this.modalActivo = true;
    },
    cerrarModal() {
      this.modalActivo = false;
    },
  },
  mounted() {
    this.retrieveDirecciones();
    this.retrieveDepartamentos();
  },
};
</script>

<style></style>
