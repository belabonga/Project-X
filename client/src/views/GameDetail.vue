<template>
  <!-- Breadcrumb Begin -->
  <div class="breadcrumb-option">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb__links">
            <router-link to="/"><i class="fa fa-home"></i> Home</router-link>
            <router-link to="/">Games</router-link>
            <!-- <span>{{game.name}}</span> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Breadcrumb End -->

  <!-- Anime Section Begin -->
  <section class="anime-details spad">
    <div class="container">
      <div class="anime__details__content">
        <div class="row">
          <div class="col-lg-3">
            <div
              class="anime__details__pic set-bg"
              data-setbg="img/anime/details-pic.jpg"
            >
              <!-- <div class="comment"><i class="fa fa-comments"></i> 11</div>
              <div class="view"><i class="fa fa-eye"></i> 9141</div> -->
            </div>
          </div>
          <div class="col-lg-9">
            <div class="anime__details__text">
              <div class="anime__details__title">
                <h3>{{game.name}}</h3>
                <span>{{game.release_dates[0].human}}</span>
              </div>
              <!-- <div class="anime__details__rating">
                <div class="rating">
                  <a href="#"><i class="fa fa-star"></i></a>
                  <a href="#"><i class="fa fa-star"></i></a>
                  <a href="#"><i class="fa fa-star"></i></a>
                  <a href="#"><i class="fa fa-star"></i></a>
                  <a href="#"><i class="fa fa-star-half-o"></i></a>
                </div>
                <span>1.029 Votes</span>
              </div> -->
              <p>
               {{game.summary}}
              </p>
              <div class="anime__details__widget">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <ul>
                      <li><span>Release Date:</span> {{game.release_dates[0].human}}</li>
                      <li><span>Genre:</span> {{game.genres[0].name}}</li>
                      <li><span>Date aired:</span> Oct 02, 2019 to ?</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="anime__details__btn">
                <PayPal :product="game" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Anime Section End -->
</template>

<script>
import { useMainStore } from "../stores/MainStore";
import { mapActions, mapState } from "pinia";
import PayPal from "../components/PayPal.vue";

export default {
  components: { PayPal },
  methods : {
    ...mapActions(useMainStore, ['getOneGame'])
  },
  computed: {
    ...mapState(useMainStore, ["game"]),
  },
  created() {
    this.getOneGame(this.$route.params.id);
  },
};
</script>
