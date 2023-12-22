<script>
    import "../../styles.css";
</script>

<svelte:head>
	<title>Регистрация</title>
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

			<div class="form__group">
				<input type="text" placeholder="Имя" class="form__input" />
			</div>
			
			<div class="form__group">
				<input type="text" placeholder="Фамилия" class="form__input" />
			</div>
			
			<div class="form__group">
				<input type="text" placeholder="Отчество" class="form__input" />
			</div>
			
			<div class="form__group">
				<input type="text" placeholder="Возраст" class="form__input" />
			</div>
			
			<div class="form__group">
				<input type="email" placeholder="Email" class="form__input" />
			</div>
			
			<div class="form__group">
				<input type="text" placeholder="Фото" class="form__input" />
			</div>
			
			<button on:click={() => document.location='in'} class="btn" type="button">Зарегистрироваться</button>
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
		margin-top: 40px;
		border-radius: 6px;
		overflow: hidden;
		opacity: 1;
	}

	.form__input {
		display: block;
		width: 100%;
		padding: 20px;
		border: 0;
		outline: 0;
		transition: 0.3s;
	}

	.btn {
		display: block;
		width: 100%;
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
