<template>
    <div class="form-check ">
        <span>{{ name }}</span>
        <label class="form-check-label radio" :for="label">
            <input class="form-check-input" type="radio" name="flexRadioDefault" :checked="isChecked" @input="updateValue"
                :id="label">
            {{ label }}
        </label>
    </div>
</template>
<script>
export default {
    props: {
        label: String,
        name: String,
        modelValue: String, // Change modelValue to an array
    },
    computed: {
        id() {
            return `radio_${this._uid}`;
        },
        isChecked() {
            return this.modelValue === this.label;
        },
    },
    methods: {
        updateValue() {
            if (!this.isChecked) {
                this.$emit('update:modelValue', this.label);
            }
        },
    },
};
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