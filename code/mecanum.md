<template>
  <div ref="iframeContainer"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const iframeContainer = ref(null);

onMounted(() => {
  const iframe = document.createElement('iframe');
  iframe.src = 'https://roboftc.github.io/code/mecanum/mecanum/index.html';
  iframe.width = '100%';
  iframe.height = '600px';
  iframe.style.border = 'none';
  iframeContainer.value.appendChild(iframe);
});
</script>
