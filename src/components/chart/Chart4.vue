<template>
    <div id="chart">
        <apexchart type="pie" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>
<script>
import VueApexCharts from 'vue3-apexcharts';
export default {
    components: {
        apexchart: VueApexCharts
    },
    data() {
        return {


            series: [44, 55, 13, 43, 22],
            chartOptions: {
                chart: {
                    height: "350",
                    type: 'pie',
                },
                labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },


        }
    }
}
</script>