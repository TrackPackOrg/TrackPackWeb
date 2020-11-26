<template>
  <div class="columns is-desktop">
    <form
      @submit="sendData"
      class="column is-5-widescreen is-3-fullhd is-5-desktop is-9-tablet is-12-mobile is-absolute-centered"
    >
      <div class="card">
        <div class="card-image">
          <figure class="image ">
            <img src="@/assets/register-image.jpg" alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <h4 class="title is-4">Regístrarte</h4>
          <div class="content">
            <div class="field is-grouped">
              <div class="control">
                <input
                  name="nombre"
                  required
                  class="input"
                  type="text"
                  placeholder="Nombre"
                  v-model="nombre"
                />
              </div>
              <div class="control">
                <input
                  name="apellido"
                  required
                  class="input"
                  type="text"
                  placeholder="Apellido"
                  v-model="apellido"
                />
              </div>
            </div>
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static">
                  +504
                </a>
              </p>
              <div class="control is-expanded">
                <input
                  name="telefono"
                  required
                  class="input"
                  type="passwod"
                  placeholder="Número de teléfono celularo o fijo"
                  v-model="telefono"
                  maxlength="8"
                  pattern="[2389]{1}[0-9]{7}"
                  @input="validatePattern($event)"
                />
              </div>
            </div>
            <div class="field">
              <div class="control is-expanded">
                <input
                  name="email"
                  required
                  class="input"
                  type="email"
                  placeholder="Correo electónico"
                  v-model="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  @input="validatePattern($event)"
                />
              </div>
            </div>
            <div class="field">
              <div class="control is-expanded">
                <input
                  name="contra"
                  required
                  class="input"
                  type="password"
                  placeholder="Contraseña"
                  v-model="contra"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  @input="validatePattern($event)"
                />
              </div>
            </div>
            <div class="field">
              <div class="control is-expanded">
                <input
                  name="verifContra"
                  required
                  class="input"
                  type="password"
                  placeholder="Repite tu contraseña"
                  @input="validatePattern($event)"
                />
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
            <div>
              <p class="help">
                Al hacer clic en "Registrarte", aceptas nuestras Condiciones, la
                Política de datos y la Política de cookies. Es posible que te
                nos contactemos contigo por teléfono.
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  data() {
    return {
      nombre: '',
      apellido: '',
      telefono: '',
      email: '',
      contra: '',
      formOk: false,
      mensaje: null,
    };
  },
  props: [],
  components: {},
  methods: {
    //valida que los campos cunplan con su patron y que las contraseñas sen iguales
    validatePattern(handler) {
      if (handler.target.name === 'verifContra') {
        if (handler.target.value === this.contra) {
          handler.target.classList = 'input is-success';
          this.formOk = true;
        } else {
          handler.target.classList = 'input is-danger';
          this.formOk = false;
        }
      } else {
        if (handler.target.value.match(handler.target.pattern)) {
          handler.target.classList = 'input is-success';
        } else {
          handler.target.classList = 'input is-danger';
        }
      }
    },
    //
    //Manda los datos a la api
    sendData(handler) {
      if (!this.formOk) {
        this.mensaje = 'Las contraseñas no coinciden.';
      }
      handler.preventDefault();
      if (this.formOk) {
        const user = {
          nombre: this.nombre,
          apellido: this.apellido,
          correo: this.email,
          passwd: this.contra,
          telefono: '504' + this.telefono,
        };
        Axios.post(`${process.env.VUE_APP_API}customer`, user)
          .then((res) => {
            localStorage.setItem('token', res.data.token);
            this.$router.push('verificacion-codigo');
          })
          .catch((err) => {
            this.mensaje = err.response.data.error;
          });
      }
    },
    //
  },
};
</script>

<style></style>
