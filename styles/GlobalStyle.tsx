import {css} from '@emotion/react';

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
        font-family: 'NanumSquareNeo', -apple-system, BlinkMacSystemFont,
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
        font-family: 'NanumSquareNeo';
        font-weight: 300;
        font-style: normal;
        src: url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-aLt.eot');
        src: url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-aLt.eot?#iefix') format('embedded-opentype'),
        url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-aLt.woff2') format('woff2'),
        url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-aLt.woff') format('woff'),
        url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-aLt.ttf') format("truetype");
        font-display: swap;
    }
    @font-face {
        font-family: 'NanumSquareNeo';
        font-weight: 400;
        font-style: normal;
        src: url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-bRg.eot');
        src: url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-bRg.eot?#iefix') format('embedded-opentype'),
        url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-bRg.woff2') format('woff2'),
        url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-bRg.woff') format('woff'),
        url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-bRg.ttf') format("truetype");
        font-display: swap;
    }
    @font-face {
        font-family: 'NanumSquareNeo';
        font-weight: 700;
        font-style: normal;
        src: url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-cBd.eot');
        src: url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-cBd.eot?#iefix') format('embedded-opentype'),
        url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-cBd.woff2') format('woff2'),
        url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-cBd.woff') format('woff'),
        url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-cBd.ttf') format("truetype");
        font-display: swap;
    }
    @font-face {
        font-family: 'NanumSquareNeo';
        font-weight: 800;
        font-style: normal;
        src: url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-dEb.eot');
        src: url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-dEb.eot?#iefix') format('embedded-opentype'),
        url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-dEb.woff2') format('woff2'),
        url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-dEb.woff') format('woff'),
        url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-dEb.ttf') format("truetype");
        font-display: swap;
    }
    @font-face {
        font-family: 'NanumSquareNeo';
        font-weight: 900;
        font-style: normal;
        src: url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-eHv.eot');
        src: url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-eHv.eot?#iefix') format('embedded-opentype'),
        url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-eHv.woff2') format('woff2'),
        url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-eHv.woff') format('woff'),
        url('https://webfontworld.github.io/NanumSquareNeo/NanumSquareNeo-eHv.ttf') format("truetype");
        font-display: swap;
    }
`;