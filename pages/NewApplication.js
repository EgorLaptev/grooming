export default {
    data() {
        return {
            name: null,
            description: null,
            type: 'haircut',
            file: null
        }
    },
    methods: {
        login() {

            const body = JSON.stringify({
                login: this.login,
                password: this.password,
            })

            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }

            fetch('http://localhost:8000/api/request/create', { body, headers, method: 'POST' })
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                })

        }
    },
    template: `
        <link rel="stylesheet" href="/assets/css/new-application.css">
        <section class="login">
            <div class="login__container container">
                <h1 class="login__title"> Заявка </h1>
                <form action="" class="login__form" @submit.prevent="login">
                    <input v-model="name" type="text" class="login__input" placeholder="Кличка">
                    <input v-model="description" type="text" class="login__input" placeholder="Описание работы">
                    <select v-model="type" class="login__input">
                        <option value="haircut">Срижка</option>
                        <option value="wash">Мытье</option>
                    </select>
                    <input type="file" class="login__input">
                    <input type="submit" class="login__input login__input_submit" value="Создать">
                
</form>
</div>
</section>
    `
}