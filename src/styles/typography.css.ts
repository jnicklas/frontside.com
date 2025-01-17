import { globalStyle, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import vars, { darkThemeQuery, desktopQuery, laptopQuery } from './frontside-theme.css';

import arrowWhite from '../img/q3-2021/arrow-white.svg';
import arrowBlue from '../img/q3-2021/arrow-blue.svg';
import arrowGreen from '../img/q3-2021/arrow-green.svg';

export const textXs = style({
  fontSize: vars.fontSize['xs'],
  lineHeight: vars.lineHeights['xs'],
  letterSpacing: vars.letterSpacing['xs'],
});

export const textSm = style({
  fontSize: vars.fontSize['sm'],
  lineHeight: vars.lineHeights['sm'],
  letterSpacing: vars.letterSpacing['sm'],
});

export const textSmCaps = style([textSm, {
  textTransform: 'uppercase',
}]);

export const boldCaps = style({
  fontWeight: vars.fontWeights.extrabold,
  textTransform: 'uppercase',
});

export const textMd = style({
  fontSize: vars.fontSize['base'],
  lineHeight: vars.lineHeights['base'],
  letterSpacing: vars.letterSpacing['base'],
});

export const textLg = style({
  fontSize: vars.fontSize['lg'],
  lineHeight: vars.lineHeights['lg'],
  letterSpacing: vars.letterSpacing['lg'],
});

export const textXl = style({
  fontSize: vars.fontSize['xl'],
  lineHeight: vars.lineHeights['xl'],
  letterSpacing: vars.letterSpacing['xl'],
});

export const text2Xl = style({
  fontSize: vars.fontSize['2xl'],
  lineHeight: vars.lineHeights['2xl'],
  letterSpacing: vars.letterSpacing['2xl'],
});

export const text3Xl = style({
  fontSize: vars.fontSize['2xl'],
  lineHeight: vars.lineHeights['2xl'],
  letterSpacing: vars.letterSpacing['2xl'],

  '@media': {
    [laptopQuery]: {
      fontSize: vars.fontSize['3xl'],
      lineHeight: vars.lineHeights['3xl'],
      letterSpacing: vars.letterSpacing['3xl'],
    }
  }
});

export const textExtrabold = style({
  fontWeight: vars.fontWeights.extrabold,
});

export const textUppercase = style({
  textTransform: 'uppercase',
});

export const textCentered = style({
  textAlign: 'center',
});

export const heading3Xl = style([text3Xl, boldCaps]);

export const heading2Xl = style([text2Xl, boldCaps]);

export const headingXl = style([textXl, boldCaps]);

export const headingLg = style([textLg, boldCaps]);

export const headingXlNoMargin = style([headingXl, {
  marginTop: 0,
  marginBottom: 0,
}]);

export const textPink = style({
  color: vars.colors.pink,
});

export const textSkyblue = style({
  color: vars.colors.skyblue,
});

export const textGreen = style({
  color: vars.colors.green,
});

export const textBlueDashWhite = style({
  color: vars.colors.blue,
  '@media': {
    [darkThemeQuery]: {
      color: vars.colors.white,
    }
  }
});

export const indentLine = style({
  display: 'inline-block',
  width: '2em',
  height: '1em',
});

export const fillBlueDashWhite = style({
  fill: vars.colors.blue,
  '@media': {
    [darkThemeQuery]: {
      fill: vars.colors.white,
    }
  }
});

const arrowDefinition = {
  content: '""',
  display: 'inline-block',
  width: '0.8em',
  height: '0.8rem',
  background: `url(${arrowWhite}) no-repeat`,
  backgroundSize: 'contain',
}

const baseArrow = style({
  'selectors': {
    '&:before': {
      ...arrowDefinition,
      marginRight: '0.5em',
      marginBottom: '-0.05em',
    }
  }
});

const baseTextArrow = style({
  'selectors': {
    '&:after': {
      ...arrowDefinition,
      marginLeft: '0.5em',
      marginBottom: '-0.1em',
    }
  }
});

export const arrowText = style([baseArrow, {
  'selectors': {
    '&:before': {
      backgroundImage: `url(${arrowBlue})`,
    }
  },
  '@media': {
    [darkThemeQuery]: {
      'selectors': {
        '&:before': {
          backgroundImage: `url(${arrowWhite})`
        }
      }
    }
  }
}]);

export const arrowTextWhite = style([baseArrow]);

export const arrowTextGreen = style([arrowTextWhite, {
  'selectors': {
    '&:before': {
      backgroundImage: `url(${arrowGreen})`,
    }
  }
}]);

export const textArrow = style([baseTextArrow, {
  'selectors': {
    '&:after': {
      backgroundImage: `url(${arrowBlue})`,
    }
  },
  '@media': {
    [darkThemeQuery]: {
      'selectors': {
        '&:after': {
          backgroundImage: `url(${arrowWhite})`
        }
      }
    }
  }
}]);

export const textArrowWhite = style([baseTextArrow]);

export const textArrowGreen = style([textArrowWhite, {
  'selectors': {
    '&:after': {
      backgroundImage: `url(${arrowGreen})`,
    }
  }
}]);

export const featureHeading = style([textXl, {
  marginTop: 0,
  marginBottom: '1rem',
}]);

export const homeBackstageHeading = style([text2Xl, textExtrabold]);

const clipBackgroundToText = style({
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
  fontWeight: vars.fontWeights.extrabold
})

export const textGradientPinkSkyblue = style([clipBackgroundToText, {
  backgroundImage: `linear-gradient(90deg, ${vars.colors.pink}, ${vars.colors.skyblue} 95%)`,
}]);

export const textGradientSkybluePink = style([clipBackgroundToText, {
  backgroundImage: `linear-gradient(90deg, ${vars.colors.skyblue}, ${vars.colors.pink} 95%)`,
}]);

export const textGradientPinkPurple = style([clipBackgroundToText, {
  backgroundImage: `linear-gradient(90deg, ${vars.colors.pink} -20%, ${vars.colors.purple} 95%)`,
}]);

export const textGradientPurpleSkyblue = style([clipBackgroundToText, {
  backgroundImage: `linear-gradient(90deg, ${vars.colors.purple}, ${vars.colors.skyblue} 95%)`,
}]);

export const textGradientSkybluePurple = style([clipBackgroundToText, {
  backgroundImage: `linear-gradient(90deg, ${vars.colors.skyblue}, ${vars.colors.purple} 95%)`,
}]);

export const textGradientDemiSkybluePink = style([clipBackgroundToText, {
  backgroundImage: `linear-gradient(90deg, ${vars.colors.skyblue} -60%, ${vars.colors.pink} 180%)`,
}]);

export const textGradientPurplePink = style([clipBackgroundToText, {
  backgroundImage: `linear-gradient(90deg, ${vars.colors.purple}, ${vars.colors.pink} 95%)`,
}]);

export const textGradientGreenSkyblue = style([clipBackgroundToText, {
  backgroundImage: `linear-gradient(90deg, ${vars.colors.green}, ${vars.colors.skyblue} 95%)`,
}]);

export const textGradientSkyblueGreen = style([clipBackgroundToText, {
  backgroundImage: `linear-gradient(90deg, ${vars.colors.skyblue}, ${vars.colors.green} 95%)`,
}]);

export const textGradientSkyblueVioletPink = style([clipBackgroundToText, {
  backgroundImage: `linear-gradient(90deg, ${vars.colors.skyblue}, ${vars.colors.violet}, ${vars.colors.pink})`,
}]);

export const textBottomGradient = style({
  position: 'relative',
  display: 'inline-block',
  selectors: {
    '&:before': {
      display: 'block',
      content: '" "',
      position: 'absolute',
      bottom: '0.210rem',
      left: 0,
      width: '100%',
      height: '0.200rem',
      background: `linear-gradient(90deg, ${vars.colors.skyblue}, ${vars.colors.pink} 95%)`
    }
  }
});

export const textBottomGreen = style({
  position: 'relative',
  display: 'inline-block',
  selectors: {
    '&:before': {
      display: 'block',
      content: '" "',
      position: 'absolute',
      bottom: '0.210rem',
      left: 0,
      width: '100%',
      height: '0.200rem',
      background: `linear-gradient(90deg, ${vars.colors.green}, ${vars.colors.skyblue} 95%)`
    }
  }
});

export const mardownColumn = style({
  boxSizing: 'border-box',
  width: '100vw',
  overflow: 'hidden',
  padding: vars.space.sm,
  maxWidth: calc('37rem').add(vars.space.sm).add(vars.space.sm).toString(),
  marginLeft: 'auto',
  marginRight: 'auto',

  '@media': {
    [laptopQuery]: {
      paddingLeft: vars.space.xl,
      paddingRight: vars.space.xl,
      maxWidth: calc('37rem').add(vars.space.xl).add(vars.space.xl).toString(),
    },
    [desktopQuery]: {
      paddingLeft: vars.space['2xl'],
      paddingRight: vars.space['2xl'],
      maxWidth: calc('37rem').add(vars.space['2xl']).add(vars.space['2xl']).toString(),
    }
  }
});

globalStyle(`${mardownColumn} h2`, {
  fontSize: '1.4545455rem',
  lineHeight: '1.8181818rem',
  marginTop: '1.4090909rem',
  marginBottom: '1.4090909rem',
  letterSpacing: vars.letterSpacing.xl
});

globalStyle(`${mardownColumn} > h3`, {
  fontSize: '1rem',
  lineHeight: '1.8181818rem',
  marginTop: '1.4090909rem',
  marginBottom: '0',
  fontWeight: vars.fontWeights.bold,
  letterSpacing: vars.letterSpacing.xl,
  textTransform: 'uppercase'
});

globalStyle(`${mardownColumn} > h4`, {
  fontSize: '1rem',
  lineHeight: '2.8181818rem',
  marginTop: '1.4090909rem',
  marginBottom: '0',
  fontWeight: vars.fontWeights.bold,
  letterSpacing: vars.letterSpacing.xl,
});

globalStyle(`${mardownColumn} code[class*="language-"]`, {
  fontSize: '0.85rem'
});

globalStyle(`${mardownColumn} p > code[class*="language-"]`, {
  fontSize: '0.85em'
});

globalStyle(`${mardownColumn} a`, {
  color: 'inherit'
});

globalStyle(`${mardownColumn} p a`, {
  borderBottomWidth: '0.065rem',
  borderBottomStyle: 'dotted',
  borderBottomColor: vars.colors.blue,
  '@media': {
    [darkThemeQuery]: {
      borderBottomColor: vars.colors.white,
    }
  }
});

globalStyle(`${mardownColumn} .markdown-heading-link`, {
  position: 'relative',
  display: 'block',
});

globalStyle(`${mardownColumn} .markdown-heading-link:before`, {
  content: '""',
  backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBkPSJNMTAuMDUgMTEuODljLS4xOS4yMy0uMDguMTItMi41NiAyLjU5YTQuMjIgNC4yMiAwIDAgMS02LTZMMy40MyA2LjZhLjM2LjM2IDAgMCAxIC42Mi4yNEE1LjU2IDUuNTYgMCAwIDAgNC4xOSA4YS4zNC4zNCAwIDAgMS0uMS4zM0wyLjcxIDkuNzFhMi41MyAyLjUzIDAgMCAwIDMuNTggMy41OEw4LjU2IDExYTIuNTMgMi41MyAwIDAgMCAwLTMuNThBMi43OSAyLjc5IDAgMCAwIDcuODcgN2EuMzYuMzYgMCAwIDEtLjE5LS4zNyAxLjU5IDEuNTkgMCAwIDEgLjQ0LS45MmwuMTMtLjEzYS4zNy4zNyAwIDAgMSAuNDItLjA3IDQuMjggNC4yOCAwIDAgMSAxLjA5Ljc4IDQuMjMgNC4yMyAwIDAgMSAuMjkgNS42em00LjQzLTQuNEwxMi41NyA5LjRhLjM2LjM2IDAgMCAxLS41Ny0uMjRBNS41NiA1LjU2IDAgMCAwIDExLjgxIDhhLjM0LjM0IDAgMCAxIC4xLS4zM2wxLjM4LTEuMzlhMi41MyAyLjUzIDAgMCAwLTMuNTgtMy41N0w3LjQ0IDVhMi41MyAyLjUzIDAgMCAwIDAgMy41OCAyLjc5IDIuNzkgMCAwIDAgLjY5LjQ5LjM2LjM2IDAgMCAxIC4xOS4zNyAxLjU5IDEuNTkgMCAwIDEtLjQ0LjkybC0uMTMuMTNhLjM3LjM3IDAgMCAxLS40Mi4wNyA0LjI4IDQuMjggMCAwIDEtMS4wOS0uNzhBNC4yMyA0LjIzIDAgMCAxIDYgNC4xMWMuMTQtLjIzIDAtLjExIDIuNTEtMi41OWE0LjIyIDQuMjIgMCAwIDEgNiA2eiIvPjwvc3ZnPg==)',
  backgroundSize: 'contain',
  height: '16px',
  opacity: 0.3,
  position: 'absolute',
  transform: 'translate(-1.3rem, 0.3em)',
  width: '16px',
});

