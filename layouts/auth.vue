<template>
  <div class="l-flex auth">
    <div class="l-flex__half auth__left">
      <NuxtLink to="/" class="auth__header">
        <IconsLogoSmall />
      </NuxtLink>

      <slot />
      <ul class="auth__footer">
        <li class="auth__footer-item">
          <a href="#" class="auth__footer-link">Privacy Policy</a>
        </li>
        <li class="auth__footer-item">Copyright 2022</li>
      </ul>
    </div>
    <div class="l-flex__half auth__right">
      <Slider />
    </div>
  </div>
</template>

<style scoped lang="scss">
.l-flex {
  min-height: 100vh;
  display: flex;

  &__half {
    flex: 1 1 0%;
    padding: 1.5rem 2.75rem;
  }
}

.auth {
  &__left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__right {
    background-color: var(--color-black);
  }

  &__header {
    align-self: start;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-item {
      color: #aaaaaa;
    }
  }
}
</style>
