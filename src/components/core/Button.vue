<script>
export default {
    name: "Button",

    props: {
        title: {
            type: String,
            default: null,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        variant: {
            default: 'primary',
            validator(value) {
                // The value must match one of these strings
                return ['primary', 'gray', 'white', 'primary-outline', 'gray-outline'].includes(value)
            }
        },
    },

    computed: {
        resetProps() {
            return { ...this.$attrs };
        },
    },
}
</script>

<template>
    <button class="btn flex h-[43px] justify-center items-center relative rounded-lg my-2 w-full px-4" v-bind="resetProps"
        :class="[disabled ? 'opacity-50' : '', variant]" :disabled="disabled || loading">
        <slot name="prepend" />
        <slot name="title">
            <span class="text-sm font-medium">{{ title }}</span>
        </slot>
        <div class="flex ms-1" v-if="loading">
            <Spinner fill="#fff" classess="w-4 h-4 my-6" />
        </div>
    </button>
</template>

<style>
.primary {
    background: #05278d;
    color: #fff
}

.primary:hover {
    background: #fff;
    color: #05278d;
    border: 1px solid #05278d;

}

.gray {
    background: #efefef;
    color: #7c7c7c;
}

.gray:hover {
    background: #7c7c7c;
    color: #efefef
}

.white {
    background: #fff;
    color: #000
}

.primary-outline {
    border: 1px solid #05278d;
    background: #fff;
    color: #05278d
}

.primary-outline:hover {
    border: 1px solid #05278d;
    background: #05278d;
    color: #fff;
}

.gray-outline {
    border: 1px solid #efefef;
    background: #7c7c7c;
    color: #efefef;
}

.gray-outline:hover {
    border: 1px solid #efefef;
    background: #efefef;
    color: #7c7c7c;
}
</style>
