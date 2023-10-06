<template>
    <div style="width: 600px; height: 500px;" class="container mt-5 ">
        <img src="https://sb-admin-pro-angular.startbootstrap.com/assets/img/illustrations/400-error-bad-request.svg">
        <div style="margin-top: 40px"></div>

        <RouterLink style="margin-left: 30%;" to="/home">
            <IconLeftArrow style="margin-right: 10px; font-weight: bold;" class=""></IconLeftArrow> Return to Home page
        </RouterLink>
    </div>
</template>
<style scoped>
body {
    background-color: white;
}

a:hover {
    color: blue;
    cursor: pointer;

}
</style>
<script setup>
import { RouterLink } from 'vue-router';
import IconLeftArrow from '../components/icons/IconLeftArrow.vue'

</script>