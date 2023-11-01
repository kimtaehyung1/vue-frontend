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
            <v-col cols="12" sm="6" md="4">
              <div class="display">
                <v-icon icon="mdi-account"></v-icon>
              </div>
              <v-text-field
                v-model="userId"
                label="아이디*"
                :rules="userId_rules"
                :disabled="state == 'ins' ? false : true"
                required
              ></v-text-field>
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
              <v-text-field v-model="email" label="이메일"></v-text-field>
            </v-col>
            <!-- 이름 -->
            <v-col cols="12" sm="6" md="4">
              <div class="display">
                <v-icon icon="mdi-account"></v-icon>
              </div>
              <v-text-field
                v-model="name"
                label="이름*"
                :rules="user_name"
              ></v-text-field>
            </v-col>
            <!-- 생년월일 8자리 -->
            <v-col cols="12" sm="6" md="4">
              <div class="display">
                <v-icon icon="mdi-calendar-range"></v-icon>
              </div>
              <v-text-field
                v-model="birthday"
                label="생년월일"
                hint="8자리"
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

              <v-btn-toggle v-model="local" shaped mandatory>
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
              <v-text-field v-model="phone" label="휴대전화"></v-text-field>
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
</style>

<script setup>
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";

const router = useRouter();
const state = ref("ins");
const form = ref();
const userId = ref("");
const password = ref("");
const password_chk = ref("");

const gender = ref(0);
const local = ref(0);

const email = ref("");
const phone = ref("");
const birthday = ref("");
const name = ref("");

const userId_rules = ref([
  (v) => !!v || "아이디는 필수 입력사항입니다.",
  (v) => /^[a-zA-Z0-9]*$/.test(v) || "아이디는 영문+숫자만 입력 가능합니다.",
  (v) => !(v && v.length >= 15) || "아이디는 15자 이상 입력할 수 없습니다.",
]);

// const checkDuplicate = (v) => {
//   console.log("중복확인");

//   return true;
// };

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

const user_name = ref([(v) => !!v || "이름은 필수 입력사항입니다."]);

const submit = () => {
  const validate = form.value;
  console.log(validate.isValid);

  if (validate.isValid) {
    let param = {
      userId: userId.value,
      password: password.value,
      gender: gender.value,
      local: local.value,
      email: email.value,
      phone: phone.value,
      birthday: birthday.value,
      name: name.value,
    };

    axios
      .post("/insertMemberInfo", param)
      .then(() => {
        console.log("성공");
      })
      .catch((error) => {
        console.log("error", error);
      });
  } else {
    console.log("안돼");
    return false;
  }
};

const onClose = () => {
  router.push("/");
};
</script>
