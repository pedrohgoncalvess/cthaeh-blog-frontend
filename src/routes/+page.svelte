<script lang="ts">
    import Header from "../components/Header.svelte";
    import Body from "../components/home/Apresentation.svelte";
    import Footer from "../components/Footer.svelte";
</script>

<Header/>
<Body/>
<Footer/>

<style>

    :global(body, html) {
        padding: 0;
        margin: 0;
        font-family: "Fira Code", sans-serif;
        background-color: #424242;
        height: 100vh;
    }
</style>
