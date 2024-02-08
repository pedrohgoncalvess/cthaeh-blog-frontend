<script>
    import HeaderAdmin from "../../../../../components/dataGarden/admin/HeaderAdmin.svelte";
    import CreatingArticle from "../../../../../components/dataGarden/admin/createArticle/CreatingArticle.svelte";
</script>

<HeaderAdmin/>
<CreatingArticle/>

<style>
    :global(body, html) {
        padding: 0;
        margin: 0;
        font-family: "Fira Code", sans-serif;
        background-color: #424242;
        height: 100vh;
    }
</style>