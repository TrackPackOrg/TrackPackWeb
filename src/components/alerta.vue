<template>
  <div class="alerta">
    <b-message type="is-danger" aria-close-label="Close message"
      >{{ mensaje }}
    </b-message>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Alerta',
  components: {},
  props: [],
  computed: {
    ...mapGetters('alerta', ['mensaje']),
  },
};
</script>

<style>
/* Aquí estilos del componente */
</style>
