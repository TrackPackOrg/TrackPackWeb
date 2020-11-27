<template>
  <div>
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
        <form>
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
            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox" />
                  Marcar como preferida
                </label>
              </div>
            </div>
            <article class="message is-danger" v-if="mensaje">
              <div class="message-body">
                {{ mensaje }}
              </div>
            </article>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-primary" @click="modificarDireccion">
              Guardar
            </button>
          </footer>
        </form>
      </div>
    </div>

    <div class="column is-5">
      <h6 class="title is-6">
        {{ direccion.municipio }}, {{ direccion.departamento }}
      </h6>
      <div class="columns">
        <p class="column is-9">
          {{ direccion.direccion }}
        </p>
        <div class="column">
          <button class="button is-dark m-1" @click="mostrarModificar">
            Modificar
          </button>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      departamentos: [],
      municipios: [],
      modalActivo: false,
      direccion1: '',
      direccion2: '',
      mensaje: '',
      idMunicipio: null,
    };
  },
  props: ['direccion', 'idDepartamento'],
  components: {},
  methods: {
    ...mapActions('utils'['cambiarOpcion']),
    retrieveDepartamentos() {
      Axios.get(`${process.env.VUE_APP_API}address/states`).then((res) => {
        this.departamentos = res.data.states;
      });
    },
    retrieveMunicipios(handler) {
      Axios.get(`${process.env.VUE_APP_API}address/cities`, {
        params: { stateId: handler.target.value },
      }).then((res) => (this.municipios = res.data.cities));
    },

    mostrarModificar() {
      const partesDireccion = this.direccion.direccion.split(', ');
      this.direccion1 = partesDireccion[0];
      this.direccion2 = partesDireccion[1];
      this.modalActivo = true;
    },
    modificarDireccion(handler) {
      handler.preventDefault();
      const data = {
        idDireccion: this.direccion.idDireccion,
        idMunicipio: +this.idMunicipio,
        direccion: `${this.direccion1}, ${this.direccion2}`,
      };
      console.log(data);
      Axios.put(`${process.env.VUE_APP_API}address/customer`, data, {
        headers: { token: localStorage.getItem('token') },
      })
        .then(() => {
          this.modalActivo = false;
          this.idMunicipio = null;
          this.direccion1 = '';
          this.direccion2 = '';
          this.mensaje = '';
          this.cambiarOpcion('carga');
          this.cerrarModal();
          this.$forceUpdate();
        })
        .catch((err) => (this.mensaje = err.response));
    },

    seleccionarMunicipio(handler) {
      this.idMunicipio = handler.target.value;
    },
    cerrarModal() {
      this.modalActivo = false;
    },
  },
  mounted() {
    this.retrieveDepartamentos();
  },
  destroyed() {
    this.$forceUpdate();
  },
};
</script>

<style></style>
