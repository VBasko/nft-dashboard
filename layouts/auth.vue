<template>
  <div class="min-h-screen flex">
    <div class="flex-1 p-4 flex flex-col justify-between">
      <NuxtLink to="/" class="self-start">
        <IconsLogoSmall />
      </NuxtLink>

      <slot />
      <ul class="flex justify-between">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Copyright 2022</a></li>
      </ul>
    </div>
    <div class="flex-1 p-4 bg-black">
      <Slider />
    </div>
  </div>
</template>
