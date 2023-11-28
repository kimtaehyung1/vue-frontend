<template>
  <v-dialog width="600" persistent>
    <v-form @submit.prevent="submit" ref="form">
      <v-card max-width="400" class="mx-auto cards">
        <v-carousel height="300" hide-delimiters>
          <v-carousel-item v-for="(item, i) in items">
            <v-row class="block">
              <img :src="item.src" class="img" />
            </v-row>
            <v-row class="block">
              <v-card-title>상세이미지제목 </v-card-title>
            </v-row>
          </v-carousel-item>
        </v-carousel>

        <v-row style="padding-top: 10%">
          <v-col>
            <button><img />dd</button>
            <button><img />dd</button>
            <button><img />dd</button>
            <button><img />dd</button>
          </v-col>
        </v-row>
        <v-row class="v-row">
          <v-col>
            <button><img />dd</button>
            <button><img />dd</button>
            <button><img />dd</button>
            <button><img />dd</button>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-btn>확인</v-btn>
          </v-col>
          <v-col>
            <v-btn @click="close">취소</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-form>
  </v-dialog>
</template>
<style scoped>
.cards {
  box-shadow: 0px 0px 0px 0px
      var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0)),
    0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0)),
    0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0));
}
.center {
  text-align: center;
}
.v-row {
  padding-bottom: 20px;
  text-align: center;
}
.block {
  display: block;
}
.img {
  padding-top: 25%;
  width: 55%;
}
</style>

<script setup>
import { ref } from "vue";
import Header from "@/views/Header.vue";

const nickNm = ref();
const form = ref();

const submit = () => {
  let params = {
    nickNm: nickNm.value,
  };

  // 저장
};

const items = ref([
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
  },
  {
    src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
  },
]);

const emits = defineEmits(["onClose"]);

const close = () => {
  emits("onClose");
};
</script>
