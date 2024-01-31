<script lang="ts">
    // Import markdown conversion library
    import { marked } from 'marked'
    import HeaderAdmin from "../HeaderAdmin.svelte";

    // Declare a variable to store the markdown data
    let markdown = ""
    let review = false
    let articleTitle = ""
    let articleDesc = ""

    function changeVisualization(state:boolean) {
        review = state
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
                        <input placeholder="Article title here..." required bind:value={articleTitle} type="text" class="input-form">
                        <input placeholder="Article description here..." bind:value={articleDesc} required type="text" class="input-form">
                    </div>
                    <textarea bind:value={markdown} class="article-text-area" placeholder="Write your article here." required></textarea>
                </div>
            </div>
        {:else}
            <div class="preview-visu">
                <h1>{articleTitle}</h1>
                <h2>{articleDesc}</h2>
                <div class="preview-container">{@html marked(markdown)}</div>
            </div>
        {/if}
    </div>
    </div>
</body>


<style>
    .main-container {
        display: flex;
        flex-direction: column;
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
        margin: auto;
        width: 10%;
        justify-content: left;
    }

    .button-change {
        color: white;
        border-radius: 3px;
        padding: 10px;
        width: 80%;
        background-color: #838383;
    }

    .edit-container {
        display: flex;
        background-color: #bdbdbd;
    }

    .edit-article {
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: auto;
        background-color: #bdbdbd;
    }

    .input-form {
        width: 100%;
        border: none;
        padding: 15px 0 15px 0;
        font-size: 25px;
    }

    .preview-container, .article-text-area {
        width: 100%;
        margin: 5% auto auto auto;
        height: 80vh;
        background-color: white;
        border: none;
        padding: 0;
        font-family: "Fira Code", sans-serif;
        font-size: 25px;
    }

    .preview-visu {
        display: flex;
        flex-direction: column;
        text-align: center;
    }


</style>