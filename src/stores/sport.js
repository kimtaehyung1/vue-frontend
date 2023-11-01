import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const sportStore = defineStore("sport", () => {
  let sports = ref({});

  const headlineNews = ref([
    {
      id: "1",
      title: `7호골 손흥민 "아직 경기 많이 남아…모든 선수가 책임감 느껴`,
      text: `(서울=연합뉴스) 김동찬 기자 = 한국 축구의 간판 손흥민(토트넘)이 리그 7호
  골을 터뜨린 뒤 "아직 경기가 많이 남았다"며 겸손한 자세를 계속 유지하겠다고
  밝혔다. 손흥민은 24일(한국시간) 영국 런던에서 열린 2023-2024시즌 잉글랜드
  프로축구 프리미어리그 풀럼과 경기에서 1골, 1도움을 기록하며 팀의 2-0 승리에
  공헌했다.<br/> 경기 종료 후 맨 오브 더 매치로도 뽑힌 손흥민은 토트넘 구단 인터넷
  홈페이지에 공개된 인터뷰를 통해 "기분이 나쁘지 않지만, 아직 경기가 많이
  남았기 때문에 겸허하게 다음 경기를 준비해야 한다"며 "다음 경기까지 시간도
  많지 않다"고 말했다.`,
      imgPath1:
        "https://img0.yna.co.kr/photo/reuters/2023/10/24/PRU20231024064701009_P4.jpg",
      imgPath2:
        "https://imgnews.pstatic.net/image/082/2023/10/25/0001238467_002_20231025144801236.jpg?type=w647",
      company: "마이데일리",
      reportNm: "정광용",
      reportEmil: "kyjeong@busan.com",
    },
    {
      id: "2",
      title: `'케인 1골-1도움' 뮌헨, 갈라타사라이 3-1 꺾고 UCL 3연승... 김민재 역시 풀타임`,
      text: `[OSEN=우충원 기자] 바이에른 뮌헨이 1골-1도움을 기록한 해리 케인의 활약을 앞세워 UCL 3연승을 기록했다.
  바이에른 뮌헨은 25일(이하 한국시간) 튀르키예 이스탄불 네프 스타디움에서 열린 2023-2024 유럽축구연맹(UEFA)
  챔피언스리그 조별리그 A조 3차전서 갈라타사라이에 3-1로 승리, 3연승을 거뒀다.
  이날 바이에른 뮌헨은 케인이 1골-1도움을 기록하며 승리를 거뒀다.<br/><br/>
  김민재는 이 경기 역시 풀타임 출전했다. 여전히 뛰어난 수비력을 과시했지만 타이트한 일정 속에 정상 컨디션은 아니었다.
  바이에른 뮌헨은 골키퍼 울라이히를 시작으로 김민재-더 리흐트-키미히-케인-자네-코망-데이비스-라이머-마즈라위-무시알라가 선발 출전했다.
  바이에른 뮌헨은 전반전 45분 내내 갈라타사라이의 강력한 전방 압박에 고전했다. 리그 내에선 전체적인 주도권을 쥐는
  그들의 입장에서 갈라타사라이의 과감한 압박은 매우 낯설었다. 선제골은 바이에른 뮌헨이 터트렸다.
  `,
      text2: `전반 8분 역습 상황에서 더 리흐트의 패스가 무시알라에게 향했다. 빠르게 이어진 역습을 코망이 득점으로 마무리, 바이에른 뮌헨이 1-0으로 앞섰다.
  하지만 갈라타사라이는 선제골 허용후 치열하게 경기를 펼쳤다. 팽팽한 경기가 이어졌고 좀처럼 골이 터지지 않았다.
  갈라타사라이는 전반 28분 페널티킥으로 동점을 뽑아내며 1-1을 만들었다. 전반을 바이에른 뮌헨과 갈라타사라이는 1-1로 마쳤다.
  후반서도 바이에른 뮌헨은 갈라타사라이를 완벽하게 앞서지 못했다. 오히려 실점 위기를 내주기도 했다.<br/><br/>
  하지만 바이에른 뮌헨은 후반 28분 케인이 추가골을 기록했다. 공격 기회를 엿본 바이에른 뮌헨은 다시 균형을 깨트리며 승리에 도전했다.
  또 바이에른 뮌헨은 기세를 몰아 후반 34분 무시알라가 3번째 골을 터트렸다. 케인의 도움을 받아 쐐기포를 뽑아냈다.
  결국 바이에른 뮌헨은 갈라타사라이를 꺾고 3연승을 기록했다. / 10bird@osen.co.kr`,
      imgPath1:
        "https://img4.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202310/25/poctan/20231025052031400xwhe.jpg",
      imgPath2:
        "https://dimg.donga.com/wps/SPORTS/IMAGE/2023/10/25/121832388.1.jpg",
      company: "일간스포츠",
      reportNm: "한수용",
      reportEmil: "hansuyoung@korea.com",
    },
  ]);

  const dtlSportNews = (ele) => {
    headlineNews.value.map((source) => {
      if (source.id === ele) {
        sports.value.id = source.id;
        sports.value.title = source.title;
        sports.value.text = source.text;
        sports.value.text2 = source.text2;
        sports.value.imgPath1 = source.imgPath1;
        sports.value.imgPath2 = source.imgPath2;
        sports.value.company = source.company;
        sports.value.reportNm = source.reportNm;
        sports.value.reportEmil = source.reportEmil;
      }

      return sports;
    });
  };

  const tabs = ref([
    {
      key: "tab-1",
      value: "홈",
    },
    {
      key: "tab-2",
      value: "스포츠",
    },
  ]);

  return {
    tabs,
    sports,
    headlineNews,
    dtlSportNews,
  };
});
