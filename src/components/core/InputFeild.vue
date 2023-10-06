<template>
    <div class="form-group d-flex   fs-6  ">
        <label class=" col-3" for="exampleInputEmail1">{{ label }}</label>

        <input :type="type" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"
            :placeholder="placeholder">
    </div>
    <br>
</template>
<script setup>
const props = defineProps({
    label: String,
    placeholder: String,
    type: {
        type: String,
        default: 'text'

    }

})
</script>
<style>
input::placeholder {
    opacity: .4;
}
</style>