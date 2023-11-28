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

      <!-- 로그인 후 -->
      <v-btn icon v-if="memberData !== undefined" @click="myInfoDialog">
        <v-icon>mdi-alpha-m-box</v-icon>
      </v-btn>

      <!-- 로그인 전 -->
      <v-btn icon v-else @click="myInfoDialog">
        <v-icon>mdi-alpha-m-box-outline</v-icon>
      </v-btn>
      <br /><br />
    </v-toolbar>
  </div>
  <LoginPopup v-model="loginRef" @onClose="onClose" />
  <!-- <MyInfo v-model="myInfoRef" @onClose="onClose" /> -->
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
import MyInfo from "@/components/member/MyInfo.vue";

const { memberData } = storeToRefs(sportStore());
const router = useRouter();
const loginRef = ref(false);
const myInfoRef = ref(false);
const props = defineProps({
  ctgy: String,
});

const loginPopup = () => {
  console.log("로그인");
  open();
};

const logout = () => {
  if (confirm("로그아웃 하시겠습니까?")) {
    localStorage.clear();
    location.reload();
  } else {
    console.log("취소");
  }
};

const onClick = (value) => {
  switch (value) {
    case "home":
      router.back();
      break;

    default:
      break;
  }
};

onMounted(() => {
  console.log("memberData", memberData.value);
});

const myInfoDialog = () => {
  if (memberData.value !== undefined) {
    router.push("/member");
  } else {
    loginRef.value = true;
  }
};

const open = () => {
  loginRef.value = true;
};
const close = () => {
  loginRef.value = false;
  myInfoRef.value = false;
};

function onClose() {
  close();
}
</script>
