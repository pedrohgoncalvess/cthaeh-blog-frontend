<script>
    import Me from "../../assets/literally-me.png"
</script>
<main>
    <div class="main-container-apresentation">
        <div class="literally-me">
            <img title="Yep, its me" class="me" src={Me} alt="Me">
            <div class="message">Mensagem de Exemplo</div>
        </div>
        <div class="resume-container">
            <div class="resume">
                <h1>Pedro H. Gonçalves</h1>
                <h2>Data engineer, analyst and scientist.</h2>
                <h3>Python & Scala dev</h3>
            </div>
            <div class="social-midias">
                <a href="https://github.com/pedrohgoncalvess"><i class="fa-brands fa-github social-icon"></i></a>
                <a href="https://twitter.com/PedroHGonsalves"><i class="fa-brands fa-twitter social-icon"></i></a>
            </div>
        </div>
    </div>
</main>

<style>
    .main-container-apresentation {
        display: flex;
        flex-direction: column;
    }

    .literally-me {
        display: flex;
        margin: 6% auto 0 auto;
    }

    .me {
        margin: auto;
        border-radius: 100%;
        width: 65%;
    }

    .message {
        display: none;
        background-color: #333;
        color: #ec0404;
        padding: 10px;
        border-radius: 5px;
    }

    .resume-container {
        color: white;
        margin: 1% auto;
        text-align: center;
    }

    a {
        text-decoration: none;
    }

    .social-midias {
        display: flex;
        justify-content: center;
        gap: 6%;
    }

    .social-icon {
        margin: 2% auto auto auto;
        font-size: 40px;
        color: white;
    }

    .social-icon:hover {
        color: #bdbdbd;
    }

</style>