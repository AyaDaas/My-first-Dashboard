<template>
    <div>
        <div class="card mb-3   mt- rr">
            <div style="min-height: 220px;" class="row g-0">

                <div class="col-md-6 col-sm-6 col-xs-6">
                    <div class="card-body">
                        <img style="width: 70px;" class="p-2" :src='icon'>
                        <span class="fs-5 fw-bold card-title">{{ title }}</span>

                        <p style="font-size: 13px; color: #616161;" class="card-text">{{ description }}</p>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-6">
                    <img style="height: 200px; width: 300px;" :src="pic" class="img-fluid rounded-start  " alt="...">
                </div>
            </div>
        </div>


    </div>
</template>
<script setup>
const { pic, title, description, icon } = defineProps({
    pic: String,
    title: String,
    description: String,
    icon: String


})

</script>
<style>
.rr:hover {
    box-shadow: 0px 12px 10px rgba(0, 0, 0, 0.2);
    transition: all .3s ease;

}

.rr {
    transition: all .4s ease;

}
</style>