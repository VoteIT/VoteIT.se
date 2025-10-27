import { sorted } from 'itertools'
import { computed, reactive } from 'vue'

interface IArticle {
  body: string
  childen: {}[]
  created: string
  description: string
  image: string | null
  kicker: string
  pos_x: number
  pos_y: number
  published: string
  slug: string
  tags: {
    name: string
    slug: string
  }[]
  title: string
  updated: string
  users: {
    first_name: string
    image: string | null
    last_name: string
    pos_x: number
    pos_y: number
    username: string
  }[]
}

const articleStore = reactive(new Map<string, IArticle>())

function getApiUrl(path: string) {
  return `https://voteit.se/api/${path}`
}

export default function useFeed(tag: string) {
  async function fetchArticle(slug: string) {
    const response = await fetch(getApiUrl(`article/${slug}/`))
    const article: IArticle = await response.json()
    articleStore.set(article.slug, article)
  }

  async function fetchArticles(slug: string) {
    const response = await fetch(getApiUrl(`article/?tags__slug=${tag}`))
    const articles: IArticle[] = await response.json()
    for (const article of articles) articleStore.set(article.slug, article)
  }

  function getArticle(slug: string) {
    return articleStore.get(slug)
  }

  return {
    articles: computed(() =>
      sorted(articleStore.values(), (a) => a.published, true)
    ),
    fetchArticle,
    fetchArticles,
    getArticle
  }
}
