<template>
  <v-dialog width="500" persistent>
    <v-card>
      <v-form @submit.prevent="submit" ref="form">
        <v-card-title>
          <span class="text-h5" style="text-align: center">로그인</span>
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
                  label="아이디"
                  required
                  v-model="userId"
                ></v-text-field>
              </v-col>
              <!-- 비밀번호 -->
              <v-col cols="12" sm="6" md="4">
                <div class="display">
                  <v-icon icon="mdi-lock"></v-icon>
                </div>
                <v-text-field
                  v-model="password"
                  label="비밀번호"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <div style="position: fixed">
            <div style="text-align: center">
              <div style="float: left">
                <v-btn variant="text"> 아이디찾기 </v-btn>
              </div>
              <div style="float: left">
                <v-btn variant="text" style="padding: 0px">
                  비밀번호찾기
                </v-btn>
              </div>
              <div style="float: left">
                <v-btn variant="text" @click="membership"> 회원가입 </v-btn>
              </div>
            </div>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <div style="padding-top: 80px">
            <v-btn type="submit" color="blue-darken-1" variant="text">
              확인
            </v-btn>
            <v-btn color="blue-darken-1" variant="text" @click="close">
              취소
            </v-btn>
          </div>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
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
import { ref, defineProps } from "vue";
import { useRouter, useRoute } from "vue-router";
import { sportStore } from "@/stores/sport";
import { storeToRefs } from "pinia";

const { memberLogin } = sportStore();

const router = useRouter();
const userId = ref("");
const password = ref("");

const props = defineProps({
  loginRef: Boolean,
});

const submit = () => {
  let params = {
    userId: userId.value,
    password: password.value,
  };

  memberLogin(params);
  close();
};

const membership = () => {
  router.push("/Membership");
  emits("onClose");
};

const emits = defineEmits(["onClose"]);

const close = () => {
  emits("onClose");
};
</script>
