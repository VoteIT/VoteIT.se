<script setup lang="ts">
import { computed, watch } from 'vue'
import useFeed from './useFeed'
import { dateFormat } from './utils'

const props = defineProps<{
  slug: string
}>()

const { fetchArticle, getArticle } = useFeed('voteit')

const article = computed(() => getArticle(props.slug))

const pubFormat = computed(() => {
  return article.value ? dateFormat(article.value.published) : ''
})

watch(
  () => props.slug,
  async (slug) => {
    if (article.value) return
    await fetchArticle(slug)
  },
  { immediate: true }
)
</script>

<template>
  <div v-if="article">
    <hgroup>
      <p v-if="article.kicker" class="meta">
        {{ article.kicker }} • {{ pubFormat }}
      </p>
      <p v-else class="meta">
        {{ pubFormat }}
      </p>
      <h1>{{ article.title }}</h1>
      <p v-if="article.image">
        <img :src="article.image" />
      </p>
      <div class="description" v-html="article.description"></div>
    </hgroup>
    <div v-html="article.body"></div>
  </div>
</template>

<style scoped>
.description {
  font-size: 14pt;
}

.meta {
  color: grey;
  margin: 0;
  line-height: 1.4;
  font-size: 8pt;
  text-transform: uppercase;
  letter-spacing: 0.15em;
}
</style>
