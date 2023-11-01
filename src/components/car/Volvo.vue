<template>
  <v-window v-model="tab">
    <v-window-item value="one">
      <v-row>
        <v-col v-for="n in volvoImg" :key="n.id" cols="6">
          <v-img :src="n.volPath" :lazy-src="n.volPath" :alt="n.volNm"></v-img>
          <button
            style="padding-top: 10px; text-decoration: underline"
            @click="onClick(n.id)"
          >
            {{ n.volNm }}
          </button>
        </v-col>
      </v-row>
    </v-window-item>

    <v-window-item value="two"> Hyundai </v-window-item>

    <v-window-item value="three"> Others </v-window-item>
  </v-window>
  <CarInfoPopup v-model="carPopupRef" @onClose="onClose" :info="temp" />
</template>

<script setup>
import { ref, computed } from "vue";
import CarInfoPopup from "../popup/CarInfoPopup.vue";
const reveal = ref(false);
const tab = ref(null);
const carPopupRef = ref(false);
const temp = ref();

const volvoImg = ref([
  {
    id: "1",
    volNm: "볼보 XC40",
    volPath:
      "https://img1.daumcdn.net/thumb/S720x440ht.u/?fname=%2Fmedia%2Fvitraya%2Fauto%2Fimage%2F5c310e%2F8D762D25B2853A8EC55F41558150D99A3A55FB1923368F9DB4_26KA&scode=media",
    content: `전고: 1640 <br />
    전폭: 1875 <br />
    전장: 4440 <br />
    너비(사이드 미러 포함): 2034`,
  },
  {
    id: "2",
    volNm: "볼보 XC90",
    volPath:
      "https://img1.daumcdn.net/thumb/S720x440ht.u/?fname=%2Fmedia%2Fvitraya%2Fauto%2Fimage%2Fa6a9c9%2FF5FD29A9730103D43171A092B13C7FAAC79F017C97D793C40D_6NQR&scode=media",
    content: `가격:	8,030 ~ 9,550만원 <br />
        연료:	가솔린,디젤 <br />
        연비:	8.9 ~ 10.9km/l<br />
        외장:	SUV (대형)<br />
        배기량:	1969cc<br />
        정원:	5 ~ 7`,
  },
  {
    id: "3",
    volNm: "볼보 XC60",
    volPath:
      "data:image/jpeg;base64,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",
    content: `가격: 6,090 ~ 7,100만원 <br /> 연료: 가솔린 <br /> 연비:	9.8km/l <br /> 외장:	SUV(중형) <br /> 배기량: 1969cc <br /> 정원: 5`,
  },
  {
    id: "4",
    volNm: "볼보 전기차 [C40리차지]",
    volPath: "https://dimg.donga.com/wps/NEWS/IMAGE/2022/02/16/111843079.1.jpg",
    content: `가격: 6,391만원 <br /> 1회충전시: 356km (40분-80%)`,
  },
]);

const onVolvo = (target) => {
  switch (target) {
    case "1":
      temp.value = {
        id: "1",
        volNm: "볼보 XC40",
        volPath:
          "https://img1.daumcdn.net/thumb/S720x440ht.u/?fname=%2Fmedia%2Fvitraya%2Fauto%2Fimage%2F5c310e%2F8D762D25B2853A8EC55F41558150D99A3A55FB1923368F9DB4_26KA&scode=media",
        content: `전고: 1640 <br />
        전폭: 1875 <br />
        전장: 4440 <br />
        너비(사이드 미러 포함): 2034`,
      };
      break;
    case "2":
      temp.value = {
        id: "2",
        volNm: "볼보 XC90",
        volPath:
          "https://img1.daumcdn.net/thumb/S720x440ht.u/?fname=%2Fmedia%2Fvitraya%2Fauto%2Fimage%2Fa6a9c9%2FF5FD29A9730103D43171A092B13C7FAAC79F017C97D793C40D_6NQR&scode=media",
        content: `가격:	8,030 ~ 9,550만원 <br />
        연료:	가솔린,디젤 <br />
        연비:	8.9 ~ 10.9km/l<br />
        외장:	SUV (대형)<br />
        배기량:	1969cc<br />
        정원:	5 ~ 7`,
      };
      break;
    case "3":
      temp.value = {
        id: "3",
        volNm: "볼보 XC60",
        volPath:
          "data:image/jpeg;base64,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",
        content: `가격: 6,090 ~ 7,100만원 <br /> 연료: 가솔린 <br /> 연비:	9.8km/l <br /> 외장:	SUV(중형) <br /> 배기량: 1969cc <br /> 정원: 5`,
      };
      break;
    case "4":
      temp.value = {
        id: "4",
        volNm: "볼보 전기차 [C40리차지]",
        volPath:
          "https://dimg.donga.com/wps/NEWS/IMAGE/2022/02/16/111843079.1.jpg",
        content: `가격: 6,391만원 <br /> 1회충전시: 356km (40분-80%)`,
      };
      break;
    default:
  }
};

function onClick(target) {
  onVolvo(target);
  open();
}

function onClose() {
  close();
}

const open = () => {
  carPopupRef.value = true;
};
const close = () => {
  carPopupRef.value = false;
};
</script>
