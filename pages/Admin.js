export default {
    data() {
        return {
            cats: [],
            newCat: '',
            requests: []
        }
    },
    methods: {
        addCat() {
            const body = JSON.stringify({
                title: this.newCat,
            })

            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }

            this.cats.push({ title: this.newCat })

            fetch('http://localhost:8000/api/category/create', { body, headers, method: 'POST' });

            this.newCat = '';

        },
        fetchCats() {
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }

            fetch('http://localhost:8000/api/categories', { headers, method: 'POST' })
                .then(data => data.json())
                .then(resp => this.cats = resp?.categories?.data)


        },
        fetchReqeusts() {
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }

            fetch('http://localhost:8000/api/requests', { headers, method: 'POST' })
                .then(data => data.json())
                .then(resp => {
                    console.log(resp);
                    this.requests = resp.requests
                })

        },
        removeCat(id) {
            const body = JSON.stringify({
                id
            })

            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }

            fetch('http://localhost:8000/api/category/remove', { body, headers, method: 'POST' });

        }
    },
    created() {
        this.fetchCats();
        this.fetchReqeusts  ();
    },
    template: `
        <link rel="stylesheet" href="/assets/css/admin.css">
        <section class="profile">
            <div class="profile__container container">
                <h2 class="profile__subtitle"> Заявки </h2>
                <ul class="applications">
                    <li class="applicatios__item application" v-for="request in requests">
                        <img src="/logo/logo_groom.png" alt="" class="application__image">
                        <div class="application__info">
                            <h3 class="application__name"> {{ request.pet_name }}  </h3>
                            <span class="application__date"> {{ request.created_at  }}  </span> <br>
                            <span class="application__status"> {{ request.status }}  </span> <br>
                            <span class="application__type"> {{ request.description }} </span>
                        
        </div>
        </li>   
        </ul>
                <h2 class="profile__subtitle"> Категории </h2>
                <ul class="applications">
                    <li class="applicatios__item application" v-for="cat in cats">
                        {{ cat.title }} 
                        <button class="remove" @click="() => removeCat(cat.id)">Удалить</button>
        </li>   
                    <li class="">
                        <input type="text" v-model="newCat" placeholder="Новая категория" class="login__input">
                        <input type="submit" value="Добавить" placeholder="Новая категория" @click="addCat" class="login__input login__input_submit">
                          
        </li>   
        
        </ul>
</div>
        </section>
    `
}