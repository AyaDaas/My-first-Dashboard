<template>
    <div class="form-group d-flex mb-3 fs-6  ">
        <input type="checkbox" class="switcher-input" />
        <label class="mx-2" for="exampleInputEmail1">{{ label }}</label>
    </div>
</template>


<script setup >
const props = defineProps({
    label: String,
})
</script>