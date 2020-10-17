<template>
  <div id="app">
    <Spreadsheet :rows="currencies" :keys="keys"/>
  </div>
</template>

<script>
import Spreadsheet from './components/Spreadsheet.vue'

const currencies = [
    {code: 'EUR', currency: 'Euro', level:	0.9033, color: 'green' },
    {code: 'JPY', currency: 'Japanese Yen	1', level:24.387, color: 'green' },
    {code: 'GBP', currency: 'Pound Sterling', level:	0.6396, color: 'green' },
    {code: 'CHF', currency: 'Swiss Franc', level:	0.9775, color: 'green' },
    {code: 'CAD', currency: 'Canadian Dollar', level:	1.3097, color: 'green' },
    {code: 'AUD', currency: 'Australian Dollar', level:	1.3589, color: 'green' },
    {code: 'NZD', currency: 'New Zealand Dollar', level:	1.5218, color: 'green' },
]

const keys = ['code','currency','level','color']

export default {
  name: 'app',
  components: {
    Spreadsheet
  },
  data() {
      return {
          currencies,
          keys
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
