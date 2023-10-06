<template>
    <div class="container ">
        <apexchart ref="chart" height="350" type="line" :options="chartOptions" :series="chartSeries" />
    </div>
</template>
  
<script>
import VueApexCharts from "vue3-apexcharts"; // for Vue 3
// import VueApexCharts from "vue-apexcharts"; // for Vue 2

export default {
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    height: 350,

                },

            },
            chartSeries: [
                {
                    name: "Series 1",
                    data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
                },
            ],
        };
    },
};
</script>