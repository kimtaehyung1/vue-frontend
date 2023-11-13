<template>
  <Header :ctgy="route.params.ctgy"></Header>
  <SubTab />
  <BlogTab />
  <div>
    <v-container class="text-center" style="display: inline">
      <VRow>
        <VCol cols="auto" style="width: 110px; margin-left: 12px">
          <VBtn
            block
            rounded="xl"
            size="x-large"
            style="font-size: small; height: 30px; padding: 0px"
            >실시간HOT</VBtn
          >
        </VCol>
        <VCol cols="auto" style="width: 110px">
          <VBtn
            block
            rounded="xl"
            size="x-large"
            style="font-size: small; height: 30px; padding: 0px"
            >주간TOP</VBtn
          >
        </VCol>
        <VCol cols="auto" style="width: 110px">
          <VBtn
            block
            rounded="xl"
            size="x-large"
            style="font-size: small; height: 30px; padding: 0px"
            >내인기글</VBtn
          >
        </VCol>
      </VRow>
    </v-container>
  </div>
  <div style="height: 50px; background-color: lightgray"></div>
  <div>
    <span
      style="display: flex; font-size: 13px; padding: 10px; padding-left: 18px"
      >오전 7시 인기글 입니다. &nbsp;

      <VIcon
        style="--v-icon-size-multiplier: auto; height: 18px"
        @click="helpPopup"
        >mdi-help-circle-outline</VIcon
      >
    </span>
    <div>
      <!-- 제목 / 조회수/ 좋아요수/ 댓글 / 이름   -->
      <v-card
        class="mx-auto"
        style="
          text-align: left;
          box-shadow: 0px 0px 0px 0px
              var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0)),
            0px 0px 0px 0px
              var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0)),
            0px 0px 0px 0px
              var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0));
        "
      >
        <template v-slot:title style="padding-bottom: 0px">
          <VRow>
            <VCol
              ><div>제목</div>
              <div style="width: 230px">
                <VCardText style="padding-bottom: 0px; padding-left: 12px">
                  <VRow style="width: 100%">
                    <VCol
                      style="
                        font-size: xx-smaller;
                        padding-right: 7px;
                        padding-left: 0px;
                        padding-bottom: 0px;
                        padding-top: 0px;
                        font-size: 12px;
                      "
                      >조회: 1111</VCol
                    >
                    <VCol
                      style="
                        font-size: xx-smaller;
                        padding-right: 0px;
                        padding-left: 0px;
                        padding-bottom: 0px;
                        padding-top: 0px;
                        font-size: 12px;
                      "
                      ><VIcon style="--v-icon-size-multiplier: auto"
                        >mdi-heart</VIcon
                      >
                      2222</VCol
                    >
                    <VCol
                      style="
                        font-size: xx-smaller;
                        padding-left: 0px;
                        padding-bottom: 0px;
                        padding-top: 0px;
                        font-size: 12px;
                      "
                      ><VIcon style="--v-icon-size-multiplier: auto"
                        >mdi-dots-horizontal-circle</VIcon
                      >
                      333</VCol
                    >
                  </VRow>
                </VCardText>
              </div>
              <div>
                <VCardText
                  style="font-size: 12px; padding-top: 12px; padding-left: 0px"
                >
                  이름
                </VCardText>
              </div>
            </VCol>
            <VCol>
              <div style="float: right">
                <img width="72" height="72" /></div
            ></VCol>
          </VRow>
        </template>
      </v-card>
      <hr
        style="
          background-color: lightgrey;
          height: 1px;
          width: 95%;
          border: 0px;
          margin-left: 10px;
        "
      />
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import BlogTab from "@/components/tab/BlogTab.vue";
import Header from "@/views/Header.vue";
import SubTab from "@/components/tab/SubTab.vue";

const route = useRoute();

const helpPopup = () => {
  console.log("도움말");
};
</script>
