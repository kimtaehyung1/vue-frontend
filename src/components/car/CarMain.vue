<template>
  <v-card theme="dark" flat rounded="0" style="margin-top: 48px">
    <v-window v-model="onboarding">
      <v-window-item v-for="car in cars" :key="car.id">
        <v-card height="250" class="d-flex justify-center align-center">
          <img cover height="200" :src="`${car.carNm}`" />
        </v-card>
      </v-window-item>
    </v-window>

    <v-card-actions class="justify-space-between" style="display: contents">
      <!-- <v-btn variant="plain" icon="mdi-chevron-left" @click="prev"></v-btn> -->
      <v-item-group
        v-model="onboarding"
        class="text-center"
        mandatory
        style="background-color: white"
      >
        <v-item v-for="n in cars" :key="n.id" v-slot="{ isSelected, toggle }">
          <v-btn
            :variant="isSelected ? 'outlined' : 'text'"
            icon="mdi-record"
            @click="toggle"
            style="color: black"
          ></v-btn>
        </v-item>
      </v-item-group>
      <!-- <v-btn variant="plain" icon="mdi-chevron-right" @click="next"></v-btn> -->
    </v-card-actions>

    <v-tabs v-model="tab" bg-color="white">
      <v-tab value="one">Volvo</v-tab>
      <v-tab value="two">Hyundai</v-tab>
      <v-tab value="three">···</v-tab>
    </v-tabs>

    <v-card-text v-if="tab === 'one'">
      <Volvo />
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import Volvo from "./Volvo.vue";

const length = ref(3);
const onboarding = ref(0);
const loading = ref(false);
const tab = ref(null);

const cars = ref([
  {
    id: "0",
    carNm:
      "https://img1.daumcdn.net/thumb/S720x440ht.u/?fname=%2Fmedia%2Fvitraya%2Fauto%2Fimage%2F5c310e%2F8D762D25B2853A8EC55F41558150D99A3A55FB1923368F9DB4_26KA&scode=media",
  },
  {
    id: "1",
    carNm:
      "https://img1.daumcdn.net/thumb/S720x440ht.u/?fname=%2Fmedia%2Fvitraya%2Fauto%2Fimage%2F088591%2F441892307B0FCAC7D90EEC5CCA17CFEFCF7C256A8FF5227BB2_1HH2&scode=media",
  },
  {
    id: "2",
    carNm:
      "https://cdn.autotribune.co.kr/news/photo/202101/4849_30727_3533.jpg",
  },
  {
    id: "3",
    carNm: "https://dimg.donga.com/wps/NEWS/IMAGE/2022/02/16/111843079.1.jpg",
  },
]);

function next() {
  onboarding.value = onboarding.value + 1 > length ? 1 : onboarding.value + 1;
}

const prev = () => {
  onboarding.value = onboarding.value - 1 <= 0 ? length : onboarding.value - 1;
};

const reserve = () => {
  loading.value = true;

  setTimeout(() => (loading.value = false), 2000);
};
</script>
