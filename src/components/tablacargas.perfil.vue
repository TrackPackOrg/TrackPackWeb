<template>
  <div class="tabla-cargas">
    <div class="card columns">
      <div class="column is-one-third custom-scrollbar">
        <b-table
          height="300"
          sticky-header
          :data="dataCarga"
          :columns="columnCarga"
          :selected.sync="selected"
        ></b-table>
        <div class="columns">
          <b-button class="column" expanded inverted type="is-primary"
            >Nueva carga</b-button
          >
        </div>
      </div>
      <div class="column">
        <b-table height="300" sticky-header :data="data">
          <b-table-column
            field="id"
            label="Nº Rastreo"
            width="40"
            numeric
            v-slot="props"
          >
            {{ props.row.id }}
          </b-table-column>
          <b-table-column
            field="currier"
            label="Currier"
            width="20"
            numeric
            v-slot="props"
          >
            {{ props.row.currier }}
          </b-table-column>
          <b-table-column
            field="descripcion"
            label="Descripción"
            width="70"
            numeric
            v-slot="props"
          >
            {{ props.row.descripcion }}
          </b-table-column>
          <b-table-column
            field="fechaRecibido"
            label="Recibido"
            width="20"
            numeric
            v-slot="props"
          >
            {{ props.row.fechaRecibido }}
          </b-table-column>
          <b-table-column
            field="recibidoPor"
            label="Recibido Por"
            width="40"
            numeric
            v-slot="props"
          >
            {{ props.row.recibidoPor }}
          </b-table-column>
          <b-table-column label="Acciones" width="20">
            <span>
              <b-icon pack="fas" icon="edit"> </b-icon>
              <b-icon pack="fas" type="is-danger" icon="trash"> </b-icon>
            </span>
          </b-table-column>
        </b-table>
        <div class="columns">
          <b-button class="column" expanded inverted type="is-primary"
            >Nuevo paquete</b-button
          >
          <b-button class="column" expanded inverted type="is-primary"
            >Solicita el envío de tu carga</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Aqui logica del componente
export default {
  name: 'TablaCargas',
  components: {},
  data() {
    const dataCarga = [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
      },
      {
        id: 5,
      },
      {
        id: 5,
      },
      {
        id: 5,
      },
    ];
    const data = [
      {
        id: 1,
        currier: 'Jesse',
        descripcion: 'Simmons',
        fechaRecibido: '2016-10-15 13:43:27',
        recibidoPor: 'Manuel',
      },
      {
        id: 2,
        currier: 'John',
        descripcion: 'Jacobs',
        fechaRecibido: '2016-12-15 06:00:53',
        recibidoPor: 'Ricardo',
      },
      {
        id: 3,
        currier: 'Tina',
        descripcion: 'Gilbert',
        fechaRecibido: '2016-04-26 06:26:28',
        recibidoPor: 'Ricardo',
      },
      {
        id: 4,
        currier: 'Clarence',
        descripcion: 'Flores',
        fechaRecibido: '2016-04-10 10:28:46',
        recibidoPor: 'Manuel',
      },
      {
        id: 5,
        currier: 'Anne',
        descripcion: 'Lee',
        fechaRecibido: '2016-12-06 14:38:38',
        recibidoPor: 'Teresa',
      },
      {
        id: 5,
        currier: 'Anne',
        descripcion: 'Lee',
        fechaRecibido: '2016-12-06 14:38:38',
        recibidoPor: 'Teresa',
      },
      {
        id: 5,
        currier: 'Anne',
        descripcion: 'Lee',
        fechaRecibido: '2016-12-06 14:38:38',
        recibidoPor: 'Teresa',
      },
    ];
    return {
      dataCarga,
      data,
      selected: dataCarga[1],

      fieldsCarga: [
        {
          field: 'id',
          label: 'Nº Rastreo',
          numeric: true,
        },
      ],
      columnCarga: [
        {
          field: 'id',
          label: 'Nº Rastreo',
          numeric: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Aquí estilos del componente */
</style>
