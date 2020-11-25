<template>
  <div class="home columns">
    <div class="is-absolute-centered column is-one-fifth">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img src="../assets/login-image.jpg" alt="" />
          </figure>
        </div>
        <div class="card-content">
          <Alerta />
          <h4 class="title is-4">¡Inicia Sesión!</h4>
          <form>
            <b-field>
              <b-input
                placeholder="Ingresa tu correo electrónico."
                type="email"
                icon-pack="fas"
                icon="envelope"
                v-model="correo"
              >
              </b-input>
            </b-field>
            <b-field>
              <b-input
                type="password"
                placeholder="Ingresa tu contraseña."
                password-reveal
                icon="lock"
                v-model="contra"
              >
              </b-input>
            </b-field>

            <b-button
              expanded
              @click="enviarDatos(correo, contra)"
              type="is-primary"
              >Iniciar</b-button
            >
          </form>

          <br />
          <a href="/recoverpasword">He olvidado mi contraseña</a>
          <br />
          <br />

          <label
            >¿Eres nuevo por aquí?
            <span><a href="/registrarse">¡Regístrate gratis!</a></span></label
          >
        </div>
      </div>
      <a href="/login-empleado">Soy un Empleado</a>
    </div>
  </div>
</template>

<script>
import Alerta from '@/components/alerta.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    Alerta,
  },
  data() {
    return {
      correo: '',
      contra: '',
    };
  },
  methods: {
    ...mapActions('session', ['iniciarSesion']),
    enviarDatos(correo, contra) {
      const data = {
        correo: correo,
        passwd: contra,
      };
      this.iniciarSesion(data);
    },
  },
  computed: mapGetters([]),
};
</script>
<style scoped></style>
