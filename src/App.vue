<template>
  <SpeedInsights/>
  <div>
      <AppNav/>
      <RouterView/>
  </div>
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/vue"

</script>
