<template>
    <div>
        <Loading v-if="isLoading"></Loading>

        <div class="header">
            <h4 class="p-5  text-light">Dashboard Admin</h4>

            <h4 class="p-5  text-light">Dashboard Admin</h4>
        </div>
        <div class="container-fluid">
            <div class="container-fluid d-flex row ">
                <div class="col-md-12 col-lg-12 col-xl-4 col-sm-12 col-xs-12 topRise">
                    <SmallCard title="Powerfull" description="Lorem  quaerat ut labore obcaecati eveniet autem dicta esse."
                        pic="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTaHRlK6CMYumdDRThJ0gjdwYugGTfGUOVDjvks7Mh8x1VzIfAd"
                        icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR26pI44pJ64MKX6i85nE4RugeIOyXVCIouIw&usqp=CAU">
                    </SmallCard>
                </div>
                <div class="col-md-12 col-lg-12 col-xl-4 col-sm-12 col-xs-12 topRise">
                    <SmallCard description="Lorem ipsum ut labore obcaecati eveniet autem dicta esse."
                        pic="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRr0pHPY3DHlIFVT9w6bBP_4w4kd4IiBFuUg4b-_z5Ly8udwuy_"
                        title="Pages"
                        icon="data:image/png;base64,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 ">
                    </SmallCard>
                </div>

                <div class="col-md-12 col-lg-12 col-xl-4 col-sm-12 col-xs-12 topRise">
                    <SmallCard description="Lorem at ut labore obcaecati eveniet autem dicta esse."
                        pic="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTLB_ZyJF0kEzQEluEnav61izrfEysG4CktUIYs6I_k0MpRuQ8d"
                        title="Layouts"
                        icon="data:image/png;base64,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">
                    </SmallCard>
                </div>
            </div>
        </div>

        <div class="content  ">
            <Wrapper>
                <template #body>
                    <Tabs :titles="['Overview', 'Activities']">
                        <!-- Tab 1 content -->
                        <template v-slot:tab-content-1>
                            <div class="d-flex row ">
                                <div class="col-md-6">
                                    <Chart6></Chart6>
                                </div>
                                <div class="col-md-6">
                                    <Chart7></Chart7>

                                </div>

                            </div>
                        </template>
                        <!-- Tab 2 content -->
                        <template v-slot:tab-content-2>
                            <div class='h-50'>
                                <Table></Table>
                            </div>
                        </template>
                    </Tabs>
                </template>

            </Wrapper>

            <div class="d-flex row ">
                <div class="col-md-6">
                    <Card :dividerHeaderCard="true">
                        <template #header>Recent Activity</template>
                        <template #body>
                            <div style="margin-left: 10px; min-height: 380px;" class="container">
                                <div class="d-flex  ">
                                    <div class="point border-primary">
                                        <span class="line"></span>
                                    </div>
                                    <span>New order placed! Order #2912 has been successfully placed.</span>
                                </div>
                                <div class="d-flex mt-4">
                                    <div class="point border-dark">
                                        <span class="line"></span>
                                    </div>
                                    <span>Your weekly report has been generated and is ready to view.
                                    </span>
                                </div>
                                <div class="d-flex mt-4">
                                    <div class="point border-success">
                                        <span class="line"></span>
                                    </div>
                                    <span>
                                        New user Valerie Luna has registered</span>
                                </div>
                                <div class="d-flex mt-4">
                                    <div class="point border-warning">
                                        <span class="line"></span>
                                    </div>
                                    <span>Server activity monitor alert</span>
                                </div>
                                <div class="d-flex mt-4">
                                    <div class="point border-danger">
                                        <span class="line"></span>
                                    </div>
                                    <span>Details for Marketing and Planning Meeting have been updated.</span>
                                </div>
                                <div class="d-flex mt-4">
                                    <div class="point border-info">
                                        <span class="line"></span>
                                    </div>
                                    <span>New order placed! Order #2910 has been successfully placed.</span>
                                </div>
                                <div class="d-flex mt-4">
                                    <div class="point border-secondary">
                                    </div>
                                    <span>New order placed! Order #2911 has been successfully placed.
                                    </span>
                                </div>
                            </div>



                        </template>
                    </Card>
                </div>
                <div class="col-md-6">
                    <Card :dividerHeaderCard="true">
                        <template #header> Traffic Sources</template>
                        <template #body>
                            <div style="min-height: 380px;">
                                <Chart8></Chart8>

                            </div>

                        </template>

                    </Card>
                </div>

            </div>

            <Wrapper :dividerHeader="true">
                <template #header>Projects</template>
                <template #body>
                    <div class="pro">
                        <div class="m-3">
                            <span>Server Setup</span>
                            <div class="progress ">
                                <div class="progress-bar  bg-" style="width: 34%" role="progressbar" aria-valuenow="0"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div class="m-3">
                            <span>Database Migration</span>
                            <div class="progress ">
                                <div class="progress-bar  bg-success" style="width: 50%" role="progressbar"
                                    aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="m-3">
                            <span>Version Release</span>
                            <div class="progress ">
                                <div class="progress-bar  bg-warning" style="width: 23%" role="progressbar"
                                    aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="m-3 probottom">
                            <span>Product Listings</span>
                            <div class="progress ">
                                <div class="progress-bar  bg-danger" style="width: 90%" role="progressbar" aria-valuenow="0"
                                    aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>

                </template>

            </Wrapper>

        </div>
    </div>
</template>
<script setup>
import Chart7 from '../components/chart/Chart7.vue';
import Chart8 from '../components/chart/Chart8.vue';

import Chart6 from '../components/chart/Chart6.vue';
import SmallCard from '../components/content/SmallCard.vue';
import Table from '../components/content/Table.vue';
import Tabs from '../components/content/Tabs.vue';
import { ref } from 'vue';

setTimeout(() => {
    isLoading.value = false; // Stop the loading after 2 seconds
}, 500);


const isLoading = ref(true)


</script>
<style scoped> .header {
     margin-left: -20px;
     height: 200px;
     background: linear-gradient(to right, #0254a0, #0492ca);
     margin-top: -35px;

 }

 .pro {
     transform: translateY(-24px);


 }



 .topRise {
     transform: translateY(-80px);
     transition: all .1s ease;

 }

 .topRise:hover {
     transform: translateY(-90px);
     transition: all .1s ease;
     /* Adjust the values as needed */
     /* Add rounded corners for a card-like look */
     /* Add some padding to the card content */

 }

 .content {

     transform: translateY(-80px);

     margin-right: 20px;

 }

 .point {
     height: 15px;
     width: 15px;
     border-radius: 50%;
     background-color: #ffffff;
     border: 3px solid;
     margin-top: 5px;
     margin-right: 20px;
 }

 .line {
     content: "";
     display: block;
     width: 40px;
     /* Adjust the width of the line as needed */
     height: 40px;
     /* The line spans the entire height of the parent element */
     border-left: 1px dashed #bbbaba;
     margin-left: 4px;
     margin-top: 14px;
     /* Dashed line with color (#000 is black) */
 }

 span {
     font-size: 13px;
 }
</style>