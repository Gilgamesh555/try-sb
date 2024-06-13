import { css } from "lit";
      export default css`
:root {
  --koerber-font-family-default: 'Noto Sans', sans-serif;
  --koerber-font-family-code: 'Noto Mono', monospace;
  --koerber-text-sm-font-size: 12px;
  --koerber-text-sm-line-height: 16px;
  --koerber-text-base-font-size: 14px;
  --koerber-text-base-line-height: 20px;
  --koerber-text-md-font-size: 16px;
  --koerber-text-md-line-height: 24px;
  --koerber-text-lg-font-size: 18px;
  --koerber-text-lg-line-height: 24px;
  --koerber-text-xl-font-size: 20px;
  --koerber-text-xl-line-height: 32px;
  --koerber-text-2xl-font-size: 24px;
  --koerber-text-2xl-line-height: 32px;
  --koerber-text-3xl-font-size: 28px;
  --koerber-text-3xl-line-height: 40px;
  --koerber-text-4xl-font-size: 32px;
  --koerber-text-4xl-line-height: 40px;
  --koerber-font-weight-light: 300;
  --koerber-font-weight-regular: 400;
  --koerber-font-weight-bold: 700;
  --koerber-font-weight-black: 900;
  --koerber-line-max-width: 66ch;
}

.koerber-font-family-default {
  font-family: var(--koerber-font-family-default) !important;
}

.koerber-font-family-code {
  font-family: var(--koerber-font-family-code) !important;
}

.koerber-text-sm {
  font-size: var(--koerber-text-sm-font-size);
  line-height: var(--koerber-text-sm-line-height);
}

.koerber-text-base {
  font-size: var(--koerber-text-base-font-size);
  line-height: var(--koerber-text-base-line-height);
}

.koerber-text-md {
  font-size: var(--koerber-text-md-font-size);
  line-height: var(--koerber-text-md-line-height);
}

.koerber-text-lg {
  font-size: var(--koerber-text-lg-font-size);
  line-height: var(--koerber-text-lg-line-height);
}

.koerber-text-xl {
  font-size: var(--koerber-text-xl-font-size);
  line-height: var(--koerber-text-xl-line-height);
}

.koerber-text-2xl {
  font-size: var(--koerber-text-2xl-font-size);
  line-height: var(--koerber-text-2xl-line-height);
}

.koerber-text-3xl {
  font-size: var(--koerber-text-3xl-font-size);
  line-height: var(--koerber-text-3xl-line-height);
}

.koerber-text-4xl {
  font-size: var(--koerber-text-4xl-font-size);
  line-height: var(--koerber-text-4xl-line-height);
}

.koerber-font-weight-light {
  font-weight: var(--koerber-font-weight-light);
}

.koerber-font-weight-regular {
  font-weight: var(--koerber-font-weight-regular);
}

.koerber-font-weight-bold {
  font-weight: var(--koerber-font-weight-bold);
}

.koerber-font-weight-black {
  font-weight: var(--koerber-font-weight-black);
}

.koerber-optimal-line-length {
  max-width: var(--koerber-line-max-width);
}
`;