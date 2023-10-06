
<template>
    <div class="form-group d-flex mb-3 fs-6  ">
        <label class=" col-3" for="exampleInputEmail1">{{ label }}</label>
        <select v-if="links" class="form-select" aria-label="Default select example">
            <option v-for="link in links" :key="link" value="link">{{ link }}</option>
        </select>


        <select v-else :value="value" @input="$emit('input', $event.target.value)" class="form-select "
            aria-label="Default select example">
            <slot></slot>
        </select>


    </div>
</template>
<script setup>
const props = defineProps({
    label: String,
    links: Array,
    option: String,
    value: String,

    selectedOption: {
        type: String,
        required: false,
    },



})

</script>