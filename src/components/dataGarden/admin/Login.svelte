<script lang="ts">

    export let form;

</script>


<form class="login-form" method="post">
    <h1>Data Garden Admin</h1>
    <div class="login-container">
        <div class="username input-container">
            <label class="label-field">Username</label>
            <input class="input-field" name="username" type="text" required>
        </div>
        <div class="password input-container">
            <label class="label-field">Password</label>
            <input class="input-field" name="password" type="password" required>
        </div>
        <button class="confirm-button">Logar</button>
    </div>
</form>

<style>
    .login-form {
        display: flex;
        flex-direction: column;
        margin: 5% 0 0 0;
    }

    h1 {
        text-align: center;
        color: white;
        font-weight: bold;
    }

    .login-container {
        display: flex;
        flex-direction: column;
        width: 23%;
        margin: auto;
        background-color: #555555;
        border-radius: 10px;
        box-shadow:2px 2px 2px black;
    }

    .input-container {
        display: flex;
        flex-direction: column;
        margin: 4% auto 4% auto;
    }

    .label-field {
        font-size: 20px;
        text-align: center;
        margin: 3% auto auto auto;
        color: white;
    }

    .input-field {
        border-radius: 5px;
        border-color: transparent;
        background-color: transparent;
        border-bottom-color: #ffffff;
        padding: 10px;
        color: white;
        text-align: center;
        font-size: 15px;
    }

    .confirm-button {
        margin: auto auto 5% auto;
        width: 30%;
        border-radius: 5px;
        border-color: transparent;
        padding: 15px;
        transition: 0.5s ease;
    }

    .confirm-button:hover {
        background-color: #969494;
    }
</style>