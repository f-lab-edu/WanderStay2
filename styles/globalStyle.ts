import { css } from '@emotion/react';

export const globalStyles = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 62.5%;
    font-family: 'NanumSquareNeo', -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  body {
    line-height: 1;
    background-color: white;
  }

  ol,
  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  @font-face {
    font-family: 'NanumSquareNeo';
    font-weight: 300;
    font-style: normal;
    src: url('.fonts/NanumSquareNeoTTF-aLt.eot');
    src: url('./fonts/NanumSquareNeoTTF-aLt.eot?#iefix')
        format('embedded-opentype'),
      url('./fonts/NanumSquareNeoTTF-aLt.woff') format('woff'),
      url('.fonts/NanumSquareNeoTTF-aLt.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'NanumSquareNeo';
    font-weight: 400;
    font-style: normal;
    src: url('./fonts/NanumSquareNeoTTF-bRg.eot');
    src: url('./fonts/NanumSquareNeoTTF-bRg.eot?#iefix')
        format('embedded-opentype'),
      url('./fonts/NanumSquareNeoTTF-bRg.woff') format('woff'),
      url('./fonts/NanumSquareNeoTTF-bRg.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'NanumSquareNeo';
    font-weight: 500;
    font-style: normal;
    src: url('./fonts/NanumSquareNeoTTF-cBd.eot');
    src: url('./fonts/NanumSquareNeoTTF-cBd.eot?#iefix')
        format('embedded-opentype'),
      url('./fonts/NanumSquareNeoTTF-cBd.woff') format('woff'),
      url('./fonts/NanumSquareNeoTTF-cBd.woff2') format('woff2');
    font-display: swap;
  }
  @font-face {
    font-family: 'NanumSquareNeo';
    font-weight: 600;
    font-style: normal;
    src: url('./fonts/NanumSquareNeoTTF-dEb.eot');
    src: url('./fonts/NanumSquareNeoTTF-dEb.eot?#iefix')
        format('embedded-opentype'),
      url('./fonts/NanumSquareNeoTTF-dEb.woff') format('woff'),
      url('./fonts/NanumSquareNeoTTF-dEb.woff2') format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'NanumSquareNeo';
    font-weight: bold;
    font-style: normal;
    src: url('./fonts/NanumSquareNeoTTF-eHv.eot');
    src: url('./fonts/NanumSquareNeoTTF-eHv.eot?#iefix')
        format('embedded-opentype'),
      url('./fonts/NanumSquareNeoTTF-eHv.woff') format('woff'),
      url('./fonts/NanumSquareNeoTTF-eHv.woff2') format('woff2');
    font-display: swap;
  }
`;
