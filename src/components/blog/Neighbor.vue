<template>
  <Header :ctgy="route.params.ctgy"></Header>
  <SubTab />
  <BlogTab />
  <div>이웃</div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import BlogTab from "@/components/tab/BlogTab.vue";
import Header from "@/views/Header.vue";
import SubTab from "@/components/tab/SubTab.vue";

const route = useRoute();
</script>
