<template>
    <div class="form-group d-flex fs-6">
        <label class=" col-3" :for="id">{{ label }}</label>

        <input :name="name" :required="required" :v-model="modelValue" @input="updateValue" :type="type"
            class="form-control " :id="id" :placeholder="placeholder">
    </div>


    <br>
</template>
<script  >
export default {
    props: {
        id: String,
        label: String,
        required: String,
        placeholder: String,
        name: String,
        modelValue: String, // Use modelValue for two-way binding
        type: {
            type: String,
            default: 'text',
        },
    },
    methods: {
        updateValue(event) {
            this.$emit('update:modelValue', event.target.value); // Emit 'update:modelValue'
        },
    },
}

</script>
<style>
input::placeholder {
    opacity: .4;
}
</style>


