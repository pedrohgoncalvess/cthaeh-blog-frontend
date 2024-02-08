<script>
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    import About from "../../components/aboutMe/About.svelte";
</script>

<Header/>
<About/>
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