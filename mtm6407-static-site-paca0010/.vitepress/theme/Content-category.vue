<script setup>
import { useData } from 'vitepress'

// Access frontmatter and site data
const { frontmatter } = useData()
</script>

<template>
  <div class="content-category-layout">
    <!-- Hero Section -->
    <div class="hero">
      <h1>{{ frontmatter.hero?.name }}</h1>
      <h2>{{ frontmatter.hero?.text }}</h2>
      <p>{{ frontmatter.hero?.tagline }}</p>
    </div>

    <!-- Features Section -->
    <div class="features">
      <div v-for="feature in frontmatter.features" :key="feature.title" class="feature-box">
        <h2>{{ feature.title }}</h2>
        <div v-if="feature.thumbnail">
            <a :href="feature.link">
                <img :src="feature.thumbnail" alt="Thumbnail for {{ feature.title }}" class="thumbnail" />
            </a>
        </div>
        <p>{{ feature.details }}</p>
        <a :href="feature.link" class="btn btn-primary">read More</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-category-layout {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.hero {
  text-align: center;
  margin-bottom: 40px;
}

.hero h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
}

.hero h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.hero p {
  font-size: 1.2em;
  color: #666;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.feature-box {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  text-align: center;
}

.feature-box img.thumbnail {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

.feature-box h2 {
  font-size: 1.25em;
  margin-bottom: 10px;
}

.feature-box p {
  font-size: 1em;
  color: #555;
}

.feature-box a.btn {
  margin-top: 10px;
  display: inline-block;
  padding: 10px 15px;
  background-color: #007acc;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}

.feature-box a.btn:hover {
  background-color: #005f99;
}

</style>