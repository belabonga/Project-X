<template>
    <!-- Header Section Begin -->
    <header class="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-2">
                    <div class="header__logo">
                        <router-link to='/'><img src="../assets/img/logo.png" alt="Setim Logo"></router-link>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="header__nav">
                        <nav class="header__menu mobile-menu">
                            <ul>
                                <!-- class="active" -->
                                <li><router-link to='/' >Homepage</router-link></li>
                                <li><router-link to="/">Games<span class="arrow_carrot-down"></span></router-link>
                                    <ul class="dropdown">
                                        <li><router-link to="/">All Games</router-link></li>
                                        <li><router-link to="/categories">Categories</router-link></li>
                                    </ul>
                                </li>
                                <li><a href="#">My Transaction</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="header__right">
                        <a href="#" class="search-switch"><span class="icon_search"></span></a>

                        <!-- LOGIN BUTTON -->
                        <router-link to='/login'><span class="icon_profile"></span></router-link>
                    </div>
                </div>
            </div>
            <div id="mobile-menu-wrap"></div>
        </div>
    </header>
    <!-- Header End -->
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>