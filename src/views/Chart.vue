<template>
    <div class="mb-5">
        <div class="head">
            <div class="container-fluid">
                <Wrapper :dividerHeader="true">
                    <template #header>ApexChart Column Chart</template>
                    <template #body>
                        <Chart></Chart>
                    </template>
                </Wrapper>
                <div class="d-flex row   justify-content-between align-items-center">
                    <div class="col-md-12  col-lg-6 col-sm-12">
                        <Wrapper :dividerHeader="true">
                            <template #header>ApexChart Dount Chart</template>
                            <template #body>
                                <Chart2></Chart2>
                            </template>
                        </Wrapper>
                    </div>
                    <div class="col-md-12 col-lg-6 col-sm-12">

                        <Wrapper :dividerHeader="true">

                            <template #header>ApexChart Line Chart</template>
                            <template #body>
                                <Chart4></Chart4>

                            </template>
                        </Wrapper>




                    </div>


                    <div class="container">
                        <Wrapper :dividerHeader="true">

                            <template #header>ApexChart Area Chart</template>
                            <template #body>
                                <Chart5></Chart5>
                            </template>
                        </Wrapper>
                        <Wrapper :dividerHeader="true">

                            <template #header>ApexChart Area and Column Chart</template>
                            <template #body>
                                <Chart3></Chart3>

                            </template>
                        </Wrapper>
                        <Wrapper :dividerHeader="true">

                            <template #header>ApexChart Area and Column Chart</template>
                            <template #body>
                                <Chart6></Chart6>

                            </template>
                        </Wrapper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Chart from '../components/chart/Chart.vue'
import Chart2 from '../components/chart/Chart2.vue'
import Chart3 from '../components/chart/Chart3.vue'
import Chart4 from '../components/chart/Chart4.vue';
import Chart5 from '../components/chart/Chart5.vue';
import Chart6 from '../components/chart/Chart6.vue';

</script>

<style>
.head {
    margin-right: 20px;

}
</style>