<template>
  <div style="margin-top: 35%">
    <!-- <div class="gray text-center d-flex flex-column" style="padding-top: 20px"> -->
    <!-- <div style="padding-bottom: 20px">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          width="100"
          class="mx-1"
          style="margin-bottom: 10px"
        >
          {{ icon }}
        </v-btn>
      </div> -->
    <div style="height: 60px; display: inline-table">
      <div
        style="float: left; cursor: pointer; padding-right: 10px"
        @click="onClick"
        ref="news"
      >
        <v-btn width="100"> 홈 </v-btn>
      </div>
      <div
        style="float: left; cursor: pointer; padding-right: 10px"
        @click="onClick"
        ref="news"
      >
        <v-btn width="100"> 야구 </v-btn>
      </div>
      <div style="float: left; cursor: pointer" @click="onClick" ref="news">
        <v-btn width="100"> 해외야구 </v-btn>
      </div>
    </div>
    <br />
    <div style="height: 60px; display: inline-table">
      <div
        style="float: left; cursor: pointer; padding-right: 10px"
        @click="onClick"
        ref="news"
      >
        <v-btn width="100"> 축구 </v-btn>
      </div>
      <div
        style="float: left; cursor: pointer; padding-right: 10px"
        @click="onClick"
        ref="news"
      >
        <v-btn width="100"> 해외축구 </v-btn>
      </div>
      <div style="float: left; cursor: pointer" @click="onClick" ref="news">
        <v-btn width="100"> 배구 </v-btn>
      </div>
    </div>

    <div style="font-size: 15px; width: 100%; font-weight: bold">
      로그아웃 · 고객센터 · 문제신고 · 개인정보처리방침
    </div>
    <div style="font-size: 11px; color: gray" class="pt-0">
      본 콘텐츠의 저작권은 제공처 또는 네이버에 있으며, 이를 무단 이용하는 경우
      저작권법 등에 따라 법적 책임을 질 수 있습니다.
      <br />
    </div>

    <div style="padding-top: 5px"><strong>© TAVER Corp.</strong></div>
    <!-- </div> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>
