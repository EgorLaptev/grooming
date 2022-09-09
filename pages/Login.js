export default {
    data() {
        return {
            login: null,
            password: null
        }
    },
    methods: {
        signin() {

            const body = JSON.stringify({
                login: this.login,
                password: this.password
            })

            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

            fetch('http://localhost:8000/api/auth', { body, headers, method: 'POST' })
                .then(resp => resp.json())
                .then(data => {
                    if (data.auth?.data) {
                        localStorage.setItem('token', data.auth.data)
                        window.router.push('/')
                    }
                })

        }
    },
    template: `
        <link rel="stylesheet" href="/assets/css/login.css">
        <section class="login">
            <div class="login__container container">
                <h1 class="login__title"> Вход </h1>
                <form action="" class="login__form" @submit.prevent="signin">
                    <input v-model="login" type="text" class="login__input" placeholder="Логин">
                    <input v-model="password" type="password" class="login__input" placeholder="Пароль">
                    <input type="submit" class="login__input login__input_submit" value="Войти">
                
</form>
</div>
</section>
    `
}