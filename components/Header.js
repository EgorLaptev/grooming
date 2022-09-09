export default {
    data() {
        return {
            showMenu: false
        }
    },
    methods: {
        toggleMenu() {
            this.showMenu = !this.showMenu
        },
        logout() {

        }
    },
    template: `
        <header class="header">
        <div class="header__container container">
                <router-link to="/">
                    <img src="/logo/logo_groom.png" class="header__logo logo">
                </router-link>
                <button class="menu__burger" @click="toggleMenu"> Меню </button>
                <div class="menu-wrap" v-show="showMenu" @click.self="toggleMenu">
                    <ul class="header__menu menu">
                        <li class="menu__item">
                            <router-link to="/" class="menu__link"> Главная </router-link>
        </li>
                        <li class="menu__item">
                            <router-link to="/profile" class="menu__link"> Личный кабинет </router-link>
        </li>
                        <li class="menu__item">
                            <router-link to="/groom" class="menu__link"> Админ панель </router-link>
        </li>
                        <li class="menu__item">
                            <button @click="logout" class="menu__link"> Выход </button>
        </li>
        </ul>
                
</div>
        
</div>
        </header>
    `
}