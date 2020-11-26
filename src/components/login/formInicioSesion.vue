<template>
  <div class="columns">
    <form
      @submit="login"
      class="column is-absolute-centered is-6-widescreen is-3-fullhd is-6-desktop is-9-tablet is-12-mobile"
    >
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img src="@/assets/login-image.jpg" alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <h4 class="title is-4">¡Inicia sesión!</h4>
          <div class="content">
            <div class="field">
              <div class="control">
                <input
                  required
                  class="input"
                  type="email"
                  placeholder="Correo electrónico"
                  v-model="correo"
                />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input
                  required
                  class="input"
                  type="password"
                  placeholder="Contraseña"
                  v-model="contra"
                />
              </div>
            </div>
            <div class="control">
              <button class="button is-primary is-fullwidth">Iniciar</button>
            </div>
            <br />
            <article class="message is-danger" v-if="mensaje">
              <div class="message-body">
                {{ mensaje }}
              </div>
            </article>
            <div>
              <hr />
              <p>¿Eres nuevo por aquí? <a href="registro">¡Regístrate!</a></p>

              <a href="login-empleado" class="has-text-grey-lighter"
                ><p>Soy un emplado</p></a
              >
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
      correo: '',
      contra: '',
      mensaje: null,
    };
  },
  props: [],
  components: {},
  methods: {
    login(handler) {
      const data = {
        correo: this.correo,
        passwd: this.contra,
      };
      Axios.post(`${process.env.VUE_APP_API}login`, data)
        .then((res) => {
          localStorage.setItem('token', res.data.token);
          this.$router.push('/dashboard-cliente');
        })
        .catch((err) => {
          this.mensaje = err.response.data.error;
        });
      handler.preventDefault();
    },
  },
};
</script>

<style></style>
