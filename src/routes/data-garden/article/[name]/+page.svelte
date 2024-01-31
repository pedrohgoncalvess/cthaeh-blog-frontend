<script lang="ts">
    // import {page} from '$app/stores';
    // const name = $page.params.name;
    import {selectedArticle} from "../../../../stores/main.js"
    import Header from "../../../../components/Header.svelte";

    const data = $selectedArticle
</script>
<Header/>

{#if data}
    <h1>Product {data.text_pt} details</h1>
{/if}