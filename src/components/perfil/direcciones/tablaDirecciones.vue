<template>
  <div>
    <Direccion />
  </div>
</template>

<script>
import Axios from 'axios';
import Direccion from './direccion';
export default {
  props: [],
  components: {
    Direccion,
  },
  methods: {
    retrieveDirecciones() {
      Axios.get();
    },
  },
};
</script>

<style></style>
