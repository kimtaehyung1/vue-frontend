<template>
  <v-toolbar>
    <v-tabs>
      <span v-for="ele in subMenu">
        <v-btn @click="onClick(ele)"> {{ ele }}</v-btn>
      </span>
    </v-tabs>
  </v-toolbar>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { sportStore } from "@/stores/sport";
import { computed } from "vue";

const router = useRouter();
const { sportTabData } = storeToRefs(sportStore());

const subMenu = computed(() => sportTabData.value.subMenu.split("/"));

const onClick = (target) => {
  console.log("target", target);
  switch (target) {
    case "홈":
      router.push("/");
      break;
    case "해외축구":
      router.push({ name: "sport", params: { ctgy: "spt001" } });
    default:
      break;
  }
};
</script>
