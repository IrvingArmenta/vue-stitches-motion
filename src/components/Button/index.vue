<template>
  <button :class="`${buttonStyle}`"><slot></slot></button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import buttonStyles from './styles';
import type * as Stitches from '@stitches/core';

export default defineComponent({
  name: 'Button',
  data: (props) => {
    return {
      buttonStyle: buttonStyles({ color: props.variant })
    };
  },
  watch: {
    variant: function (
      prop: Stitches.VariantProps<typeof buttonStyles>['color']
    ): void {
      this.buttonStyle = buttonStyles({ color: prop });
    }
  },
  props: {
    variant: {
      type: String as PropType<
        Stitches.VariantProps<typeof buttonStyles>['color']
      >,
      required: true
    }
  }
});
</script>
