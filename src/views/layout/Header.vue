<template>
  <v-toolbar>
    <v-btn icon>
      <v-icon @click="home">mdi-menu</v-icon>
    </v-btn>
    <v-toolbar-title></v-toolbar-title>

    <v-btn icon @click="loginPopup">
      <v-icon>mdi-login</v-icon>
    </v-btn>
    <!-- <v-btn icon>
      <v-icon>mdi-logout</v-icon>
    </v-btn> -->
    <v-btn icon>
      <v-icon>mdi-alpha-m-box</v-icon>
    </v-btn>
  </v-toolbar>
  <v-toolbar>
    <v-tabs>
      <span><v-btn @click="home">Home</v-btn></span>
      <span><v-btn @click="sport">Sport</v-btn></span>
    </v-tabs>
  </v-toolbar>
  <!-- <v-toolbar>
    <v-tabs v-model="model">
      <v-tab v-for="i in tabs" :key="i.key" style="background-color: lightgray">
        <span>{{ i.value }}</span>
      </v-tab>
    </v-tabs>
  </v-toolbar> -->
  <!-- <v-window v-model="model">
    <v-window-item v-for="i in tabs" :key="i.key">
      <v-container v-if="i.key === 'tab-1'">
        <Home />
      </v-container>
      <v-container v-if="i.key === 'tab-2'">
        <Sport />
      </v-container>
    </v-window-item>
  </v-window> -->
  <LoginPopup v-model="loginRef" @onClose="onClose" />
  <router-view />
</template>

<style>
.v-container {
  padding: 5px;
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { sportStore } from "@/stores/sport";
import { storeToRefs } from "pinia";
import LoginPopup from "@/components/popup/LoginPopup.vue";
import SubTab from "@/components/tab/SubTab.vue";
import Home from "@/views/Home.vue";
import Sport from "@/views/Sport.vue";

const {} = sportStore();
const { tabs } = storeToRefs(sportStore());
const model = ref(null);
const router = useRouter();
const focus = ref(false);
const loginRef = ref(false);

const ele = ref();
onMounted(() => {
  tabs.value.forEach((element) => {
    ele.value = element.id;
  });
});

const menuChk = () => {
  alert("click");
};

const loginPopup = () => {
  console.log("로그인");
  open();
};

const open = () => {
  loginRef.value = true;
};
const close = () => {
  loginRef.value = false;
};

function onClose() {
  close();
}

const home = () => {
  router.push("/");
};
const sport = () => {
  router.push("/sport");
};
</script>
