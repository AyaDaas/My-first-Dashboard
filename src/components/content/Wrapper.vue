<template>
    <Card>
        <template #header>
            <div class="name">
                <slot name="header"></slot>

            </div>
            <hr v-if="dividerHeader" class="dividerHeader  ">


        </template>
        <template #body>
            <slot name="body"></slot>

        </template>
        <template #footer>
            <hr v-if="dividerFooter" class="dividerFooter  ">

            <slot name="footer"></slot>

        </template>
    </Card>
</template>
<script setup>
const props = defineProps({
    dividerHeader: Boolean,
    dividerFooter: Boolean
})
</script>
<style>
.dividerHeader {
    color: #073ad2;
    opacity: .6px;

}

.dividerFooter {
    color: #c4c5ca;
    opacity: .6px;
}

.name {
    font-size: 14px;
    font-weight: bold;
    color: #05278d;
    opacity: .9;
    padding: 2px;
}
</style>