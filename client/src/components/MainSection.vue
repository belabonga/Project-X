<template>
    <section class="product spad">
      <div class="container">
        <div class="row">

          <div class="col-lg-12">
            <div class="trending__product">
              <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-8">
                  <div class="section-title">
                    <h4>Browse Games</h4>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4">
                  <div class="btn__all">
                    <a href="#" class="primary-btn"
                      >View All <span class="arrow_right"></span
                    ></a>
                  </div>
                </div>
              </div>

              <div class="row">

                <!-- GAMES CARD GOES HERE -->
                <GameCard v-for="(game, i) in games" :key="i" :game="game"/>
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
</template>

<script>
import GameCard from './GameCard.vue';
import { useMainStore } from "../stores/MainStore";
import { mapActions, mapState } from "pinia";

export default {
    setup() {
        return {};
    },
    components: { GameCard },
    methods: {
    ...mapActions(useMainStore, ["getGames"]),
    },
    computed: {
      ...mapState(useMainStore, ['games']),
    },
    created() {
      this.getGames();
    },
}
</script>