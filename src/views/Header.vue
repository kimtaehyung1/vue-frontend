<template>
  <div>
    <v-toolbar>
      <v-btn icon>
        <v-icon @click="onClick('home')">mdi-menu</v-icon>
      </v-btn>
      <VLabel v-if="props.ctgy === 'spt001'"> 스포츠 </VLabel>
      <VLabel v-else-if="props.ctgy === 'blg001'"> 블로그 </VLabel>
      <VLabel v-else></VLabel>
      <v-toolbar-title></v-toolbar-title>

      <div v-if="!memberData">
        <v-btn icon @click="loginPopup">
          <v-icon>mdi-login</v-icon>
        </v-btn>
      </div>
      <div v-else>
        <v-btn icon @click="logout">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </div>

      <v-btn icon>
        <v-icon>mdi-alpha-m-box</v-icon>
      </v-btn>
      <br /><br />
    </v-toolbar>
  </div>
  <LoginPopup v-model="loginRef" @onClose="onClose" />
</template>

<style>
.v-container {
  padding: 5px;
}
</style>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { sportStore } from "@/stores/sport";
import { storeToRefs } from "pinia";
import LoginPopup from "@/components/popup/LoginPopup.vue";

const { memberData } = storeToRefs(sportStore());
const router = useRouter();
const loginRef = ref(false);
const props = defineProps({
  ctgy: String,
});

const loginPopup = () => {
  console.log("로그인");
  open();
};

const logout = () => {
  localStorage.clear();
  location.reload();
};

const onClick = (value) => {
  switch (value) {
    case "home":
      router.push("/");
      break;

    default:
      break;
  }
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
</script>
