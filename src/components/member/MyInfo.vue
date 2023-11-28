<template>
  <!-- <v-dialog fullscreen transition="dialog-bottom-transition" persistent> -->
  <v-card class="mx-auto card">
    <template v-slot:title style="padding-bottom: 0px">
      <VRow>
        <VCol>
          <div style="float: left">
            <img width="60" height="60" />
            <button @click="charSetting">
              <v-icon
                icon="mdi-cog"
                style="font-size: 20px; padding-bottom: 5px"
              >
              </v-icon>
            </button>
          </div>
          <div style="padding-left: 79px">
            <VCardText
              style="
                font-weight: bold;
                font-size: 22px;
                padding-bottom: 0px;
                padding-left: 10px;
              "
              >{{ memberData.userNm }}</VCardText
            >
          </div>

          <div style="float: left">
            <VCardText
              style="
                font-size: 13px;
                padding: 5px 0px 0px 10px;
                font-weight: bold;
              "
            >
              <span> {{ memberData.userId }}</span>
            </VCardText>
          </div>
        </VCol>
        <VCol
          ><v-btn style="float: right" icon @click="close">
            <v-icon class="btn">mdi-close</v-icon>
          </v-btn></VCol
        >
      </VRow>
    </template>
    <hr class="hr" />
    <div
      style="text-align: center; font-size: x-small; padding: 10px 0px 0px 0px"
    >
      <v-row>
        <v-col>
          <v-icon style="font-size: x-large; padding-bottom: 10px"
            >mdi-bell-outline</v-icon
          ><br />
          내소식
        </v-col>
        <v-col>
          <v-icon style="font-size: x-large; padding-bottom: 10px"
            >mdi-account-multiple</v-icon
          ><br />
          이웃목록</v-col
        >
        <v-col>
          <button @click="onClick('write')">
            <v-icon style="font-size: x-large; padding-bottom: 10px"
              >mdi-pencil</v-icon
            ><br />
            글쓰기
          </button>
        </v-col>
      </v-row>
    </div>
  </v-card>
  <!-- </v-dialog> -->
</template>

<style>
.hr {
  background-color: lightgrey;
  height: 1px;
  width: 95%;
  border: 0px;
  margin-left: 10px;
}
.card {
  text-align: left;
  box-shadow: 0px 0px 0px 0px
      var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0)),
    0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0)),
    0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0));
}
.col {
  font-size: xx-smaller;
  padding: 0px 0px 15px 20px;
  font-size: 12px;
  padding-top: 0px;
}
.btn {
  box-shadow: 0px 0px 0px 0px
      var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0)),
    0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0)),
    0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0));
}
</style>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { sportStore } from "@/stores/sport";

const { memberData } = storeToRefs(sportStore());

const router = useRouter();

const onClick = (value) => {
  switch (value) {
    case "write":
      router.push("/blog/writeBlog");
      break;

    default:
      break;
  }
};

const charSetting = () => {
  router.push("/member/characterSetting");
};

const emits = defineEmits(["onClose"]);

const close = () => {
  // emits("onClose");
  router.back();
};
</script>
