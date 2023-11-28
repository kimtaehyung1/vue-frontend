<template>
  <v-container>
    <v-form @submit.prevent="submit" ref="form">
      <v-row>
        <v-col @click="onClose" style="padding-left: 0px">
          <v-btn style="box-shadow: none; padding-left: 0px"
            ><v-icon>mdi-close</v-icon></v-btn
          >
        </v-col>
        <v-col></v-col>
        <v-col></v-col>
        <v-col style="float: right">
          <v-btn style="box-shadow: none; padding-right: 0px" type="submit"
            >등록</v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col></v-col>
        <v-col></v-col>
      </v-row>
      <v-row>
        <v-list-subheader style="padding-left: 20px">제목</v-list-subheader>
      </v-row>
      <v-col>
        <v-text-field required v-model="title"> </v-text-field>
      </v-col>
      <v-row>
        <v-list-subheader style="padding-left: 20px">내용</v-list-subheader>
      </v-row>
      <v-col>
        <v-textarea required v-model="content" auto-grow> </v-textarea
      ></v-col>

      <v-row>
        <v-col style="padding-bottom: 0px; padding-left: 20px">
          <v-list-subheader> 공개 </v-list-subheader>
          <v-list-subheader>
            <pre style="font-size: x-small">{{ openBg }}</pre>
          </v-list-subheader>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn-toggle v-model="openBg" shaped mandatory>
            <v-btn class="btn" value="모든 사람이 이글을 볼 수 있습니다.">
              <span>전체</span>
            </v-btn>
            <v-btn
              class="btn"
              value="내가 추가한 이웃과 서로이웃에게만 공개됩니다."
            >
              <span>이웃</span>
            </v-btn>
            <v-btn class="btn" value="나의 서로이웃에게만 이글을 공개합니다.">
              <span>시로이웃</span>
            </v-btn>
            <v-btn class="btn" value="이 글을 나만 볼 수 있습니다.">
              <span>비공개</span>
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
      <hr class="hr" />
    </v-form>
  </v-container>
</template>
<style>
.hr {
  background-color: lightgrey;
  height: 1px;
  width: 95%;
  border: 0px;
  margin-left: 10px;
}
.col {
  padding-bottom: 0px;
}
</style>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const title = ref();
const content = ref();
const openBg = ref();
const from = ref();

const onClose = () => {
  router.back();
};

const submit = () => {
  const params = {
    title: title.value,
    content: content.value,
    openBg: openBg.value,
  };

  console.log("글 등록 params ::", params);

  console.log("등록");
};
</script>
