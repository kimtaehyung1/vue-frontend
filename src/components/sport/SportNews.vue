<template>
  <div style="text-align: left; font-weight: 900">
    <v-label style="padding: 10px 0px 0px 10px">{{ sport.company }}</v-label>
  </div>

  <div style="text-align: left">
    <v-card-text
      style="padding: 10px 10px 0px; font-size: 25px; line-height: 30px"
    >
      {{ sport.title }}</v-card-text
    >
  </div>
  <div style="text-align: left; padding-bottom: 10px">
    <span style="margin-left: 5px; font-size: small">{{ date }}</span>
    <span style="margin-left: 5px; font-size: small">{{ time }}</span>
  </div>
  <img
    cover
    :src="`${sport.imgPath1}`"
    style="
      height: -webkit-fill-available;
      padding-top: 10px;
      width: -webkit-fill-available;
    "
  />

  <v-card-text style="font-size: small; text-align: left">
    <span v-html="sport.text"></span>
  </v-card-text>

  <img
    cover
    :src="`${sport.imgPath2}`"
    style="
      height: -webkit-fill-available;
      padding-top: 10px;
      width: -webkit-fill-available;
    "
  />

  <v-card-text style="font-size: small; text-align: left">
    <span v-html="sport.text2"></span>
  </v-card-text>

  <v-divider class="mx-4 mb-1"></v-divider>

  <div style="text-align: left; font-weight: 900; padding-bottom: 30px">
    <v-label style="padding: 10px 0px 0px 10px"
      >기사제공 {{ sport.company }} <br />
      {{ sport.reportNm }} 기자({{ sport.reportEmil }})</v-label
    >
  </div>
</template>

<style>
.footer {
  background-color: lightgray;
}

.footer .bottom {
  padding-top: 20px;
}
</style>

<script setup>
import { ref, onMounted, reactive, computed } from "vue";
import _ from "lodash";
import { sportStore } from "@/stores/sport";
import { storeToRefs } from "pinia";

const { dtlSportNews } = sportStore();
const { sports } = storeToRefs(sportStore());

const sport = computed(() => {
  let arr = {};
  const props = _.cloneDeep(sports.value);

  arr.id = props.id;
  arr.title = props.title;
  arr.text = props.text;
  arr.text2 = props.text2;
  arr.imgPath1 = props.imgPath1;
  arr.imgPath2 = props.imgPath2;
  arr.company = props.company;
  arr.reportNm = props.reportNm;
  arr.reportEmil = props.reportEmil;
  return arr;
});

onMounted(() => {
  dtlSportNews();
});

const current = new Date();
const date = ref(current.toJSON().slice(0, 10).replace(/-/g, "."));
const min = ref((current.getMinutes() < 10 ? "0" : "") + current.getMinutes());
const amPm = ref(current.getHours() < 12 ? "오전" : "오후");
const time = amPm.value + current.getHours() + ":" + min.value;
</script>
