<template>
  <div>
    <div>
      <canvas id="presales-chart"/>
    </div>
  </div>
</template>
<script>
import {Chart, CategoryScale, LinearScale, BarController, BarElement, Title, Legend} from 'chart.js'
import presalesData from '../data/presales-data'

export default {
  name: 'PresalesChart',
  data() {
    return {presalesData: presalesData}
  },
  mounted() {
    const ctx = document.getElementById('presales-chart');
    Chart.register(CategoryScale, LinearScale, BarController, BarElement, Title, Legend);
    new Chart(ctx, this.presalesData);
  }
}
</script>
