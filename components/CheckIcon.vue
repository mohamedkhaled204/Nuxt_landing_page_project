<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M7.31353 11.2177L4.46873 8.37294L3.5 9.33485L7.31353 13.1484L15.5 4.96191L14.5381 4L7.31353 11.2177Z"
      :fill="color"
    />
    <circle
      cx="8.5"
      cy="8.5"
      r="7.8"
      :stroke="color"
      stroke-width="1.4"
    />
  </svg>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: "#0F6E32" 
  }
})
</script>
