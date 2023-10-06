<!-- <template>
    <div>
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfaagu9_nBVRC-plF58Wn68LZyOI8Jg7JOAXVu49j62eHscFGbA0jZDIJZpi5-Fs7882M&usqp=CAU">
    </div>
</template> -->


<template>
    <div class="loading-overlay">
        <div class="spinner"></div>
        <p>Loading...</p>

    </div>
</template>
  
<style scoped>
.loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    /* Semi-transparent background */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    /* Make sure it's above other content */
}

.spinner {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top: 4px solid #3498db;
    /* Change the spinner color */
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
<script>

</script>
  