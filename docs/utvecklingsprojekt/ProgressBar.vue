<script setup>
import { computed, ref, onMounted } from 'vue'

const props = defineProps({
  target: {
    type: Number,
    required: true
  },
  value: {
    type: Number,
    default: 0
  }
})

const animValue = ref(0)
const root = ref(null)

function increaseAnimValue() {
  if (animValue.value >= props.value) return
  animValue.value = animValue.value + props.value / 100
  setTimeout(increaseAnimValue, 20)
}

const isComplete = computed(() => animValue.value >= props.target)
const percentage = computed(() => (animValue.value / props.target) * 100)

function startAnim() {
  if (animValue.value) return
  increaseAnimValue()
}

onMounted(() => {
  new IntersectionObserver(
    (entries) => entries[0].isIntersecting && startAnim()
  ).observe(root.value)
})
</script>

<template>
  <div class="progress" :class="{ complete: isComplete }" ref="root">
    <div class="bar" :style="{ width: `${percentage}%` }"></div>
    <div class="overlay">
      <slot>
        {{ Math.floor(animValue).toLocaleString() }} av
        {{ target.toLocaleString() }}
      </slot>
    </div>
  </div>
</template>

<style>
.progress {
  background-color: rgb(73, 73, 73);
  border-radius: 3px;
  position: relative;
  overflow: hidden;
}

.progress .bar {
  background-color: rgb(92, 143, 92);
  height: calc(1em + 15px);
  transition: background-color 1s;
}

.progress .overlay {
  padding: 5px;
  position: absolute;
  top: 0;
  width: 100%;
  color: #fff;
  text-align: center;
  transition: color 1s;
}

.progress.complete .bar {
  background-color: rgb(98, 212, 98);
}
.progress.complete .overlay {
  color: #000;
}
</style>
