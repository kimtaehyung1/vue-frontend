<template>
  <div
    style="
      margin-top: 5px;
      margin-bottom: 5px;
      padding-right: 10px;
      text-align: left;
      font-family: none;
      font-weight: bold;
    "
  >
    <v-label style="display: flex; font-weight: 800; font-size: 18px"
      >스포츠 NOW</v-label
    >
  </div>
  <div
    style="
      text-align: left;
      font-family: none;
      font-weight: bold;
      margin-right: 10px;
      margin-left: 10px;
    "
  >
    <div v-for="news in headlineNews" :key="news.id" @click="more(news.id)">
      <span style="display: inline-flex">
        <v-img
          :src="news.imgPath1"
          width="100"
          height="80"
          style="object-fit: fill"
        ></v-img>

        <v-card-text
          style="font-weight: bold; text-align: left; padding: 5px 0px 0px 10px"
        >
          <span class="text">
            {{ news.title }}
          </span>
          <span style="font-size: 10px; font-weight: 600">
            {{ `${news.company}-${beforeMinute}분 전` }}
          </span>
        </v-card-text>
      </span>
    </div>
  </div>

  <!-- <SportNews v-model="sportRef" /> -->
  <Footer />
</template>

<style>
.text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.v-card-text:hover {
  text-decoration: underline;
}
</style>
<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { sportStore } from "@/stores/sport";
import { storeToRefs } from "pinia";

import Footer from "@/views/layout/Footer.vue";

const { dtlSportNews } = sportStore();
const { headlineNews } = storeToRefs(sportStore());

const router = useRouter();
const route = useRoute();
const date = ref();
const beforeMinute = ref();
const cDate = new Date();
const sportRef = ref(false);

const pDate = new Date(cDate.getTime() - 1000000);
const beetweenTime = ref(cDate.getTime() - pDate.getTime());

onMounted(() => {
  date.value = cDate.toJSON().slice(5, 10).replace(/-/g, ".");
  beetweenTime.value = Math.floor(beetweenTime.value / 1000 / 60);

  if (beetweenTime.value < 60) {
    beforeMinute.value = beetweenTime.value;
  }
});

const more = (ele) => {
  console.log("11");
  router.push("sportNews");
  dtlSportNews(ele);
};
</script>
