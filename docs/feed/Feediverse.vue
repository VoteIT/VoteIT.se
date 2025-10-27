<script setup lang="ts">
import { shallowRef } from 'vue'
import FeediverseItem from './FeediverseItem.vue'
import FeediverseList from './FeediverseList.vue'

function getSlug() {
  const { hash } = location
  if (!hash) return
  return hash.startsWith('#') ? hash.slice(1) : hash
}

const slug = shallowRef(getSlug())

window.addEventListener('hashchange', () => {
  slug.value = getSlug()
})
</script>

<template>
  <FeediverseItem v-if="slug" :slug="slug" />
  <template v-else>
    <h1>Senaste nytt</h1>
    <FeediverseList />
  </template>
</template>
