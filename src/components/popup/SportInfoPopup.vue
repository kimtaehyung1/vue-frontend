<template>
  <v-dialog width="100%">
    <v-card>
      <v-card-text style="text-align: right">
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text
        style="
          text-align: left;
          font-weight: bold;
          display: block;
          padding-top: 10px;
        "
      >
        [이슈] 7호골 손흥민 "아직 경기 많이 남아… 모든 선수가 책임감
        느껴"</v-card-text
      >
      <v-card-text style="padding: 0px; font-weight: bold">
        [<span style="margin-left: 5px">{{ date }}</span>
        <v-label style="margin-left: 5px">{{ time }}</v-label
        >]
      </v-card-text>
      <img
        cover
        src="https://img0.yna.co.kr/photo/reuters/2023/10/24/PRU20231024064701009_P4.jpg"
        style="height: auto; padding-top: 10px; width: 100%"
      />

      <v-card-text style="text-align: left">
        (서울=연합뉴스) 김동찬 기자 = 한국 축구의 간판 손흥민(토트넘)이 리그 7호
        골을 터뜨린 뒤 "아직 경기가 많이 남았다"며 겸손한 자세를 계속
        유지하겠다고 밝혔다. 손흥민은 24일(한국시간) 영국 런던에서 열린
        2023-2024시즌 잉글랜드 프로축구 프리미어리그 풀럼과 경기에서 1골,
        1도움을 기록하며 팀의 2-0 승리에 공헌했다. 경기 종료 후 맨 오브 더
        매치로도 뽑힌 손흥민은 토트넘 구단 인터넷 홈페이지에 공개된 인터뷰를
        통해 "기분이 나쁘지 않지만, 아직 경기가 많이 남았기 때문에 겸허하게 다음
        경기를 준비해야 한다"며 "다음 경기까지 시간도 많지 않다"고 말했다. 리그
        득점 2위에 오른 손흥민은 28일 크리스털 팰리스와 리그 10라운드 경기를
        치른다.<br />
        토트넘은 이번 시즌 7승 2무, 승점 23으로 무패 행진을 달리며 리그 선두에
        올랐다. 손흥민은 지난 시즌과 달라진 점을 묻는 말에 "선수 모두 팀을 위해
        뛰는 자세가 달라졌다"며 "새 감독님과 함께 프리시즌부터 열심히 준비한
        결과 작년보다 좋은 경기력이 나오는 것 같다"고 답했다. 토트넘은 지난 시즌
        18승 6무 14패, 승점 60으로 8위에 머물렀고, 이번 시즌을 앞두고는 안지
        포스테코글루 감독에게 지휘봉을 맡겼다.

        <img
          cover
          src="https://img4.yna.co.kr/photo/reuters/2023/10/24/PRU20231024055501009_P4.jpg"
          style="height: auto; padding-top: 10px; width: 100%"
        />
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="close">Close Dialog</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, defineProps, defineEmits, onMounted, computed } from "vue";

const current = new Date();
const date = ref(current.toJSON().slice(0, 10).replace(/-/g, "."));
const min = ref((current.getMinutes() < 10 ? "0" : "") + current.getMinutes());
const time = current.getHours() + ":" + min.value;

const props = defineProps({
  carPopupRef: Boolean,
  info: Object,
});

const emits = defineEmits(["onClose"]);

const close = () => {
  emits("onClose");
};
</script>
