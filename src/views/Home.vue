<template>
  <Header></Header>
  <div
    style="
      background: rgb(var(--v-theme-on-surface-variant));
      padding-top: 16px;
    "
  >
    <br /><br />
  </div>
  <div
    style="
      background: rgb(var(--v-theme-on-surface-variant));
      padding-top: 16px;
    "
  >
    <br /><br />
  </div>
  <div style="height: 60px; display: inline-table; padding-top: 10px">
    <div style="float: left; cursor: pointer" @click="onClick('news')">
      <div>
        <VIcon icon>mdi-clipboard-list-outline</VIcon>
      </div>
      <v-btn
        width="100"
        style="
          box-shadow: 0px 0px 0px 0px
              var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0)),
            0px 0px 0px 0px
              var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0)),
            0px 0px 0px 0px
              var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0));
        "
      >
        뉴스판
      </v-btn>
    </div>
    <div
      style="float: left; cursor: pointer"
      @click="onClick('sports')"
      ref="sports"
    >
      <div>
        <VIcon icon>mdi-clipboard-list-outline</VIcon>
      </div>
      <v-btn
        width="100"
        style="
          box-shadow: 0px 0px 0px 0px
              var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0)),
            0px 0px 0px 0px
              var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0)),
            0px 0px 0px 0px
              var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0));
        "
      >
        스포츠판
      </v-btn>
    </div>
    <div
      style="float: left; cursor: pointer"
      @click="onClick('blog')"
      ref="blog"
    >
      <div>
        <VIcon icon>mdi-clipboard-list-outline</VIcon>
      </div>
      <v-btn
        width="100"
        style="
          box-shadow: 0px 0px 0px 0px
              var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0)),
            0px 0px 0px 0px
              var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0)),
            0px 0px 0px 0px
              var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0));
        "
      >
        블러그판
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { sportStore } from "@/stores/sport";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import Header from "./Header.vue";

const { menuTabData } = sportStore();
const {} = storeToRefs(sportStore());

const router = useRouter();

onMounted(() => {
  menuTabData();
});

const onClick = (value) => {
  switch (value) {
    case "news":
      router.push("/");
      break;
    case "sports":
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
