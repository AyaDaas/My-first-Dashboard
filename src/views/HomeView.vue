<script setup>
import { RouterView } from 'vue-router';
import NavbarPrimary from '../components/header/NavbarPrimary.vue'
import Layout from './Layout.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Footer from '../components/footer/Footer.vue';

// Define a ref for the margin-left style
const setMarginLeft = ref('0px');

// Function to update the margin-left value
const updateMarginLeft = () => {
  const elem = document.getElementById("sidebar");
  const width = elem.offsetWidth;
  // You should set the margin-left value here
  setMarginLeft.value = `${width}px`;


};

// Call the updateMarginLeft function when the component is mounted
onMounted(() => {
  updateMarginLeft();

})

  ; onMounted(() => {
    const refreshInterval = setInterval(() => {
      updateMarginLeft();
    }, 0); // Refresh every 5 seconds (5000 milliseconds)


  });
const widthpage = window.innerWidth >= 1024
</script>

<template>
  <main>
    <NavbarPrimary></NavbarPrimary>
    <div :style="{ marginLeft: widthpage ? setMarginLeft : '0px' }" id="sidebar">
      <div style="margin-left: 20px;">
        <RouterView />
      </div>

      <Footer></Footer>

    </div>
  </main>
</template>
