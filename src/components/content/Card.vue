<template>
    <div class="mt-2  mb-3">
        <div :class="[hight ? 'hight' : '']" class="card p-3 ">
            <div class=" name  mx-3">
                <slot name="header"></slot>
                <hr v-if="dividerHeaderCard" class="dividerHeader ">
            </div>
            <div class="p-">
                <slot name="body"></slot>
            </div>
            <div>
                <hr v-if="dividerFooter" class="dividerFooter  ">

                <slot name="footer"></slot>
            </div>


        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    dividerHeaderCard: Boolean,
    dividerFooter: Boolean,
    hight: Boolean
})
</script>
<style>
.hight {
    height: 360px;
}
</style>