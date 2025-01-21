<template>
  <div ref="iframeContainer" style="height: 100vh; width: 100%; overflow: hidden;"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const iframeContainer = ref(null);

onMounted(() => {
  const iframe = document.createElement('iframe');
  iframe.src = 'https://roboftc.github.io/code/mecanum/mecanum/index.html';
  iframe.width = '100%';
  iframe.height = '100%';
  iframe.style.border = 'none';
  iframe.style.overflow = 'hidden';
  iframeContainer.value.appendChild(iframe);
});
</script>
