<header>
    <div class="main-container-header">
        <ul class="container-list-section">
            <li><a href="/" class="section-header">Home</a></li>
            <li><a href="/data-garden" class="section-header">Data garden</a></li>
            <li><a href="/about-me" class="section-header">About me</a></li>
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