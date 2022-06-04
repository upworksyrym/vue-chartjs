<template>
  <div>
    <div>
      <canvas id="sales-chart"/>
    </div>
  </div>
</template>
<script>
import {Chart, CategoryScale, LinearScale, BarController, BarElement, Title, Legend} from 'chart.js'
import salesData from '../data/sales-data'

export default {
  name: 'SalesChart',
  data() {
    return {salesData: salesData}
  },
  mounted() {
    const ctx = document.getElementById('sales-chart');
    Chart.register(CategoryScale, LinearScale, BarController, BarElement, Title, Legend);
    new Chart(ctx, this.salesData);
  }
}
</script>
