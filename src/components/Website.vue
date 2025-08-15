<template>
        <Header />
        <main>
            <router-view />
        </main>
        <Footer />
</template>

<script>
    import Header from './header.vue';
    import Footer from './footer.vue';
    export default {
        name: 'Website',
        components: {
            Header,
            Footer
        },
    }
</script>

<style lang="scss" scoped>

</style>