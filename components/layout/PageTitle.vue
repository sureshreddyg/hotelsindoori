<template>
  <section
    class="page-title"
    style="background-image: url(/images/background/page-title-bg.png)"
  >
    <div class="auto-container">
      <div class="title-outer text-center">
        <h1 class="title">{{ title }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PageTitle',
  props: {
    title: {
      type: String,
    },
  },
};
</script>
