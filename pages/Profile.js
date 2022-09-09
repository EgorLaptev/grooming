import {RequestModel} from "../models/RequestModel.js";

export default {
    template: `
        <link rel="stylesheet" href="/assets/css/profile.css">
        <section class="profile">
            <div class="profile__container container">
                <h2 class="profile__subtitle"> Мои заявки </h2>
                <ul class="applications">
                    <li class="applicatios__item application" v-for="application in applications" :key="application.id">
                        <img src="/logo/logo_groom.png" alt="" class="application__image">
                        <div class="application__info">
                            <h3 class="application__name">{{ application.pet_name }}</h3>
                            <span class="application__date"> {{ application.created_at.split('T')[0] }}</span> <br>
                            <span class="application__status"> {{ application.status == 'new' ? "Новая" : application.status == 'done' ? "Услуга оказана" : "Данные в обработке" }} </span> <br>
                            <span class="application__type"> {{ application.category_id }} </span> <br>
                            <button class="application__delete btn" @click="remove(application.id)"> Удалить </button>
                        
        </div>
        </li>   
        </ul>
</div>
        </section>
    `,
    data() {
      return {
          applications: [],
          model: null
      }
    },
    async created() {
        this.model = new RequestModel();
        await this.model.getAll()
            .then(data => this.applications = data)
            .catch(err => console.log(err));
    },
    methods: {
        remove(id) {
            this.model.remove({ id }).then(data => {
                alert('Заявка удалена!');
            }).catch(err => {
                err.map(el => {
                    if (el == 'status_failed') {
                        alert("Можно удалять только заявки со статусом 'Новая'");
                    }
                })
            })
        },
    }
}
