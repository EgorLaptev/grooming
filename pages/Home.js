import Register from "./Register.js";
import Login from "./Login.js";
import {RequestModel} from "../models/RequestModel.js";
const requestModel = new RequestModel();

export default {
    data() {
        return {
            applications: [],
            counter: 0,
        }
    },
    created() {
        this.updateCounter();
        setInterval(this.updateCounter, 3000);
        requestModel.getAll().then(data => this.applications = data)
    },
    methods: {
        updateCounter() {
            requestModel.counter().then(data => {
                this.counter = data;
            }).catch(err => console.log(err));
        },
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
            Мы обслужили уже {{ counter }} питомцев!
        </div>
        <ul class="applications">
           <li class="applicatios__item application" v-for="application in applications" :key="application.id">
                <img src="/logo/logo_groom.png" alt="" class="application__image">
                <div class="application__info">
                    <h3 class="application__name">{{ application.pet_name }}</h3>
                    <span class="application__date"> {{ application.created_at.split('T')[0] }}</span> <br>
                    <span class="application__status"> {{ application.status == 'new' ? "Новая" : application.status == 'done' ? "Услуга оказана" : "Данные в обработке" }} </span> <br>
                    <span class="application__type"> {{ application.category_id }} </span> <br>
                
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
