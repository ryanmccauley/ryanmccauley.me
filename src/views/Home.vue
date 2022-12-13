<script setup lang="ts">
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
</script>

<template>
  <div class="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-around px-4">
    <div class="flex flex-col md:flex-row items-center gap-8">
      <img src="/img/headshot.png" class="w-1/3 md:w-1/5 shadow" />
      <div class="flex flex-col items-center md:items-start gap-2">
        <h1 class="font-bold text-5xl">Ryan McCauley</h1>
        <div class="text-gray-800 text-center md:text-start">
          <p>I am a highly passionate individual pursuing a career in software. I currently work at <a href="https://fandisentinel.com">F&amp;I Sentinel</a>.</p>
        </div>
        <div class="flex gap-2">
          <a href="mailto:ryanmcly@gmail.com">Email</a>
          •
          <a href="https://www.github.com/ryanmccauley/">GitHub</a>
          •
          <a href="https://www.linkedin.com/in/ryanmccauley24/">LinkedIn</a>
        </div>
      </div>
    </div>
    <div />
  </div>
</template>

<style scoped>
a {
  @apply font-medium text-sky-800 decoration-transparent underline underline-offset-4 decoration-2 transition-all duration-100 ease-in-out;
  @apply hover:text-sky-600 hover:decoration-sky-600;
}
</style>
