<template>
  <div class="social-container">
    <a href="https://twitter.com/BEACH_SIDE" target="_blank" rel="noopener">
      <font-awesome-icon :icon="['fab', 'twitter']" size="3x" />
    </a>
    <a
      href="https://www.facebook.com/atsushi.yokohama?ref=bookmarks"
      target="_blank"
      rel="noopener"
    >
      <font-awesome-icon :icon="['fab', 'facebook']" size="3x" />
    </a>
    <a href="https://github.com/beachside-project" target="_blank">
      <font-awesome-icon :icon="['fab', 'github-square']" size="3x" />
    </a>
    <a
      href="https://www.linkedin.com/in/atsushi-yokohama/"
      target="_blank"
      rel="noopener"
    >
      <font-awesome-icon :icon="['fab', 'linkedin']" size="3x" />
    </a>
    <a
      href="https://www.slideshare.net/ATSUSHIYOKOHAMA"
      target="_blank"
      rel="noopener"
    >
      <font-awesome-icon :icon="['fab', 'slideshare']" size="3x" />
    </a>
  </div>
</template>

<style>
a {
  color: #2c3e50;
}

.social-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.social-container a {
  margin: 0px 10px;
}
</style>