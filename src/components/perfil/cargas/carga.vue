<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{ rastreo }}</p>
      <a href="#" class="card-header-icon" aria-label="more options"> </a>
    </header>
    <div class="card-content">
      <div class="tile is-ancestor">
        <div class="tile is-6 is-vertical is-parent">
          <div class="tile is-child">
            <p class="">Paquetes</p>
            <p class="title">2</p>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child ">
            <p class="subtitle">{{ estado }}</p>
          </div>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Ver detalles</a>
      <a href="#" class="card-footer-item">Modificar</a>
      <a href="#" class="card-footer-item">Eliminar</a>
    </footer>
  </div>
</template>

<script>
export default {
  props: ['rastreo', 'estado'],
  components: {},
  methods: {},
};
</script>

<style scoped></style>
