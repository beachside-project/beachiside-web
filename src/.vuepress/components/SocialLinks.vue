<template>
  <div class="socialnav-wrapper">
    <ul class="socialnav-items">
      <li class="socialnav-item">
        <a href="https://twitter.com/BEACH_SIDE" target="_blank">
          <font-awesome-icon :icon="['fab', 'twitter']" size="3x" />
        </a>
      </li>

      <li class="socialnav-item">
        <a href="https://www.facebook.com/atsushi.yokohama?ref=bookmarks" target="_blank">
          <font-awesome-icon :icon="['fab', 'facebook']" size="3x" />
        </a>
      </li>
      <li class="socialnav-item">
        <a href="https://github.com/beachside-project" target="_blank">
          <font-awesome-icon :icon="['fab', 'github-square']" size="3x" />
        </a>
      </li>
      <li class="socialnav-item">
        <a href target="_blank">
          <font-awesome-icon :icon="['fab', 'linkedin']" size="3x" />
        </a>
      </li>
      <li class="socialnav-item">
        <a href="https://www.slideshare.net/ATSUSHIYOKOHAMA" target="_blank">
          <font-awesome-icon :icon="['fab', 'slideshare']" size="3x" />
        </a>
      </li>
    </ul>
  </div>
</template>

<style>
a {
  color: #2c3e50;
}

.socialnav-wrapper {
  position: relative;
  text-align: center;
  height: 100%;
  z-index: 1;
  margin-bottom: 5rem;
}

.socialnav-items {
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  list-style: none;
}

.socialnav-item {
  display: inline-block;
  vertical-align: top;
  padding: 0 0.9rem;
}
</style>