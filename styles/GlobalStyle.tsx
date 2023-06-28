import { Global, css } from '@emotion/react';

export const globalStyles = (
  <Global
    styles={css`
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
        font-family: 'NanumSquareNeoTTF-aLt', -apple-system, BlinkMacSystemFont,
          system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
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
        font-family: 'NanumSquareNeoTTF-aLt';
        src: url('../public/fonts/NanumSquareNeoTTF-aLT.woff');
        font-weigh: 300;
      }

      @font-face {
        font-family: 'NanumSquareNeoTTF-bRg';
        src: url('../public/fonts/NanumSquareNeoTTF-bRg.woff');
        font-weigh: 400;
      }

      @font-face {
        font-family: 'NanumSquareNeoTTF-cBd';
        src: url('../public/fonts/NanumSquareNeoTTF-cBd.woff');
        font-weigh: 500;
      }

      @font-face {
        font-family: 'NanumSquareNeoTTF-dEb';
        src: url('../public/fonts/NanumSquareNeoTTF-dEb.woff');
        font-weigh: 600;
      }

      @font-face {
        font-family: 'NanumSquareNeoTTF-eHv';
        src: url('../public/fonts/NanumSquareNeoTTF-eHv.woff');
        font-weigh: bold;
      }
    `}
  />
);