globalStyle(`${mardownColumn} .markdown-heading-link:hover:before`, {
  opacity: 0.6,
});

globalStyle(`${mardownColumn} img`, {
  width: calc('100%').add(vars.space.sm).add(vars.space.sm).toString(),
  maxWidth: calc('100%').add(vars.space.sm).add(vars.space.sm).toString(),
  marginLeft: calc(vars.space.sm).negate().toString(),
  marginRight: calc(vars.space.sm).negate().toString(),
  '@media': {
    [laptopQuery]: {
      width: calc('100%').add(vars.space.xl).add(vars.space.xl).toString(),
      maxWidth: calc('100%').add(vars.space.xl).add(vars.space.xl).toString(),
      marginLeft: calc(vars.space.xl).negate().toString(),
      marginRight: calc(vars.space.xl).negate().toString(),
    },
    [desktopQuery]: {
      width: calc('100%').add(vars.space['2xl']).add(vars.space['2xl']).toString(),
      maxWidth: calc('100%').add(vars.space['2xl']).add(vars.space['2xl']).toString(),
      marginLeft: calc(vars.space['2xl']).negate().toString(),
      marginRight: calc(vars.space['2xl']).negate().toString(),
    }
  }
});

globalStyle(`${mardownColumn} .blog-post--caption`, {
  fontStyle: 'italic',
  textAlign: 'center',
  paddingRight: vars.space.md,
  paddingLeft: vars.space.md,
})

