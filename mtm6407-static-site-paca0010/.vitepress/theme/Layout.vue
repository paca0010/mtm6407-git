<script setup>
import { useData } from 'vitepress'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.home">
    <!-- <h1>{{ site.title }}</h1>
    <p>{{ site.description }}</p> -->
    <!-- <nav>
      <ul>
        <li><a href="/markdown-examples.html">Markdown Examples</a></li>
        <li><a href="/api-examples.html">API Examples</a></li>
        <li><a href="/culture-vulture.md">Culture Vulture</a></li>
        <li><a href="diary-of-chaos.md">Diary of Chaos</a></li>
      </ul>
    </nav> -->
  </div>


  <div v-else class="else-container">
    <a href="/">Dei's Home</a>
    <Content />
  </div>

  <div class="hero">
  <h1>{{ frontmatter.hero?.name }}</h1>
  <h2>{{ frontmatter.hero?.text }}</h2>
  <p>{{ frontmatter.hero?.tagline }}</p>

  <!-- Features Section -->
  <div class="features row">
    <div
      v-for="feature in frontmatter.features"
      :key="feature.title"
      class="col-md-4 mb-4"
    >
      <div class="card h-100">
        <img
          v-if="feature.thumbnail"
          :src="feature.thumbnail"
          :alt="'Thumbnail for ' + feature.title"
          class="card-img-top"
        />
        <div class="card-body">
          <h5 class="card-title">{{ feature.title }}</h5>
          <p class="card-text">{{ feature.details }}</p>
          <a :href="feature.link" class="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  </div>
</div>

  <!-- <div class="hero">
    <h1>{{ frontmatter.hero?.name }}</h1>
    <h2>{{ frontmatter.hero?.text }}</h2>
    <p>{{ frontmatter.hero?.tagline }}</p>

    <div class="features">
      <div v-for="feature in frontmatter.features" :key="feature.title" class="feature-box">
        <h2>{{ feature.title }}</h2>
        <div v-if="feature.thumbnail">
            <a :href="feature.link">
                <img :src="feature.thumbnail" alt="Thumbnail for {{ feature.title }}" class="thumbnail" />
            </a>
        </div>
        <p>{{ feature.details }}</p>
        <a :href="feature.link">Read More</a>
      </div>
    </div>
  </div>

  Duplicate the content inside the culture vulture -->
  <!-- <div class="content"> 
    <h1>{{ frontmatter.title }}</h1>
    <p>{{ frontmatter.description }}</p>
    <Content />
  </div> -->
</template>
