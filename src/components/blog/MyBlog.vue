<template>
  <v-dialog fullscreen transition="dialog-bottom-transition" persistent>
    <v-card class="mx-auto card">
      <template v-slot:title style="padding-bottom: 0px">
        <VRow>
          <VCol>
            <div style="float: left">
              <img width="72" height="72" />
            </div>
            <div style="padding-left: 79px; padding-bottom: 13px">
              이름
              <v-btn icon @click="close" style="float: right">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>

            <div style="float: left">
              <VCardText style="padding: 0px 0px 0px 0px">
                <VRow style="width: 100%">
                  <VCol
                    style="
                      font-size: xx-smaller;
                      padding: 0px 0px 15px 20px;
                      font-size: 12px;
                    "
                    >오늘 조회수: &nbsp; 전체: 2222
                  </VCol>
                </VRow>
              </VCardText>
              <VCardText style="font-size: 12px; padding: 0px 0px 0px 8px">
                아이디
              </VCardText>
            </div>
          </VCol>
        </VRow>
      </template>
      <hr class="hr" />
      <div
        style="
          text-align: center;
          font-size: x-small;
          padding: 10px 0px 0px 0px;
        "
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
  </v-dialog>
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
</style>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

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

const emits = defineEmits(["onClose"]);

const close = () => {
  emits("onClose");
};
</script>
