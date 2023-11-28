<template>
  <v-toolbar>
    <v-tabs>
      <span><v-btn @click="onClick('home')">홈</v-btn></span>
      <span><v-btn @click="onClick('neighbor')">이웃</v-btn></span>
      <span><v-btn @click="onClick('blogHots')">인기글</v-btn></span>
    </v-tabs>
  </v-toolbar>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { sportStore } from "@/stores/sport";
import { storeToRefs } from "pinia";

const { blogTabData } = storeToRefs(sportStore());

const router = useRouter();

const onClick = (target) => {
  switch (target) {
    case "home":
      router.back();
      break;
    case "neighbor":
      router.push({
        name: "/blog/blg001/neighbor",
        params: { ctgy: "blg001" },
      });
      break;
    case "blogHots":
      router.push({
        name: "/blog/blg001/blogHots",
        params: { ctgy: "blg001" },
      });
      break;

    default:
      break;
  }
};
</script>
