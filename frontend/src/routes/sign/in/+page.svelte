<script lang="ts">
    import { redirect } from "@sveltejs/kit";
    import "../../styles.css";

</script>

<svelte:head>
	<title>Авторизация</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="user">
		<form class="form">
			<div class="form__group">
				<input type="text" placeholder="Логин" class="form__input" />
			</div>
			
			<div class="form__group">
				<input type="password" placeholder="Пароль" class="form__input" />
			</div>
			<div class="buttons">
                <button style="border-right: solid 2px #fff;" class="btn" type="button">Войти</button>
                <button on:click={() => document.location='up'} class="btn" type="button">Регистрация</button>
            </div>
		</form>
	</div>
</section>

<style>
	section {
        height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: linear-gradient(45deg, #49D49D 10%, #A2C7E5 90%);
	}

	.user {
		width: 90%;
		max-width: 340px;
		margin: auto;
	}

	.form {
		border-radius: 6px;
		overflow: hidden;
		opacity: 1;
        box-shadow: 0px 10px 10px 2px rgba(34, 60, 80, 0.2);
	}

	.form__input {
		display: block;
		width: 100%;
		padding: 20px;
		border: 0;
		outline: 0;
		transition: 0.3s;
	}
    .form__input:focus {
        background-color: #f7f7f7;
    }
    .buttons {
        display: flex;
        flex-direction: row;
    }
	.btn {
		display: block;
		width: 50%;
		padding: 20px;
		outline: 0;
		border: 0;
		color: white;
		background: #ABA194;
		transition: 0.3s;
	}
	.btn:hover {
		background: #b1a89e;
		cursor: pointer;
	}
</style>
