<template>
  <Header></Header>
  <v-form @submit.prevent="submit" ref="form">
    <v-card max-width="400" class="mx-auto cards">
      <v-carousel height="300" hide-delimiters>
        <v-carousel-item v-for="(item, i) in items">
          <v-row class="block">
            <img :src="item.src" class="img" />
          </v-row>
          <v-row class="block">
            <v-card-title
              >이미지제목

              <button @click="charPopup">
                <v-icon
                  icon="mdi-pencil-box-outline"
                  style="font-size: 25px; padding-bottom: 5px"
                >
                </v-icon>
              </button>
            </v-card-title>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-card>
    <v-card style="height: 434px">
      <v-row style="padding-top: 20%; display: flex">
        <v-card-title class="paddingL" style="font-size: 15px">
          닉네임
        </v-card-title>
        <v-text-field
          class="paddingR"
          v-model="nickNm"
          single-line
        ></v-text-field>
      </v-row>

      <v-row>
        <v-col></v-col>
        <v-col class="colPadLeft">
          <v-btn>저장</v-btn>
        </v-col>
        <v-col class="colPadRight">
          <v-btn @click="onClose">취소</v-btn>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-card>
  </v-form>

  <DetailCharPopup v-model="charRef" @onClose="close" />
</template>

<style scoped>
.cards {
  box-shadow: 0px 0px 0px 0px
      var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0)),
    0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0)),
    0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0));
}
.img {
  padding-top: 25%;
  width: 55%;
}
.block {
  display: block;
}
.paddingL {
  padding-left: 15%;
}
.paddingR {
  padding-right: 20%;
}
.colPadLeft {
  padding-left: 15px;
}
.colPadRight {
  padding-left: 15px;
}
</style>

<script setup>
import { ref } from "vue";
import Header from "@/views/Header.vue";
import { useRouter } from "vue-router";
import DetailCharPopup from "@/components/popup/character/DetailCharPopup.vue";

const router = useRouter();
const nickNm = ref();
const form = ref();
const charRef = ref(false);

const submit = () => {
  let params = {
    nickNm: nickNm.value,
  };

  // 저장
};

const charPopup = () => {
  open();
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

const open = () => {
  charRef.value = true;
};
const close = () => {
  charRef.value = false;
};

function onClose() {
  router.back();
}
</script>
