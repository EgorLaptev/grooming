import Register from "./Register.js";
import Login from "./Login.js";

export default {
    data() {
        return {
            applications: []
        }
    },
    created() {

    },
    methods: {
        fetchApplications() {
            const body = JSON.stringify({
                login: this.login,
                password: this.password
            })

            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

            // fetch('http://localhost:8080/auth', { body, headers, method: 'POST' })
            //     .then(resp => resp.json())
            //     .then(data => {
            //         console.log(data)
            //     })
        }
    },
    computed: {
        auth() {
            return !!localStorage.getItem('token')
        }
    },
    template: `
    <link rel="stylesheet" href="/assets/css/home.css">
    <section class="welcome">
        <div class="welcome__container">
        <div class="auth">
            <register-form v-if="!auth"></register-form>
            <login-form v-if="!auth"></login-form>
        </div>
        <div class="counter">
            Мы обслужили уже 0 питомцев!
        </div>
        <ul class="applications">
            <li class="applicatios__item application">
                <img src="/logo/logo_groom.png" alt="" class="application__image">
                <div class="application__info">
                    <h3 class="application__name"> Жучка </h3>
                    <span class="application__date"> 20.02.2022 </span> <br>
                    <span class="application__status"> Услуга оказана </span> <br>
                    <span class="application__type"> Тип Стрижка </span>
                
</div>
</li>   
</ul>
        
</div>
    </section>
    `,
    components: {
        'register-form': Register,
        'login-form': Login
    }
}