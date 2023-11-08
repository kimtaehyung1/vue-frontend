<template>
  <Header :ctgy="route.params.ctgy"></Header>
  <SubTab />
  <BlogTab />
  <div>blog</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import BlogTab from "@/components/tab/BlogTab.vue";
import Header from "@/views/Header.vue";
import SubTab from "@/components/tab/SubTab.vue";

const route = useRoute();
</script>
