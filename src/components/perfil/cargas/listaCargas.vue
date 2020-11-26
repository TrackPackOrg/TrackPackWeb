<template>
  <div class="pt-3">
    <h3 class="title is-3">Mis cargas</h3>
    <div class="column">
      <div class="field">
        <label class="label">Buscar</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input" />
        </div>
      </div>
    </div>
    <div class="column">
      <button class="button is-success">Aggregar nueva</button>
    </div>
    <hr />
    <div class="cargas">
      <CardCarga
        v-for="carga in cargas"
        :key="carga.idCarga"
        :rastreo="`TP-${carga.idCarga}`"
        :estado="carga.estado"
      />
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
import CardCarga from './carga';

export default {
  data() {
    return {
      cargas: [],
    };
  },
  props: [],
  components: {
    CardCarga,
  },
  methods: {
    retrieveCargas() {
      Axios.get(`${process.env.VUE_APP_API}load`, {
        headers: { token: localStorage.getItem('token') },
      })
        .then((res) => (this.cargas = res.data.result))
        .catch();
    },
  },
  created() {
    this.retrieveCargas();
  },
};
</script>

<style scoped>
.cargas {
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  grid-gap: 1rem;
}
</style>
