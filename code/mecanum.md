<script setup>
  import { onMounted, nextTick } from 'vue';

onMounted(() => {
  nextTick(() => {
    const script = document.createElement('script');
    script.src = '/code/mecanum/processing.js';
    script.onload = () => console.log('Script loaded successfully!');
    script.onerror = () => console.log('Failed to load script');
    document.body.appendChild(script);
  });
});


</script>