import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
import chalk from 'chalk';

const baseUrl = "http://localhost:3000";

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      isLogin: false,
      games: [],
      game : []
    };
  },
  actions: {

    //* -------------- SESSION --------------
    //? LOGIN
    async login(credential) {
      try {
        const log = await axios.post(`${baseUrl}/login`, {
          email: credential.email,
          password: credential.password,
        });

        // SET ACCESS TOKEN
        localStorage.setItem("access_token", log.data.access_token);

        // SET LOCAL USERNAME
        localStorage.setItem("username", log.data.username);

        // SET STATE
        this.isLogin = true;

        // REDIRECT HOME
        this.router.push("/");

        // SUCCESS ALERT
        Swal.fire({
          icon: "success",
          title: "Success Logged in!",
          text: `Welcome back ${log.data.username} !`,
          showConfirmButton: false,
          timer: 2000,
        });

        console.log(chalk.green("SUCCESS FROM LOGIN SESSION STORE"));
      } catch (error) {
        console.log(chalk.red("ERROR FROM LOGIN SESSION STORE : "), error);

        // ERROR ALERT
        Swal.fire({
          icon: "error",
          iconColor: "white",
          title: "Oops!",
          text: error.response,
          color: "white",
          confirmButtonText: "Try Again",
          confirmButtonColor: "red",
          background: "#2269B0",
        });
      }
    },

    //? REGISTER
    async register(credential) {
      try {
        await axios.post(`${baseUrl}/register`, {
          username: credential.username,
          email: credential.email,
          password: credential.password
        });

        // REDIRECT
        this.router.push("/login");

        // SUCCESS ALERT
        Swal.fire({
          icon: "success",
          title: `Yeay! You are registered !`,
          text: "Now you may log in to use our services",
          confirmButtonText: "Login now!",
        });

        console.log(chalk.green("SUCCESS FROM REGISTER SESSION STORE"));
      } catch (error) {
        console.log(chalk.red("ERROR FROM REGISTER SESSION STORE : "), error);

        // ERROR ALERT
        Swal.fire({
          icon: "error",
          iconColor: "white",
          title: "Oops!",
          text: error.response,
          color: "white",
          confirmButtonText: "Try Again",
          confirmButtonColor: "red",
          background: "#2269B0",
        });
      }
    },

    //? GOOGLE LOGIN
    // POST /pub/google-signin
    async handleCredentialResponse(response) {
      axios({
        url: `${baseUrl}/google-signin`,
        method: "POST",
        data: {
          access_token: response.credential,
        },
      })
        .then((res) => {
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("username", res.data.username);
          this.isLogin = true;
          this.router.push("/");

          // SWAL
          Swal.fire({
            icon: "success",
            title: "Success Logged in!",
            text: `Welcome Back ${res.data.username} !`,
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: error,
            confirmButtonText: "Try Again",
          });
        });
    },

    //? LOGOUT
    logout() {
      try {
        Swal.fire({
          title: "Are you sure?",
          text: "We will missed you!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Logout, see you!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Logged out!", "See you later!", "success");

            // LOCAL STORAGE DELETE
            localStorage.clear();

            // GOOGLE LOGOUT
            google.accounts.id.disableAutoSelect();

            // SET STATE
            this.isLogin = false;

            //REDIRECT TO LOGIN PAGE
            this.$router.push("/");
          }
        });
      } catch (error) {
        console.log(error);
      }
    },

    //* -------------- GAMES --------------
    // GET /games
    async getGames(){
        try {
            const games = await axios.get(`${baseUrl}/games`)
            this.games = games.data
            
        } catch (error) {
            console.log(error);
        }
    },

    async getOneGame(id){
        try {
            const game = await axios.get(`${baseUrl}/games/${id}`)
            this.game = game.data[0]
            
        } catch (error) {
            console.log(error);
        }
    },

    //* -------------- TRANSACTIONS --------------

    async addTrans(data){
        try {
            await axios.post(`${baseUrl}/transactions`, {
                ...data
            })
        } catch (error) {
            console.log(error);
        }
    }


  },
});
