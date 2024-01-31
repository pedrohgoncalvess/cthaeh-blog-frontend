<header>
    <div class="main-container-header">
        <ul class="container-list-section">
            <li><a href="/data-garden/admin/menu" class="section-header">Home</a></li>
            <li><a href="/data-garden/admin/menu/create-article" class="section-header">Write new article</a></li>
            <li><a href="#" class="section-header">Manage articles</a></li>
            <li><a href="#" class="section-header">Others</a></li>
        </ul>
    </div>
</header>


<style>

    header {
        background-color: #333;
        color: #fff;
        text-align: center;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
    }

    .main-container-header {
        width: 80%;
        margin: 0 auto;
    }

    .container-list-section {
        list-style-type: none;
        padding: 0;
    }

    .container-list-section li {
        display: inline-block;
        margin-right: 20px;
    }

    .section-header {
        text-decoration: none;
        color: #fff;
        padding: 5px 10px;
        border-radius: 5px;
        transition: background-color 0.3s;
        font-size: 25px;
    }

    .section-header:hover {
        background-color: #555;
    }


</style>