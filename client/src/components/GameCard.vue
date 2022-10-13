<template>
  <div class="col-lg-4 col-md-6 col-sm-6">
    <div class="product__item">
      <div
        class="product__item__pic set-bg"
        data-setbg="../assets/img/nocover.png"
      >
            <!-- <img :src="game.cover.url.slice(1)" />       -->
        <!-- <div class="ep">18 / 18</div> -->
        <div class="comment"><i class="fa fa-clock-o"></i> {{game.release_dates[0].human}}</div>
      </div>
      <div class="product__item__text">
        <ul>
          <li>{{game.genres[0].name}}</li>
        </ul>
        <h5>
          <router-link :to="`detail/${game.id}`">{{game.name}}</router-link>
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import { useMainStore } from "../stores/MainStore";
import { mapActions, mapState } from "pinia";

export default {
    props : ['game'],
    methods: {
    ...mapActions(useMainStore, ["getOneGame"]),
    },
}
</script>
