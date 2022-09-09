export default {
    data() {
        return {
            cats: [],
            newCat: ''
        }
    },
    methods: {
        addCat() {
            const body = JSON.stringify({
                title: this.login,
            })

            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }

            fetch('http://localhost:8000/api/category/create', { body, headers, method: 'POST' });

        },
        fetchCats() {
            const body = JSON.stringify({
                title: this.login,
            })

            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }

            fetch('http://localhost:8000/api/category/create', { body, headers, method: 'POST' });


        }
    },
    created() {

    },
    template: `
        <link rel="stylesheet" href="/assets/css/admin.css">
        <section class="profile">
            <div class="profile__container container">
                <h2 class="profile__subtitle"> Заявки </h2>
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
                <h2 class="profile__subtitle"> Категории </h2>
                <ul class="applications">
                    <li class="applicatios__item application">
                        Мытьё  
        </li>   
                    <li class="applicatios__item application">
                        <input type="text" v-model="newCat" placeholder="Новая категория" @key.enter="addCat">  
        </li>   
        
        </ul>
</div>
        </section>
    `
}