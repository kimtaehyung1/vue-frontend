<template>
  <div>
    <v-toolbar>
      <v-tabs>
        <span><v-btn @click="onClick('home')">Home</v-btn></span>
        <span><v-btn @click="onClick('sport')">Sport</v-btn></span>
        <span><v-btn @click="onClick('blog')">Blog</v-btn></span>
      </v-tabs>
    </v-toolbar>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const onClick = (value) => {
  switch (value) {
    case "home":
      router.push("/");
      break;
    case "sport":
      router.push({ name: "sport", params: { ctgy: "spt001" } });
      break;
    case "blog":
      router.push({ name: "blog", params: { ctgy: "blg001" } });
      break;

    default:
      break;
  }
};
</script>
