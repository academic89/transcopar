<template>
  <b-overlay :show="show" rounded="sm">
    <div class="cotizador w-100">
      <b-row v-if="!nextStep" class="justify-content-center">
        <b-col sm="12" class="mb-3 text-center">
          <b-row class="d-flex align-items-start">
            <b-col>
              <p>
                Esta cotización es meramente informativa y sin ningún
                compromiso.
              </p>
            </b-col>
            <!-- <b-col cols="auto">
              <b-button
                variant="link"
                size="sm"
                @click="$bvModal.hide('cotizador')"
              >
                <fa-icon class="fa-2x fa-fw" icon="times-circle"></fa-icon>
              </b-button>
            </b-col> -->
          </b-row>

          <p class="font-weight-bold text-success">
            ¡Cotiza tu servicio en menos de 1 minuto!
          </p>
          <h5 class="mb-4">¿Qué servicio necesitas?</h5>
          <input
            id="tool-1"
            v-model="check"
            class="checkbox-tools"
            type="radio"
            name="tools"
            value="Local"
          />
          <label class="for-checkbox-tools" for="tool-1">
            <fa-icon class="fa-2x fa-fw" icon="dolly"></fa-icon>
            Local
          </label>
          <input
            id="tool-2"
            v-model="check"
            class="checkbox-tools"
            type="radio"
            name="tools"
            value="Foráneo"
          />
          <label class="for-checkbox-tools" for="tool-2">
            <fa-icon class="fa-2x fa-fw" icon="shipping-fast"></fa-icon>
            Foráneo
          </label>
        </b-col>
        <b-col v-if="check !== 'one'" sm="12">
          <p class="small">
            <span class="font-weight-bold">{{ check }}: </span>
            <span v-if="check === 'Local'"
              >Servicio dentro de tu misma localidad o estado.</span
            >
            <span v-if="check === 'Foráneo'"
              >Servicio fuera de tu localidad con destino a otro estado de la
              república.</span
            >
          </p>
        </b-col>
        <b-col v-if="check === 'Foráneo'" sm="12" md="10" class="mb-4">
          <h5 class="mb-2 text-center">Destino:</h5>
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </b-col>
        <b-col v-if="check !== 'one'" sm="12" class="text-center mb-3">
          <h5 class="mb-4">¿Qué tipo unidad necesitas?</h5>
          <input
            id="tool-3"
            v-model="checkUnit"
            class="checkbox-tools"
            type="radio"
            name="units"
            value="Camioneta de 3 1/2"
          />
          <label class="for-checkbox-tools px-1" for="tool-3">
            <fa-icon class="fa-2x fa-fw" icon="truck"></fa-icon>
            Camioneta
          </label>
          <input
            id="tool-4"
            v-model="checkUnit"
            class="checkbox-tools"
            type="radio"
            name="units"
            value="Thorton"
          />
          <label class="for-checkbox-tools" for="tool-4">
            <fa-icon class="fa-2x fa-fw" icon="truck-moving"></fa-icon>
            Thorton
          </label>
          <input
            id="tool-5"
            v-model="checkUnit"
            class="checkbox-tools"
            type="radio"
            name="units"
            value="Trailer"
          />
          <label class="for-checkbox-tools" for="tool-5">
            <fa-icon class="fa-2x fa-fw" icon="trailer"></fa-icon>
            Trailer
          </label>
        </b-col>
        <b-col sm="12" md="8">
          <b-button
            class="mb-3"
            variant="success"
            block
            pill
            :disabled="
              (check === 'Local' && checkUnit !== 'one') ||
              (check === 'Foráneo' && checkUnit !== 'one' && selected !== null)
                ? false
                : true
            "
            @click="calculater"
            >Cotizar servicio</b-button
          >
        </b-col>
      </b-row>
      <b-row v-else class="justify-content-center">
        <b-col sm="12" class="text-center">
          <img
            class="w-100 mb-4"
            src="../assets/img/logo.png"
            alt="Transcopar"
          />
          <h5>¡Listo aquí tienes tu cotización!</h5>
          <p>
            Servicio:
            <strong> {{ check }}</strong>
          </p>
          <p>
            Destino:
            <strong> {{ selected === null ? 'no aplica' : selected }}</strong>
          </p>
          <p>
            Unidad solicitada: <strong> {{ checkUnit }}</strong>
          </p>
          <p>
            Costo:
            <strong
              ><span class="text-success">{{ price }}*</span></strong
            >
          </p>
          <p class="my-4 font-weight-bold">
            Pónte en contacto con nosotros mediante whatsapp para brindarte más
            información sobre tu cotización
          </p>
          <ButtonWhatsapp />
          <b-button variant="link" pill block @click="reset"
            >Cotizar de nuevo</b-button
          >
          <p class="small mt-4">
            *ESTOS PRECIOS SON MAS I.V.A. - LIBRE DE MANIOBRA
          </p>
        </b-col>
      </b-row>
    </div>
  </b-overlay>
</template>
<script>
import { priceCalculator } from '../utils/calculator'

