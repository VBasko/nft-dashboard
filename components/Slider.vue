<template>
  <div class="flex flex-col items-center py-32 text-center">
    <div
      v-for="(slide, i) in slides"
      :key="i"
      v-show="i == currentSlide"
      class="max-w-sm"
    >
      <div class="relative flex justify-center mb-16">
        <img
          :src="`_nuxt/${slide.src}`"
          :alt="slide.alt"
          class="aspect-square object-cover rounded-3xl absolute z-10"
        />
        <img
          :src="`_nuxt/${slide.src}`"
          :alt="slide.alt"
          class="clone aspect-square object-cover rounded-3xl top-5 opacity-70 blur-3xl"
        />
      </div>
      <h2 class="text-white font-bold text-5xl mb-3.5">{{ slide.title }}</h2>
      <p class="text-[#6d6d6d] text-base mb-16">{{ slide.description }}</p>
    </div>

    <div class="mt-4 flex gap-2">
      <button class="bg-white p-2" @click="prevSlide">Prev</button>
      <button class="bg-white p-2" @click="nextSlide">Next</button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Slide {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const slides = ref<Slide[]>([
  {
    src: "assets/slide-1.jpg",
    alt: "sun in the sky during daytime",
    title: "Uncover Rare NFT Gems",
    description:
      "Embark on a journey to discover the rarest NFT gems on DiveSea!",
  },
  {
    src: "assets/slide-2.jpg",
    alt: "blue and white round illustration",
    title: "Curate Your NFT Gallery",
    description:
      "Create your own NFT gallery and showcase unique digital art on DiveSea!",
  },
  {
    src: "assets/slide-3.jpg",
    alt: "a blue and pink background with a circle",
    title: "Immerse in Artistic Wonders",
    description: "Explore a world of artistic wonders through NFTs on DiveSea!",
  },
  {
    src: "assets/slide-4.jpg",
    alt: "white and brown round frame",
    title: "Discover the Artistic Universe",
    description: "Dive into the vast universe of art through NFTs on DiveSea!",
  },
]);

const currentSlide = ref<number>(0);

const nextSlide = (): void => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prevSlide = (): void => {
  currentSlide.value =
    (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};
</script>
