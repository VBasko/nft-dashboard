<template>
  <div class="carousel">
    <div
      v-for="(slide, i) in slides"
      :key="i"
      v-show="i == currentSlide"
      class="carousel__slide slide"
    >
      <div class="slide__image-container">
        <img
          :src="`_nuxt/assets/images/${slide.src}`"
          :alt="slide.alt"
          class="slide__image"
        />
        <img
          :src="`_nuxt/assets/images/${slide.src}`"
          :alt="slide.alt"
          class="slide__image slide__image--clone"
        />
      </div>
      <h2 class="slide__title">{{ slide.title }}</h2>
      <p class="slide__description">{{ slide.description }}</p>
    </div>

    <div class="carousel__controls">
      <button
        aria-label="Previous slide"
        class="carousel__button"
        @click="prevSlide"
      >
        <IconsArrowLeft />
      </button>
      <span class="carousel__separator"></span>
      <button
        aria-label="Next slide"
        class="carousel__button"
        @click="nextSlide"
      >
        <IconsArrowRight />
      </button>
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
    src: "slide-1.jpg",
    alt: "sun in the sky during daytime",
    title: "Uncover Rare NFT Gems",
    description:
      "Embark on a journey to discover the rarest NFT gems on DiveSea!",
  },
  {
    src: "slide-2.jpg",
    alt: "blue and white round illustration",
    title: "Curate Your NFT Gallery",
    description:
      "Create your own NFT gallery and showcase unique digital art on DiveSea!",
  },
  {
    src: "slide-3.jpg",
    alt: "a blue and pink background with a circle",
    title: "Immerse in Artistic Wonders",
    description: "Explore a world of artistic wonders through NFTs on DiveSea!",
  },
  {
    src: "slide-4.jpg",
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

<style scoped lang="scss">
.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4rem;
  padding: 4rem;
  text-align: center;

  &__slide {
    max-width: 24rem;
  }

  &__controls {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border-radius: 18px;
  }

  &__button {
    padding: 1.5rem;
    color: #929292;

    &:hover {
      color: #23262f;
    }
  }

  &__separator {
    width: 2px;
    height: 28px;
    background-color: #e6e8ec;
  }
}

.slide {
  &__image {
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 28px;

    &--clone {
      position: absolute;
      top: 1.25rem;
      opacity: 0.7;
      filter: blur(5rem);
      z-index: -1;
    }

    &-container {
      position: relative;
      display: flex;
      justify-content: center;
      margin-bottom: 4rem;
      z-index: 1;
    }
  }

  &__title {
    color: #ffffff;
    font-weight: 700;
    font-size: 3rem;
    margin-bottom: 0.875rem;
  }

  &__description {
    font-size: 1rem;
    color: #6d6d6d;
  }
}
</style>
