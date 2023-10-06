<template>
    <div class="fixed top-16 w-56 text-right">



        <Menu as="div" class="relative  inline-block text-left">
            <div>
                <MenuButton
                    class="inline-flex  MenuButton justify-center rounded-full  mx-2     text-sm font-medium text-gray   focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">

                    <img v-if="pic" class="pic" :src="pic">

                    <span class="">
                        <slot name="name"></slot>
                    </span>
                </MenuButton>
            </div>


            <MenuItems style="width: 300px; text-align:start;font-size: 14px;"
                class="menu rounded m-2 absolute right-0 mt-4 w-30 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div v-if="title" class="header">
                    <span class="mx-3  ">
                        <slot name="iconHreader"> {{ iconHreader }} </slot>
                    </span>

                    {{ title }}
                </div>
                <div v-for="( item, index ) in  options " :key="item.img" class=" ">
                    <MenuItem v-slot="{ active }">
                    <RouterLink :to="item.path">
                        <a class="d-flex mt-1 p-2  MenuItem">

                            <span :active="active" aria-hidden="true">

                                <img v-if="item.img" style="width:50px; " class="mt-2 mx-3 rounded-circle  "
                                    :src="item.img">
                                <img v-if="item.icon" style="width:20px; " class=" mx-3  " :src="item.icon">
                            </span>
                            <span class="  "> {{ item.option }}</span>

                        </a>

                    </RouterLink>

                    </MenuItem>
                    <hr v-if="index < options.length - 1" class=" border-gray-200">

                </div>
            </MenuItems>
        </Menu>
    </div>
</template>
  
<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { RouterLink } from 'vue-router';
const props = defineProps({
    name: String,
    icon: Array,
    options: Array,
    iconHreader: String,
    title: String,
    pic: String


})
</script>
<style scoped>
.menuitem {
    z-index: 2024;

}

.MenuItem:hover {
    color: blue;
}

.rounded-full {
    border-radius: 50%;

}

.text-gray {
    color: rgb(151, 151, 151);
    border: 0;
    height: 32px;
    width: 30px;
    background-color: white;

}

.menu {
    position: absolute;
    right: 0;

}



a {
    text-decoration: none;
    color: rgb(109, 109, 107);
}

.header {
    background-color: rgb(25, 111, 223);
    height: 40px;
    padding: 8px;
    font-weight: bold;
    font-size: 13px;
    color: white;
    border-top: 1px;
    border-start-start-radius: 2px
}

.border-gray-200 {
    border-color: #d6d4d4;
}

.pic {
    height: 30px;
    width: 30px;
    border-radius: 50%;
}

.MenuButton:hover {
    background-color: rgb(236, 238, 238);
    color: black;
}
</style>
  