globalStyle(`${mardownColumn} table`, {
  width: '100%'
});

globalStyle(`${mardownColumn} thead th`, {
  background: vars.colors.blue,
  color: vars.colors.white,
  textTransform: 'uppercase',
  textAlign: 'left',
  paddingLeft: vars.space['2xs'],
  paddingTop: vars.space['3xs'],
  paddingBottom: vars.space['3xs'],
  fontSize: vars.fontSize.sm,
  letterSpacing: vars.letterSpacing.sm,
});

globalStyle(`${mardownColumn} tbody td`, {
  paddingLeft: vars.space['2xs'],
  paddingTop: vars.space['3xs'],
  paddingBottom: vars.space['3xs'],
  borderBottomColor: vars.colors.gray,
  borderBottomStyle: 'solid',
  borderBottomWidth: '0.035rem',
});

globalStyle(`${mardownColumn} [class*="language-"]`, {
  '@media': {
    [darkThemeQuery]: {
      background: 'rgba(38, 171, 232, 0.1)',
      color: '#c2d0e6'
    }
  }
});

globalStyle(`${mardownColumn} [class*="language-"] [class*="language-"]`, {
  background: 'none',
});

const markdownBlockDescription = {
  lineHeight: '1.4090909rem',
  marginTop: '0',
  marginBottom: '1.4090909rem',
};

