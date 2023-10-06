<template>
    <div>
        <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button v-for="(tab, index) in titles" :key="index"
                    :class="{ 'nav-link': true, active: index === activeTabIndex }" :id="`nav-tab-${index}`"
                    :data-bs-toggle="index === activeTabIndex ? '' : 'tab'" :data-bs-target="`#nav-${index + 1}`"
                    type="button" role="tab" :aria-controls="`nav-${index + 1}`" :aria-selected="index === activeTabIndex"
                    @click="activeTabIndex = index">
                    {{ tab }}
                </button>
            </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
            <div v-for="(tab, index) in titles" :key="index" class="tab-pane"
                :class="{ 'fade show active': index === activeTabIndex }" :id="`nav-${index + 1}`" role="tabpanel"
                :aria-labelledby="`nav-tab-${index}`">
                <slot :name="`tab-content-${index + 1}`"></slot>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        titles: Array,
    },
    data() {
        return {
            activeTabIndex: 0,
        };
    },
};
</script>
  
<style>
.nav-link {
    margin: 1px;
    color: rgb(2, 61, 124);
}

.nav-tabs {
    margin-bottom: 20px;

}

.nav-tabs .nav-link.active {
    color: rgb(2, 98, 200);
}
</style>
  