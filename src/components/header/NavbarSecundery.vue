<template>
    <div class="sidebar-header container p-3">
        <div class="header-sidebar container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB5_fgFujqsKyYMTe3r5dk7S9OkdoDq9lTgQ&usqp=CAU"
                alt="User Avatar" class="avatar" />
            <h4 class="mt-3 m-3 text-dark">Aya Daas</h4>
        </div>

        <div class="sidebar-items">
            <div class="sidebar-group">
                <ul class="mt-5">
                    <RouterLink :to="item.path" :class="{ 'active': item.active }" v-for="item in items" :key="item.id"
                        @click="onItemClick(item)" class="sidebar-item">
                        <li class="router" :class="{ 'active': item.active }">{{ item.text }}
                        </li>
                    </RouterLink>
                </ul>
            </div>
        </div>

        <div class="footer-sidebar">
            <p class="log" @click="logout">Logout</p>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import sidebarItems from './sidebarItems.json';
import { RouterLink } from 'vue-router';

const items = ref(sidebarItems);

const onItemClick = (item) => {
    // Reset the 'active' property for all items
    items.value.forEach((i) => {
        i.active = false;
    });

    // Set the 'active' property for the clicked item
    item.active = true;
};

const logout = () => {
    // Implement your logout logic here
    console.log('Logged out');
};
</script>
  
<style scoped>
.sidebar-items ul {
    list-style-type: none;
    padding-left: 0;
}

.sidebar-header {
    position: relative;
    height: 90vh;
}

.sidebar-group h5,
.sidebar-item {
    margin: 0;
    padding: 0;
    color: #333;
}

.sidebar-divider {
    border-top: 1px solid #ccc;
    width: 100%;
}

.footer-sidebar {
    bottom: 0px;
    right: 50%;
    position: absolute;
}

.log {
    margin: 2px;
    text-align: center;
    font-size: 15px;
    color: #051364;
    width: 100%;
    padding: 1px;
    align-items: center;
    cursor: pointer;
}

.logout-button,
.settings-button {
    background: none;
    border: none;
    cursor: pointer;
    color: #0074e4;
}

.logout-button:hover,
.settings-button:hover {
    text-decoration: underline;
}

.header-sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

.avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
}

.sidebar-item {
    margin: 0px;

}

.router:hover {
    background-color: #f0f0f1;
    transition: all 0.2s ease-in;
    cursor: pointer;
}

.router {
    margin: 0px;
    padding: 8px;
    font-size: 13px;
    color: #a29e9e;
    text-align: center;
    border-bottom: 1px solid rgb(234, 233, 233);
}

.active {
    color: #033768;
    background-color: #f0f0f1;

}
</style>
  