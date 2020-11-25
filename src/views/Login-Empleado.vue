<template>
  <div class="is-absolute-centered">
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img src="../assets/login-image.jpg" alt="" />
        </figure>
      </div>
      <div class="card-content">
        <Alerta />
        <h4 class="title is-4">¡Inicia Sesión como Empleado!</h4>
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
            >Iniciar Sesión</b-button
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Alerta from '@/components/alerta.vue';

export default {
  name: 'LoginEmpleado',
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
    enviarDatos(correo, passwd) {
      const data = {
        correo: correo,
        passwd: passwd,
      };
      this.iniciarSesion(data);
    },
  },
};
</script>
<style scoped></style>
