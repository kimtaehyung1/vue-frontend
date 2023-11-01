<template>
  <v-dialog width="500" persistent>
    <v-card>
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
              <v-text-field label="아이디" required></v-text-field>
            </v-col>
            <!-- 비밀번호 -->
            <v-col cols="12" sm="6" md="4">
              <div class="display">
                <v-icon icon="mdi-lock"></v-icon>
              </div>
              <v-text-field label="비밀번호"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <small>
          <div style="text-align: center">
            <div style="float: left">
              <v-btn variant="text"> 아이디찾기 </v-btn>
            </div>
            <div style="float: left">
              <v-btn variant="text" style="padding: 0px"> 비밀번호찾기 </v-btn>
            </div>
            <div style="float: left">
              <v-btn variant="text" @click="membership"> 회원가입 </v-btn>
            </div>
          </div>
        </small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="close">
          Close
        </v-btn>
        <v-btn color="blue-darken-1" variant="text"> Save </v-btn>
      </v-card-actions>
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
const router = useRouter();
const props = defineProps({
  loginRef: Boolean,
});

const membership = () => {
  router.push("/Membership");
  emits("onClose");
};

const emits = defineEmits(["onClose"]);

const close = () => {
  emits("onClose");
};
</script>
