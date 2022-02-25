<template>
  <b-card
      v-if="data"
      no-body
      class="card-statistics"
  >
    <b-card-header>
      <b-card-title>数据1</b-card-title>
      <b-card-text class="font-small-2 mr-25 mb-0">

      </b-card-text>
    </b-card-header>
    <b-card-body class="statistics-body">
      <b-row>

      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard,
  BCardHeader,
  BCardTitle,
  BCardText,
  BCardBody,
  BRow,
  BCol,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardTitle,
    BCardText,
    BCardBody,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
