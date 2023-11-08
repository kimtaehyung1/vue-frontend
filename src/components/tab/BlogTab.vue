<template>
  <v-toolbar>
    <v-tabs>
      <span><v-btn @click="onClick('home')">홈</v-btn></span>
      <span><v-btn @click="onClick('neighbor')">이웃</v-btn></span>
      <span><v-btn @click="onClick('')">구독</v-btn></span>
      <span><v-btn @click="onClick('')">인기글</v-btn></span>
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
      router.push("/");
      break;
    case "neighbor":
      router.push("neighbor");
    default:
      break;
  }
};
</script>
