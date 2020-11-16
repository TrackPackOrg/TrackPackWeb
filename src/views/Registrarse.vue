<template>
  <div class="registrarse">
    <div class="columns">
      <div class="is-absolute-centered column is-two-fifhts">
        <div class="card">
          <div v-if="!isCodeSent">
            <div class="card-image">
              <figure class="image">
                <img
                  src="../assets/register-image.jpg"
                  alt="Placeholder image"
                />
              </figure>
            </div>
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
                      class=""
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
                      class=""
                    >
                    </b-input>
                  </b-field>
                </div>
                <label for="correo">Correo electrónico</label>
                <b-field class="">
                  <b-input
                    required
                    name="corre"
                    placeholder="Correo electrónico"
                    type="email"
                    icon-pack="fas"
                    icon="envelope"
                    class=""
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
                    class=""
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
                    class=""
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
                    class=""
                  >
                  </b-input>
                </b-field>
                <b-button expanded type="is-primary">Registrarme</b-button>
              </form>

              <br />
              <a href="/recoverpasword">He olvidado mi contraseña</a>
              <br />
              <br />

              <label
                >¿Eres nuevo por aquí?
                <span
                  ><a href="/registrarse">¡Regístrate gratis!</a></span
                ></label
              >
            </div>
          </div>
          <div v-if="isCodeSent">
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
                <label for="telefono"
                  >Ingresalo para verificar tu correo.</label
                >
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      isCodeSent: true,
    };
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
