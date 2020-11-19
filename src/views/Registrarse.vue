<template>
  <div class="registrarse">
    <div class="columns">
      <div class="is-absolute-centered column is-two-fifhts">
        <div class="card">
          <div v-show="!codigoEnviado">
            <div class="card-image">
              <figure class="image">
                <img
                  src="../assets/register-image.jpg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <Alerta v-if="this.dioError" :error="this.error" />
            <div class="card-content">
              <form>
                <div class="columns m">
                  <label for="nombre" class="column">Nombre</label>
                  <label for="nombre" class="column">Nombre</label>
                </div>
                <div class="columns">
                  <b-field class="column">
                    <b-input
                      required
                      name="nombre"
                      placeholder="Nombre"
                      type="text"
                      icon-pack="fas"
                      icon="signature"
                      v-model="nombre"
                    >
                    </b-input>
                  </b-field>
                  <b-field class="column">
                    <b-input
                      required
                      name="apellido"
                      type="text"
                      placeholder="Apellido"
                      icon="signature"
                      v-model="apellido"
                    >
                    </b-input>
                  </b-field>
                </div>
                <label for="correo">Correo electrónico</label>
                <b-field class="">
                  <b-input
                    required
                    name="correo"
                    placeholder="Correo electrónico"
                    type="email"
                    icon-pack="fas"
                    icon="envelope"
                    v-model="correo"
                  >
                  </b-input>
                </b-field>

                <label for="contraseña">Contraseña</label>
                <b-field class="">
                  <b-input
                    required
                    name="contraseña"
                    placeholder="Contraseña"
                    password-reveal
                    type="password"
                    icon-pack="fas"
                    icon="lock"
                    v-model="contra"
                  >
                  </b-input>
                </b-field>
                <label for="verif-contraseña">Verifica tu contraseña.</label>
                <b-field class="">
                  <b-input
                    required
                    expanded
                    name="verif-contraseña"
                    placeholder="Contraseña"
                    password-reveal
                    type="password"
                    icon-pack="fas"
                    icon="lock"
                    v-model="verifContra"
                  >
                  </b-input>
                </b-field>

                <label for="telefono">Teléfono</label>
                <b-field class="">
                  <b-input
                    name="telefono"
                    placeholder="Número telefónico"
                    type="tel"
                    required
                    icon-pack="fas"
                    icon="phone"
                    v-model="telefono"
                  >
                  </b-input>
                </b-field>
                <b-button @click="enviarForm()" expanded type="is-primary"
                  >Registrarme</b-button
                >
              </form>

              <br />
              <a href="/">Iniciar Sesión</a>
              <br />
            </div>
          </div>
          <div v-show="codigoEnviado">
            <VerificacionCodigo />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Alerta from '@/components/alerta.vue';
import VerificacionCodigo from '@/components/verifcodigo.registrarse.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    Alerta,
    VerificacionCodigo,
  },

  methods: {
    ...mapActions('usuario', [
      'registrarUsuario',
      'dioErrorVerifContra',
      'dioErrorCamposVacios',
    ]),
    enviarForm() {
      if (this.camposLlenos) {
        if (this.verifContra === this.contra) {
          const nuevoUsuario = {
            nombre: this.nombre,
            apellido: this.apellido,
            correo: this.correo,
            passwd: this.contra,
            telefono: this.telefono,
          };
          this.registrarUsuario(nuevoUsuario);
          this.$forceUpdate();
        } else {
          this.dioErrorVerifContra();
        }
      } else {
        this.dioErrorCamposVacios();
      }
    },
  },
  data() {
    return {
      nombre: '',
      apellido: '',
      correo: '',
      contra: '',
      verifContra: '',
      telefono: '',
    };
  },
  computed: {
    ...mapGetters('usuario', ['dioError', 'error', 'token', 'codigoEnviado']),
    camposLlenos() {
      if (this.nombre === '') return false;
      if (this.apellido === '') return false;
      if (this.correo === '') return false;
      if (this.contra === '') return false;
      if (this.verifContra === '') return false;
      if (this.telefono === '') return false;
      return true;
    },
  },
};
</script>
<style scoped>
.has-text-wrapped {
  height: auto !important;
  text-align: left;
  display: inline-block !important;
}
</style>
