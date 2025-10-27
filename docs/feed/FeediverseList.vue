<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'
import { VPLink } from 'vitepress/theme'

import useFeed from './useFeed'
import { dateFormat } from './utils'

const props = defineProps<{
  maxItems?: number
}>()

const { articles, fetchArticles } = useFeed('voteit')

const feed = computed(() =>
  (props.maxItems
    ? articles.value.slice(0, props.maxItems)
    : articles.value
  ).map((a) => ({ ...a, pubFormat: dateFormat(a.published) }))
)

onBeforeMount(fetchArticles)
</script>

<template>
  <div>
    <VPLink
      v-for="article in feed"
      class="article d-flex ga-1"
      :href="`/feed/#${article.slug}`"
    >
      <div class="flex-grow-1">
        <hgroup>
          <p v-if="article.kicker">
            {{ article.kicker }} • {{ article.pubFormat }}
          </p>
          <p v-else>
            {{ article.pubFormat }}
          </p>
          <h3>{{ article.title }}</h3>
        </hgroup>
        <div class="description" v-html="article.description"></div>
      </div>
      <div v-if="article.image" class="img flex-shrink-0">
        <img :src="article.image" />
      </div>
    </VPLink>
    <slot name="append"></slot>
  </div>
</template>

<style scoped>
.article {
  margin: 2em 0;
}
.d-flex {
  display: flex;
}

.flex-grow-1 {
  flex-grow: 1;
}
.flex-shrink-0 {
  flex-shrink: 0;
}

.ga-1 {
  gap: 8px;
}

.img {
  width: 33.3333%;
}

h3 {
  margin: 0;
}

a {
  text-decoration: none;
  color: var(--vp-c-text-1);
}

a h3 {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
}

a:hover h3 {
  color: var(--vp-c-brand-2);
  text-decoration: none;
}

.description {
  color: var(--vp-c-text-1);
}

hgroup p {
  color: grey;
  margin: 0;
  line-height: 1.4;
  font-size: 8pt;
  text-transform: uppercase;
  letter-spacing: 0.15em;
}
</style>