export default {
  data() {
    return {
      check: 'one',
      checkUnit: 'one',
      price: '$0.00',
      selected: null,
      show: false,
      nextStep: false,
      options: [
        { value: null, text: 'Selecciona un destino:' },
        { value: 'Chalco', text: 'Chalco' },
        { value: 'Acapulco', text: 'Acapulco' },
        { value: 'Aguascalientes', text: 'Aguscalientes' },
        { value: 'Apodaca N.L.', text: 'Apodaca N.L.' },
        { value: 'Cadereyta N.L.', text: 'Cadereyta N.L.' },
        // { value: 'Estanzuela N.L', text: 'Estanzuela N.L.' },
        { value: 'Monterrey', text: 'Monterrey N.L.' },
        { value: 'Cabos', text: 'Cabos' },
        { value: 'Cancun', text: 'Cancun' },
        { value: 'Celaya', text: 'Celaya Gto.' },
        { value: 'Chihuahua', text: 'Chihuahua' },
        { value: 'Cholula', text: 'Cholula Pue.' },
        { value: 'Cuernavaca', text: 'Cuernavaca' },
        { value: 'Culiacán', text: 'Culiacán' },
        { value: 'Guadalajara', text: 'Guadalajara' },
        { value: 'Hermosillo', text: 'Hermosillo Son.' },
        { value: 'Irapuato', text: 'Irapuato' },
        { value: 'León', text: 'León Gto.' },
        { value: 'Mazatlán', text: 'Mazatlán' },
        { value: 'Mérida', text: 'Mérida Yuc.' },
        { value: 'Oaxaca', text: 'Oaxaca' },
        { value: 'Pachuca', text: 'Pachuca Hgo.' },
        { value: 'Poza Rica', text: 'Poza Rica Ver.' },
        { value: 'Puebla', text: 'Puebla Pue.' },
        { value: 'Puerto Vallarta', text: 'Puerto Vallarta' },
        { value: 'Querétaro', text: 'Querétaro' },
        { value: 'San Luis Potosí', text: 'San Luis Potosí' },
        { value: 'Toluca', text: 'Toluca' },
        { value: 'Torreón', text: 'Torreón Coah.' },
        { value: 'Tuxtla Gutiérrez', text: 'Tuxtla Gutiérrez Chia.' },
        { value: 'Veracruz', text: 'Veracruz' },
        { value: 'Villahermosa', text: 'Villahermosa Tab.' },
      ],
    }
  },
  methods: {
    calculater() {
      this.show = true
      if (this.check === 'Local') {
        this.selected = null
      }
      setTimeout(() => {
        this.show = false
        this.nextStep = true
        this.price = priceCalculator(this.check, this.selected, this.checkUnit)
      }, 1000)
    },
    reset() {
      this.check = 'one'
      this.checkUnit = 'one'
      this.selected = null
      this.nextStep = false
    },
  },
}
</script>
<style scoped>
:root {
  --white: #ffffff;
  --light: #f0eff3;
  --black: #000000;
  --dark-blue: #1f2029;
  --dark-light: #353746;
  --red: #da2c4d;
  --yellow: #f8ab37;
  --grey: #ecedf3;
}

::selection {
  color: #ffffff;
  background-color: #000000;
}
::-moz-selection {
  color: #ffffff;
  background-color: #000000;
}

.background-color {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1f2029;
  z-index: 1;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.checkbox:checked ~ .background-color {
  background-color: #ffffff;
}

[type='checkbox']:checked,
[type='checkbox']:not(:checked),
[type='radio']:checked,
[type='radio']:not(:checked) {
  position: absolute;
  left: -9999px;
  width: 0;
  height: 0;
  visibility: hidden;
}
.checkbox:checked + label,
.checkbox:not(:checked) + label {
  position: relative;
  width: 70px;
  display: inline-block;
  padding: 0;
  margin: 0 auto;
  text-align: center;
  margin: 17px 0;
  margin-top: 100px;
  height: 6px;
  border-radius: 4px;
  background-image: linear-gradient(298deg, #da2c4d, #f8ab37);
  z-index: 100 !important;
}
.checkbox:checked + label:before,
.checkbox:not(:checked) + label:before {
  position: absolute;
  font-family: 'unicons';
  cursor: pointer;
  top: -17px;
  z-index: 2;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.checkbox:not(:checked) + label:before {
  content: '\eac1';
  left: 0;
  color: #ecedf3;
  background-color: #353746;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(26, 53, 71, 0.07);
}
.checkbox:checked + label:before {
  content: '\eb8f';
  left: 30px;
  color: #f8ab37;
  background-color: #1f2029;
  box-shadow: 0 4px 4px rgba(26, 53, 71, 0.25), 0 0 0 1px rgba(26, 53, 71, 0.07);
}

.checkbox:checked ~ .section .container .row .col-12 p {
  color: #1f2029;
}

.checkbox-tools:checked + label,
.checkbox-tools:not(:checked) + label {
  position: relative;
  display: inline-block;
  padding: 20px;
  width: 110px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 1px;
  margin: 0 auto;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  text-align: center;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  text-transform: uppercase;
  color: #ffffff;
  background-image: #000;
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
}
.checkbox-tools:not(:checked) + label {
  /* background-color: #353746; */
  background-color: #000 !important;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
.checkbox-tools:checked + label {
  background-color: transparent;
  background-image: linear-gradient(298deg, #da2c4d, #f8ab37);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.checkbox-tools:not(:checked) + label:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.checkbox-tools:checked + label::before,
.checkbox-tools:not(:checked) + label::before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-image: linear-gradient(298deg, #da2c4d, #f8ab37);
  z-index: -1;
}
.checkbox-tools:checked + label .uil,
.checkbox-tools:not(:checked) + label .uil {
  font-size: 24px;
  line-height: 24px;
  display: block;
  padding-bottom: 10px;
}

.checkbox:checked
  ~ .section
  .container
  .row
  .col-12
  .checkbox-tools:not(:checked)
  + label {
  background-color: #f0eff3;
  color: #1f2029;
  box-shadow: 0 1x 4px 0 rgba(0, 0, 0, 0.05);
}
</style>
