<template>
  <button class=" text-blue-900 text-2xl" v-if="state === 'next'">
    <span class="flex inline-flex text-blue-900">
      <svg
        width="24"
        height="24"
        viewBox="0 0 1792 1792"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="rgba(30, 58, 138, 0.8)"
          d="M429 1651q-19 19-32 13t-13-32v-1472q0-26 13-32t32 13l710 710q9 9 13 19v-678q0-26 19-45t45-19h128q26 0 45 19t19 45v1408q0 26-19 45t-45 19h-128q-26 0-45-19t-19-45v-678q-4 10-13 19z"
        />
      </svg>
      <span class="-mt-1">
        <slot></slot>
      </span>
    </span>
  </button>
  <button class=" text-blue-900 text-2xl" v-else>
    <span class="inline-flex text-blue-900">
      <span class="-mt-1">
        <slot name="prev"></slot>
      </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="rgba(30, 58, 138, 0.8)"
            d="M1363 141q19-19 32-13t13 32v1472q0 26-13 32t-32-13l-710-710q-9-9-13-19v678q0 26-19 45t-45 19h-128q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h128q26 0 45 19t19 45v678q4-10 13-19z"
          />
        </svg>
    </span>
  </button>
</template>
<script>
export default {
  props: ["state"],
};
</script>
