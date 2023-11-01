<template></template>

<script setup>
import Home from "@/views/Home.vue";
import Sport from "@/views/Sport.vue";
import { ref } from "vue";
import { sportStore } from "@/stores/sport";
import { storeToRefs } from "pinia";

const { tabs } = storeToRefs(sportStore());
const model = ref(null);
</script>
