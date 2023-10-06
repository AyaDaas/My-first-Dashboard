<template>
    <div class="container">
        <div id="chart">
            <apexchart type="radialBar" height="300" :options="chartOptions" :series="series"></apexchart>
        </div>
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
            series: [76, 67, 61, 90],
            chartOptions: {
                chart: {
                    height: 390,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        offsetY: 0,
                        startAngle: 0,
                        endAngle: 270,
                        hollow: {
                            margin: 5,
                            size: '30%',
                            background: 'transparent',
                            image: undefined,
                        },
                        dataLabels: {
                            name: {
                                show: false,
                            },
                            value: {
                                show: false,
                            }
                        }
                    }
                },
                colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
                labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
                legend: {
                    show: true,
                    floating: true,
                    fontSize: '12px',
                    position: 'left',
                    offsetX: -20,
                    offsetY: -1,
                    labels: {
                        useSeriesColors: true,
                    },
                    markers: {
                        size: 0
                    },
                    formatter: function (seriesName, opts) {
                        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                    },
                    itemMargin: {
                        vertical: 3
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            show: false
                        }
                    }
                }]
            },








        };
    },
};
</script>