import { css } from '@stitches/core';

const buttonStyles = css({
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'lightgray'
  },
  transition: 'background-color 200ms ease-in-out',
  variants: {
    color: {
      primary: {
        backgroundColor: 'red',
        color: 'white'
      },
      secondary: {
        backgroundColor: 'blue',
        color: 'white'
      }
    }
  }
});

export default buttonStyles;
