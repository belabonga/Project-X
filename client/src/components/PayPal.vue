<template>
    <div>
      <!-- <div v-if="!paidFor">
        <h1>Buy this Lamp - ${{ product.price }} OBO</h1>
  
        <p>{{ product.description }}</p>
  
      </div>
  
      <div v-if="paidFor">
        <h1>Noice, you bought a beautiful lamp!</h1>
      </div> -->
  
      <div ref="paypal"></div>
    </div>
  </template>
  
  <script>
  // import image from "../assets/lamp.png"
  import {useMainStore} from '../stores/MainStore'
  import {mapActions} from 'pinia'
  export default {
    name: "paypal button",
    
    data: function() {
      return {
        // loaded: false,
        // paidFor: false,
        // product: {
        //   price: 5,
        //   description: "leg lamp from that one movie",
        //   img: "./assets/lamp.jpg"
        // }
        price: 5
      };
    },
    props: ['product'],

    // jangan lupa lempar proppsssssssss
    mounted: function() {
      const script = document.createElement("script");
      script.src =
        `https://www.paypal.com/sdk/js?client-id=ATd2bEsxRwcHj4s99bQ2DFvBRLaUznRujsz3tdnQzw8OsqAydODygAKhVT2p_GKHhKzajiEYLRrf3rFF`;
      script.addEventListener("load", this.setLoaded);
      document.body.appendChild(script);
    },
    methods: {
        ...mapActions(useMainStore, ['addTrans']),
      setLoaded: function() {
        this.loaded = true;
        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: this.product.name,
                    amount: {
                      currency_code: "USD",
                      value: this.price
                    }
                  }
                ]
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
                console.log(this.product, '<<<<<<<<<<<');
              this.addTrans({
                name: this.product.name,
                cover: this.product.cover.url,
                price: this.price 
                })

                // swal success
                // navigate ke halaman transaction

              console.log(order);
            },
            onError: err => {
              console.log(err);
            }
          })
          .render(this.$refs.paypal);
      }
    }
  };
  </script>