globalStyle(`${mardownColumn} p`, markdownBlockDescription);

globalStyle(`${mardownColumn} > ul`, markdownBlockDescription);

globalStyle(`${mardownColumn} > ol`, markdownBlockDescription);

globalStyle(`${mardownColumn} > table`, markdownBlockDescription);

globalStyle(`${mardownColumn} pre`, markdownBlockDescription);

globalStyle(`${mardownColumn} > .gatsby-highlight`, markdownBlockDescription);

globalStyle(`${mardownColumn} > blockquote`, {
  ...markdownBlockDescription,
  borderLeft: `0.3rem solid rgba(20, 49, 93, 0.3)`,
  paddingLeft: '1.4090909rem',
  marginLeft: '-0.3rem',
  marginRight: '1.4090909rem',
  fontSize: '0.90rem',
  '@media': {
    [darkThemeQuery]: {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    }
  }
});

export const bigQuote = style([text3Xl, {
  fontWeight: vars.fontWeights.bold,
  margin: 0,
  textAlign: 'center',

  '@media': {
    [laptopQuery]: {
      marginRight: vars.space['2xl'],
      marginLeft: vars.space['2xl'],
    }
  }
}]);

export const bigQuoteAuthor = style([textLg, {
  marginBottom: vars.space['lg'],
  textAlign: 'center',
}]);

export const peopleHeroHeading = style([heading3Xl, textGradientPinkSkyblue]);

export const textLink = style([textBlueDashWhite, textBottomGradient, {
  selectors: {
    '&:before': {
      height: '0.1rem',
      bottom: '0rem',
    }
  }
}]);
