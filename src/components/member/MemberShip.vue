<template>
  <v-card>
    <v-form @submit.prevent="submit" ref="form">
      <v-card-title>
        <span class="text-h5" style="text-align: center">회원가입</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <!-- 아이디 -->
            <v-col cols="12" sm="6" md="4" hidden>
              <div class="display">
                <v-icon icon="mdi-account"></v-icon>
              </div>
              <v-text-field v-model="userNo" label="번호"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <div class="display">
                <v-icon icon="mdi-account"></v-icon>
              </div>
              <v-checkbox-btn
                label="중복확인"
                v-model="duplicate"
                @click="checkDuplicate(userId)"
                class="btn"
              ></v-checkbox-btn>
              <v-text-field
                v-model="userId"
                label="아이디*"
                :rules="userId_rules"
                require
              >
              </v-text-field>
            </v-col>
            <!-- 비밀번호 -->
            <v-col cols="12" sm="6" md="4">
              <div class="display">
                <v-icon icon="mdi-lock"></v-icon>
              </div>
              <v-text-field
                type="password"
                v-model="password"
                label="비밀번호*"
                :rules="user_pw_rules"
                autocomplete="on"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <div class="display">
                <v-icon icon="mdi-lock" aria-disabled="true"></v-icon>
              </div>
              <v-text-field
                type="password"
                v-model="password_chk"
                label="비밀번호 확인*"
                :rules="user_pw_rules2"
                autocomplete="on"
              ></v-text-field>
            </v-col>
            <!-- 이메일 -->
            <v-col cols="12" sm="6" md="4">
              <div class="display">
                <v-icon icon="mdi-email"></v-icon>
              </div>
              <v-text-field
                v-model="email"
                type="email"
                label="이메일"
                :rules="[rules.email]"
              ></v-text-field>
            </v-col>
            <!-- 이름 -->
            <v-col cols="12" sm="6" md="4">
              <div class="display">
                <v-icon icon="mdi-account"></v-icon>
              </div>
              <v-text-field
                v-model="userNm"
                label="이름*"
                :rules="user_name"
              ></v-text-field>
            </v-col>
            <!-- 생년월일 8자리 -->
            <v-col cols="12" sm="6" md="4">
              <div class="display">
                <v-icon icon="mdi-calendar-range"> </v-icon>
              </div>
              <v-text-field
                v-model="birthday"
                label="생년월일"
                type="date"
                :rules="[rules.date]"
              ></v-text-field>
            </v-col>
            <!-- 남자/여자 내국인/외국인 -->
            <v-col cols="12" sm="6" md="4">
              <v-btn-toggle v-model="gender" shaped mandatory>
                <v-btn>
                  <span>남자</span>
                </v-btn>
                <v-btn>
                  <span>여자</span>
                </v-btn>
              </v-btn-toggle>
              <v-btn-toggle v-model="foreigner" shaped mandatory>
                <v-btn>
                  <span>내국인</span>
                </v-btn>
                <v-btn>
                  <span>외국인</span>
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <!-- 휴대전화 -->
            <v-col cols="12" sm="6" md="4">
              <div class="display">
                <v-icon icon="mdi-cellphone-basic"></v-icon>
              </div>
              <v-text-field
                v-model="phone"
                label="휴대전화"
                :rules="[rules.phone]"
                hint=" '-'없이 숫자만 입력 가능합니다."
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions style="float: inline-end">
        <v-btn type="submit" color="blue-darken-1" variant="text"> 저장 </v-btn>
        <v-btn color="blue-darken-1" @click="onClose"> 취소 </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<style scoped>
.display {
  border-radius: 50%;
  float: left;
  box-shadow: 0px 0px 0px 0px
      var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0)),
    0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0)),
    0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0));
  float: left;
  align-items: end;
  padding-top: 15px;
  padding-right: 10px;
}
.btn {
  float: right;
  margin-left: 5px;
  height: auto;
  padding: 0px;
  box-shadow: 0px 0px 0px 0px
      var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0)),
    0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0)),
    0px 0px 0px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0));
}
</style>

<script setup>
import axios from "axios";
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const state = ref("ins");
const form = ref();
const userId = ref("");
const userNo = ref();
const password = ref("");
const password_chk = ref("");

const gender = ref(0);
const foreigner = ref(0);

const email = ref();
const phone = ref();
const birthday = ref();
const userNm = ref();

const duplicate = ref(false);
const custom = ref(false);
const result = ref();

const checkDuplicate = (v) => {
  if (!duplicate.value) {
    axios
      .post(`duplicationCheck?userId=${v}`)
      .then((response) => {
        console.log("response", response);
        result.value = response.data.result;

        if (result.value === "true") {
          alert("[중복아이디] 사용할 수 없는 아이디 입니다.");
          duplicate.value = false;
        } else {
          alert("사용가능한 아이디 입니다.");
          duplicate.value = false;
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
};

const userId_rules = ref([
  (v) => !!v || "아이디는 필수 입력사항입니다.",
  (v) => /^[a-zA-Z0-9]*$/.test(v) || "아이디는 영문+숫자만 입력 가능합니다.",
  (v) => !(v && v.length >= 15) || "아이디는 15자 이상 입력할 수 없습니다.",
]);

const user_pw_rules = ref([
  (v) =>
    state.value === "ins" ? !!v || "패스워드는 필수 입력사항입니다." : true,
  (v) => !(v && v.length >= 30) || "패스워드는 30자 이상 입력할 수 없습니다.",
]);

const user_pw_rules2 = ref([
  (v) =>
    state.value === "ins" ? !!v || "패스워드는 필수 입력사항입니다." : true,
  (v) => !(v && v.length >= 30) || "패스워드는 30자 이상 입력할 수 없습니다.",
  (v) => v === password.value || "패스워드가 일치하지 않습니다.",
]);

const rules = ref({
  email: (value) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || "Invalid e-mail.";
  },
  phone: (value) => /^[0-9]+$/.test(value) || "숫자만 입력 가능합니다.",
  date: (value) => /[^0-9]/g.test(value),
});

const currentDate = computed(() => {
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();

  day = day >= 10 ? day : "0" + day;
  minute = minute >= 10 ? minute : "0" + minute;
  // 2023-11-11 2:22
  return year + "" + month + "" + day + "" + hour + "" + minute;
});

const user_name = ref([(v) => !!v || "이름은 필수 입력사항입니다."]);

const submit = () => {
  const validate = form.value;

  console.log("submit ==>", result.value);

  if (result.value === "true") {
    alert("[중복아이디] 를 확인해주세요");
    return false;
  }

  if (validate.isValid) {
    let param = {
      userNo: userNo.value,
      userId: userId.value,
      userNm: userNm.value,
      password: password.value,
      regr: userNm.value,
      reg_date: currentDate.value,
      mod_date: currentDate.value,
      modr: userNm.value,
      gender: gender.value,
      foreigner: foreigner.value,
      email: email.value,
      phone: phone.value,
      birthday: birthday.value.replace(/-/gi, ""),
    };
    console.log("param :::::::::::", param);
    // axios
    //   .post("/insertMemberInfo", param)
    //   .then(() => {
    //     console.log("성공");
    //     router.push("/");
    //     initParam();
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //   });
  } else {
    alert("회원가입절차를 확인해주세요. ");
    return false;
  }
};

const initParam = () => {
  userId.value = "";
  userNo.value = 0;
  userNm.value = "";
  password.value = "";
  password_chk.value = "";
  gender.value = 0;
  foreigner.value = 0;
  email.value = "";
  phone.value = "";
  birthday.value = "";
};

const onClose = () => {
  router.push("/");
};
</script>
