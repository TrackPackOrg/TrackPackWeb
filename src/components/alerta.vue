<template>
  <div class="alerta">
    <b-message type="is-danger" aria-close-label="Close message"
      >{{ this.error }}
    </b-message>
  </div>
</template>

<script>
export default {
  name: 'Alerta',
  components: {},
  props: ['error'],
  computed: {},
};
</script>

<style>
/* Aquí estilos del componente */
</style>
