<template>
  <div>
    <div class="columns is-desktop">
      <form
        @submit="sendData"
        class="column is-6-widescreen is-4-fullhd is-6-desktop is-9-tablet is-12-mobile is-absolute-centered"
      >
        <div class="card">
          <div class="card-image">
            <figure class="image ">
              <img src="@/assets/code-image.jpg" alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <h4 class="title is-4">Verificar tu cuenta</h4>
            <div class="content">
              <div class="field">
                <div class="control is-expanded">
                  <input
                    pattern="[0-9]{6}"
                    name="codigo"
                    required
                    class="input"
                    type="text"
                    placeholder="Código"
                    v-model="codigo"
                    maxlength="6"
                    @input="validatePattern($event)"
                  />
                </div>
                <div>
                  <p class="help">
                    Te hemos enviado un correo electrónico con un codigo de
                    verificación para validar que el correo que ingresaste te
                    pertenece.
                  </p>
                </div>
              </div>
              <div class="control">
                <button class="button is-primary is-fullwidth">
                  Registrarte
                </button>
              </div>
              <hr />
              <article class="message is-danger" v-if="mensaje">
                <div class="message-body">
                  {{ mensaje }}
                </div>
              </article>
            </div>
          </div>
        </div>
      </form>
      <div class="modal" :class="verificado ? 'is-active' : null">
        <!-- <div class="modal-background"></div> -->
        <div class="modal-content">
          <div
            class="card column is-6-widescreen is-4-fullhd is-6-desktop is-9-tablet is-12-mobile is-absolute-centered"
          >
            <div class="card-content has-text-centered">
              <img src="@/assets/check.gif" alt="" loop="none" />
              <h4 class="title is-4">Tu cuenta se verificó correctamente.</h4>
              <a href="/"
                ><button class="button is-primary">Iniciar sesión</button></a
              >
            </div>
          </div>
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  data() {
    return {
      codigo: null,
      formOk: false,
      mensaje: null,
      verificado: false,
    };
  },
  props: [],
  components: {},
  methods: {
    //Valida el pattern del codigo y asigna clases dinamicamente al input
    validatePattern(handler) {
      if (handler.target.value.match(handler.target.pattern)) {
        handler.target.classList = 'input is-success';
        this.formOk = true;
      } else {
        handler.target.classList = 'input is-danger';
        this.formOk = false;
      }
    },

    //Envia el codigo a la API
    sendData(handler) {
      handler.preventDefault();
      if (this.formOk) {
        const data = {
          token: localStorage.getItem('token'),
          code: this.codigo,
        };
        Axios.post(`${process.env.VUE_APP_API}customer/verify`, data, {
          headers: { token: data.token },
        })
          .then(() => {
            this.verificado = true;
            localStorage.removeItem('token');
          })
          .catch((err) => (this.mensaje = err.response.data.error));
      }
    },
  },
};
</script>

<style scoped>
.modal .card {
  border: 1px solid #cccccc;
}
</style>
