<template>
    <!-- Header Section -->
    <HeaderBar/>

    <!-- Router -->
    <RouterView key="$route.fullPath"></RouterView>

    <!-- Footer Section -->
    <FooterBar/>

</template>

<script>
import HeaderBar from './components/HeaderBar.vue';
import FooterBar from './components/FooterBar.vue';

export default {
    components: { HeaderBar, FooterBar }
}
</script>