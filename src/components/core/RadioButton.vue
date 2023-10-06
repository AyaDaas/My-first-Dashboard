<template>
    <div class="form-check ">
        <span>{{ name }}</span>
        <label class="form-check-label radio" :for="label">
            <input class="form-check-input" type="radio" name="flexRadioDefault" :id="label">
            {{ label }}
        </label>
    </div>
</template>
<script setup>
const props = defineProps({
    label: String,
    name: String

})
</script>
<style>
.radio {
    background-color: #f9f9f9;
    border-radius: 4px;
    margin: 8px;
    padding: 20px 40px;
    width: 100%;
    transform: translateX(-30px);
    border: 1px solid darkblue;
    border-style: dotted;
}
</style>