<template>
  <v-dialog width="auto">
    <v-card>
      <v-card-title>{{ props.info.volNm }}</v-card-title>
      <v-card-text>
        <div v-html="props.info.content"></div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="close">Close Dialog</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, defineProps, defineEmits, onMounted, computed } from "vue";

const props = defineProps({
  carPopupRef: Boolean,
  info: Object,
});

const emits = defineEmits(["onClose"]);

const close = () => {
  emits("onClose");
};
</script>
