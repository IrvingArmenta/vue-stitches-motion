<template>
  <div class="about">
    <h1 id="titleId">This is an about page {{ variantToggle }}</h1>
    <Button :variant="variantToggle">Testing!</Button>
    <button @click="toggleVariant">Toggle variant</button>
    <button @click="toggleAnime">Animate</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Button from '@/components/Button/index.vue'; // @ is an alias to /src
import { animate } from 'motion';

export default defineComponent({
  name: 'About',
  components: {
    Button
  },
  methods: {
    toggleAnime: function () {
      if (this.animeToggle) {
        this.animeToggle = !this.animeToggle;
        animate('#titleId', {
          fontSize: '8vw'
        });
      } else {
        this.animeToggle = !this.animeToggle;
        animate('#titleId', {
          fontSize: '32px'
        });
      }
    },
    toggleVariant: function () {
      return this.variantToggle === 'primary'
        ? (this.variantToggle = 'secondary')
        : (this.variantToggle = 'primary');
    }
  },
  setup() {
    return {
      variantToggle: ref('primary'),
      animeToggle: ref(true)
    };
  }
});
</script>
