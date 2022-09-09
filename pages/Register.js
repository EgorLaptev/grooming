export default {
    data() {
        return {
            fullname: null,
            login: null,
            email: null,
            password: null,
            password_confirmation: null
        }
    },
    methods: {
        signup() {

            const body = JSON.stringify({
                login: this.login,
                password_confirmation: this.password_confirmation,
                password: this.password,
                fullname: this.fullname,
                email: this.email,
            })

            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

            fetch('http://localhost:8000/api/reg', { body, headers, method: 'POST' })
                .then(resp => resp.json())
                .then(data => {
                    fetch('http://localhost:8000/api/auth', { body, headers, method: 'POST' })
                        .then(resp => resp.json())
                        .then(data => {
                            if (data.auth?.data) {
                                localStorage.setItem('token', data.auth.data)
                                window.router.push('/')
                            }
                        })
                })

        }
    },
    template: `
        <section class="login">
            <div class="login__container container">
                <h1 class="login__title"> Регистрация </h1>
                <form action="" class="login__form" @submit.prevent="signup">
                    <input required v-model="fullname" type="text" class="login__input" placeholder="ФИО">
                    <input required v-model="login" type="text" class="login__input" placeholder="Логин">
                    <input required v-model="email" type="email" class="login__input" placeholder="Почта">
                    <input required v-model="password" type="password" class="login__input" placeholder="Пароль">
                    <input required v-model="password_confirmation" type="password" class="login__input" placeholder="Повтор пароля">
                    <label for="">
                        Согласие на обработку данных
                        <input type="checkbox" class="login__checkbox" required>
</label>
                    <input type="submit" class="login__input login__input_submit" value="Зарегистрироваться">
                
</form>
</div>
</section>
    `
}