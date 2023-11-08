<template>
  <v-toolbar>
    <v-tabs>
      <span><v-btn @click="onClick('home')">홈</v-btn></span>
      <span><v-btn @click="onClick('sport')">스포츠</v-btn></span>
      <span><v-btn @click="onClick('entertainments')">연애</v-btn></span>
    </v-tabs>
  </v-toolbar>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const onClick = (target) => {
  switch (target) {
    case "home":
      router.push("/");
      break;
    case "sport":
      router.push({ name: "sport", params: { ctgy: "spt001" } });
    default:
      break;
  }
};
</script>
