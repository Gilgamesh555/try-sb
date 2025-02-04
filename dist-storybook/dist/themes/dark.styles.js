import { css } from "lit";

export default css`
  :host,
  .koerber-theme-dark {
    color-scheme: dark;

    --koerber-color-acce1: #232625;
    --koerber-color-acce2: #0060ff;
    --koerber-color-acce2h: #4a8fff;
    --koerber-color-acce2a: #00358c;

    --koerber-color-neutral1: #ffffff;
    --koerber-color-neutral2: #fafafa;
    --koerber-color-neutral3: #f5f5f5;
    --koerber-color-neutral4: #e6e6e6;
    --koerber-color-neutral5: #999999;
    --koerber-color-neutral6: #6f6f6f;
    --koerber-color-neutral7: #373737;

    --koerber-color-sema1: #ffd377;
    --koerber-color-sema2: #ce3800;
    --koerber-color-sema2h: #bd5757;
    --koerber-color-sema2a: #801919;
    --koerber-color-sema3: #84b98b;
    --koerber-color-sema4: #df7c20;
    --koerber-color-sema5: #7b6aa9;
    --koerber-color-sema6: #2d78c1;

    --koerber-color-supp1: #0e8385;
    --koerber-color-supp2: #734b6d;
    --koerber-color-supp3: #4e7599;
    --koerber-color-supp4: #4421af;
    --koerber-color-supp5: #546b6b;
    --koerber-color-supp6: #8c564b;
    --koerber-color-supp7: #c6263a;
    --koerber-color-supp8: #c94081;
    --koerber-color-supp9: #946f18;
    --koerber-color-supp10: #ad603a;
  }

  .koerber-scroll-lock {
    padding-right: var(--koerber-scroll-lock-size) !important;
    overflow: hidden !important;
  }

  .koerber-toast-stack {
    --koerber-toast-stack-spacing: 24px;
    --koerber-toast-stack-right-spacing: 24px;
    --koerber-toast-min-width: 300px;
    --koerber-z-index-toast: 950;
    position: fixed;
    bottom: var(--koerber-toast-stack-spacing);
    inset-inline-end: 0;
    z-index: var(--koerber-z-index-toast);
    width: var(--koerber-toast-min-width);
    margin-right: var(--koerber-toast-stack-right-spacing);
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
  }

  .koerber-alert-parent {
    position: relative;
  }
`;
