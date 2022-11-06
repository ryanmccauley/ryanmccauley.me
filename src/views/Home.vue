<script setup>
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center max-w-7xl mx-auto gap-8">
    <div class="flex flex-col gap-4 items-center">
      <img src="@/assets/img/headshot.png" class="w-1/2 h-1/2 rounded-full shadow" />
      <div class="flex flex-col items-center">
        <h1 class="text-3xl font-bold text-white">Ryan McCauley</h1>
        <p class="font-mono text-white">Software Engineer</p>
        <a href="mailto:ryanmcly@gmail.com" class="text-white font-mono text-sm">ryanmcly@gmail.com</a>
      </div>
      <div class="flex items-center justify-center gap-2">
        <a href="https://www.linkedin.com/in/ryanmccauley24/" target="_blank" class="fill-current text-white">
          <svg-icon :fa-icon="faLinkedin" :size="32" />
        </a>
        <a href="https://github.com/ryanmccauley" target="_blank" class="fill-current text-white">
          <svg-icon :fa-icon="faGithub" :size="32" />
        </a>
        <a href="https://discord.com/users/556928967077003275" target="_blank" class="fill-current text-white">
          <svg-icon :fa-icon="faDiscord" :size="32" />
        </a>
      </div>
    </div>
  </div>
</template>
