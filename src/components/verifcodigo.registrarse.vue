<template>
  <div class="verificacion-codigo">
    <div class="card-image">
      <figure class="image">
        <img src="../assets/code-image.jpg" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <Alerta v-if="this.dioError" :error="this.error" />

      <p class="title is-5">Revisa tu correo electónico.</p>
      <p>
        Recibirás un código de verificacion de 6 dígitos.
      </p>
      <form>
        <label for="telefono">Ingresalo para verificar tu correo.</label>
        <b-field class="">
          <b-input
            name="telefono"
            placeholder="Código"
            type="tel"
            required
            icon="hashtag"
            v-model="codigo"
            maxlength="6"
          >
          </b-input>
        </b-field>
        <a href="/perfil">Ir a perfil</a>
        <b-button expanded type="is-primary" @click="enviarCodigo()"
          >Verificar</b-button
        >
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Alerta from '@/components/alerta.vue';

//Aqui logica del componente
export default {
  name: 'VerificacionCodigo',
  components: { Alerta },
  data() {
    return {
      codigo: '',
    };
  },
  methods: {
    ...mapActions('tempCrap', ['verifCodigo']),
    enviarCodigo() {
      this.verifCodigo(this.codigo);
    },
  },
  computed: {
    ...mapGetters('tempCrap', ['dioError', 'error']),
  },
};
</script>

<style>
/* Aquí estilos del componente */
</style>
