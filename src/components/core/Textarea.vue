<template>
    <div class="form-group d-flex mb-3 fs-6  ">
        <label class=" col-3" for="exampleInputEmail1">{{ label }}</label>

        <textarea class="form-control" :placeholder="placeholder" :rows="rows"></textarea>
    </div>
</template>
<script setup>
const props = defineProps({
    label: String,
    placeholder: String,
    rows: String
})
</script>