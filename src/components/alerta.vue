<template>
  <div class="alerta">
    <b-message :type="this.tipo" aria-close-label="Close message"
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
    ...mapGetters('alerta', ['mensaje', 'tipo']),
  },
};
</script>

<style>
/* Aquí estilos del componente */
</style>
