<template>
    <!-- Normal Breadcrumb Begin -->
    <section class="normal-breadcrumb set-bg" data-setbg="img/normal-breadcrumb.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="normal__breadcrumb__text">
                        <h2>Login</h2>
                        <p>Welcome to Setim.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Normal Breadcrumb End -->

    <!-- Login Section Begin -->
    <section class="login spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="login__form">
                        <h3>Login</h3>
                        <form @submit.prevent="login(credential)">
                            <!-- EMAIL -->
                            <div class="input__item">
                                <input type="text" placeholder="Email address" v-model="credential.email">
                                <span class="icon_mail"></span>
                            </div>
                            <!-- EMAIL END -->

                            <!-- PASSWORD -->
                            <div class="input__item">
                                <input type="password" placeholder="Password" v-model="credential.password">
                                <span class="icon_lock"></span>
                            </div>
                            <!-- PASSWORD END -->

                            <!-- SUBMIT -->
                            <button type="submit" class="site-btn">Login Now</button>
                            <!-- SUBMIT END -->

                        </form>
                    </div>
                </div>
                <div class="col-lg-6">

                    <!-- REGISTER BUTTON -->
                    <div class="login__register">
                        <h3>Don't Have An Account?</h3>
                        <router-link to="/register" class="primary-btn">Register Now</router-link>
                    </div>
                    <!-- REGISTER BUTTON END -->
                </div>
            </div>
            <div class="login__social">
                <div class="row d-flex justify-content-center">
                    <div class="col-lg-6">
                        <div class="login__social__links">
                            <span>or</span>
                            <ul>
                                <!-- <li><a href="#" class="facebook"><i class="fa fa-facebook"></i> Sign in With
                                Facebook</a></li> -->


                                <!-- GOOGLE LOGIN -->
                                <li><a href="#" class="google"><i class="fa fa-google"></i> Sign in With Google</a></li>
                                <!-- GOOGLE LOGIN END -->


                                <!-- <li><a href="#" class="twitter"><i class="fa fa-twitter"></i> Sign in With Twitter</a>
                                </li> -->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Login Section End -->
</template>

<script>
import { mapActions } from 'pinia';
import { useMainStore } from '../stores/MainStore';

export default {
    data() {
      return {
        credential: {
          email : '',
          password : ''
        }
      }
    },

    methods: {
    ...mapActions(useMainStore, ["login"]),
  },
}
</script>