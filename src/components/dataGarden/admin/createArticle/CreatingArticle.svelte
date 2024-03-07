<script lang="ts">
    import { marked } from 'marked'
    import HeaderAdmin from "../HeaderAdmin.svelte";
    import Tags from "svelte-tags-input";

    let markdown = ""
    let review = false
    let articleTitle = ""
    let articleDesc = ""

    function changeVisualization(state:boolean) {
        review = state
    }

    function sendNewArticle() {

    }

</script>

<body>
<div class="main-container">
    <div class="writing-article-container">
        <div class="changing-visu">
            <button on:click={() => changeVisualization(false)} class="button-change">Edit</button>
            <button on:click={() => changeVisualization(true)} class="button-change">Preview</button>
        </div>
        {#if review === false}
            <div class="edit-container">
                <div class="edit-article">
                    <div class="edit-main-infos">
                        <input placeholder="Article title here..." required bind:value={articleTitle} type="text" class="input-form title-form">
                        <input placeholder="Article description here..." bind:value={articleDesc} required type="text" class="input-form desc-form">
                        <div class="my-custom-class">
                            <Tags/>
                        </div>
                    </div>
                    <textarea bind:value={markdown} class="article-text-area" placeholder="Write your article here." required></textarea>
                </div>
            </div>
        {:else}
            <div class="preview-visu">
                <h1 class="title-art">{articleTitle}</h1>
                <h2 class="desc-art">{articleDesc}</h2>
                <div class="preview-container">{@html marked(markdown)}</div>
            </div>
        {/if}
        <div class="btns-container">
            <button class="btn-save-art save">Save draft</button>
            <button class="btn-save-art publish">Publish</button>
        </div>
    </div>
    </div>
</body>


<style>
    .main-container {
        display: flex;
        flex-direction: column;
        margin: 5% auto auto auto;
    }

    .writing-article-container {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: 3% auto auto auto;
    }

    .changing-visu {
        display: flex;
        flex-direction: row;
        width: 10%;
    }


    .button-change {
        width: 80%;
        background-color: transparent;
        border: none;
        font-size: 25px;
        color: white;
    }

    .edit-container {
        display: flex;
        border-radius: 10px;
        background-color: white;
        box-shadow: 0 10px 20px rgb(0,0,0, .5);
    }

    .edit-article {
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: auto;
    }

    .edit-main-infos {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 3% auto auto auto;
    }

    .input-form {
        width: 100%;
        border: none;
        padding: 15px 0 15px 0;
        font-size: 25px;
    }

    .input-form:focus {
        outline: none;
    }

    .title-form, .title-art {
        font-size: 45px;
        font-weight: bold;
    }

    .desc-form, .desc-art {
        font-size: 35px;
    }

    .my-custom-class :global(.svelte-tags-input-tag.focus), .my-custom-class :global(.svelte-tags-input:focus) {
        outline: none;
        border: none;
    }

    .article-text-area {
        width: 100%;
        margin: 5% auto auto auto;
        height: 60vh;
        background-color: white;
        border: none;
        padding: 0;
        font-family: "Fira Code", sans-serif;
        font-size: 25px;
    }


    .my-custom-class :global(.svelte-tags-input:focus) {
        outline: none;
        border: none;
    }
    
    .my-custom-class :global(.svelte-tags-input) {
        color: red;
        border-color: #1717f1;
    }

    .my-custom-class {
        width: 40%;
    }

    .preview-container {
        width: 95%;
        margin: 5% auto auto auto;
        height: 80vh;
        background-color: white;
        border: none;
        padding: 0;
        font-family: "Fira Code", sans-serif;
        font-size: 25px;
    }

    .article-text-area:focus {
        outline: none;
    }

    .preview-visu {
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        background-color: white;
        box-shadow: 0 10px 20px rgb(0,0,0, .5);
    }

    .preview-visu h1, h2, .preview-container {
        margin: 3% auto auto 5%;
    }


    .btns-container {
        display: flex;
        flex-direction: row;
        width: 30%;
    }

    .btn-save-art {
        border-radius: 8px;
        padding: 20px;
        font-size: 15px;
        margin: 3% 3% 5% 0;
    }

    .save {
        background-color: #3333f5;
        color: white;
        font-weight: bold;
        border: none;
        transition: .3s ease;
    }

    .publish {
        background-color: #dedddd;
        color: black;
        font-weight: bold;
        border: none;
        transition: .3s ease;
    }

    .save:hover {
        transform: scale(1.1);
        background-color: #1717f1;
    }

    .publish:hover {
        transform: scale(1.1);
        background-color: #818181;
    }


</style>