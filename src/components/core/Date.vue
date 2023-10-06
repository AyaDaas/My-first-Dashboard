<template>
    <div class="form-group d-flex   fs-6  ">
        <label class=" col-3" for="exampleInputEmail1">{{ label }}</label>

        <input type="date" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
</template>
<script setup>
const props = defineProps({
    label: String
})
</script>