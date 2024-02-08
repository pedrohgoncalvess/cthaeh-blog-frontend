<script lang="ts">
    import {onMount} from "svelte";
    import type {Article, Articles} from "../../backend/interfaces.js";
    import {selectedArticle} from "../../stores/main.js"
    import {getAllArticles} from "../../requests/get.js";


    let articles:Articles | null = null

    onMount( async () => {
        articles = await getAllArticles()
    })

    function changeSelectedArticle(newArticle: Article) {
        selectedArticle.set(newArticle)
    }

</script>
<body>
    <div class="articles-container">
        {#if articles}
            {#each articles as article}
                    <div class="article">
                        <a on:click={() => changeSelectedArticle(article)} href="{`/data-garden/article/${article.name.replaceAll(' ','-').replaceAll(',','').replaceAll('.','')}`}"><h1 class="article-name">{article.name}</h1></a>
                        <h2 class="article-description">{article.description}</h2>
                        <div class="tags-container">
                            {#each article.tags as tag}
                                <span class="article-tag">{tag}</span>
                            {/each}
                        </div>
                    </div>
            {/each}
        {/if}
    </div>
</body>

<style>
    .articles-container {
        display: flex;
        flex-direction: column;
        margin: 5% auto auto auto;
        text-align: center;
        width: 30%;
    }

    .article {
        text-align: left;
    }

    .article a {
        color: white;
    }

    .article a:hover {
        color: #d2d2d2;
    }

    .article h1 {
        color: white;
        font-weight: bold;
    }

    .tags-container {
        display: flex;
        flex-direction: row;
        gap: 1%;
    }

    .article-tag {
        border-radius: 10px;
        background-color: #555555;
        color: white;
        padding: 2px;
    }
</style>