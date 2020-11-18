<template>
  <div class="verificacion-codigo">
    <div class="card-image">
      <figure class="image">
        <img src="../assets/code-image.jpg" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
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
            class=""
          >
          </b-input>
        </b-field>
        <a href="/perfil">Ir a perfil</a>
        <b-button expanded type="is-primary">Verificar</b-button>
      </form>
    </div>
  </div>
</template>

<script>
//Aqui logica del componente
export default {
  name: 'VerificacionCodigo',
  components: {},
};
</script>

<style>
/* Aquí estilos del componente */
</style>
