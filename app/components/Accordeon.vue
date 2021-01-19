<template>
  <div class="accordion mb-4" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button v-b-toggle.accordion-1 block variant="danger"
          >¿Quiénes son nuestros clientes?</b-button
        >
      </b-card-header>
      <b-collapse
        id="accordion-1"
        visible
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body>
          <b-card-text>
            Los clientes son nuestro motor de nuestra empresa, sin ellos no
            podríamos seguir manteniendo dentro del área del transporte,
            considerando lo más valioso para nuestra empresa tenerlos
            satisfechos es nuestro objetivo principal siempre con un servicio de
            calidad.
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button v-b-toggle.accordion-2 block variant="danger"
          >¿Cuáles son nuestros principales productos o servicios?</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text
            >El principal servicio de transcopar es el servicio dedicado y
            renta.</b-card-text
          >
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button v-b-toggle.accordion-3 block variant="danger"
          >¿Cuáles son nuestros mercados?</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text
            >Transcopar se acopla al tipo de servicio que se desea adquirir,
            estimando que la cartera actual de clientes se enfoca en el
            transporte de producto terminado formaría nuestra
            especialidad.</b-card-text
          >
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button v-b-toggle.accordion-4 block variant="danger"
          >¿Cuál es nuestra tecnología?</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text
            >Se cuenta con rastreo satelital en cada una de las unidades que
            contamos, las 24hrs del día y los 365 días del año, complementado
            con teléfono móvil para mantenernos comunicados a nuestros clientes
            y ofrecer mejor servicio.</b-card-text
          >
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {}
</script>
