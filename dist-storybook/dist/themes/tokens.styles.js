import { css } from "lit";

export default css`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@100..900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap");

  :root,
  :host {
    --koerber-color-bg: var(--koerber-color-neutral1);
    --koerber-color-bg-alt: var(--koerber-color-neutral3);
    --koerber-color-bg-surface: var(--koerber-color-neutral1);
    --koerber-color-bg-surface-secondary: var(--koerber-color-neutral2);
    --koerber-color-bg-surface-secondary-hover: var(--koerber-color-neutral4);
    --koerber-color-bg-surface-tertiary: var(--koerber-color-neutral3);
    --koerber-color-bg-surface-quaternary: var(--koerber-color-neutral6);
    --koerber-color-bg-surface-overlay: var(--koerber-color-neutral2);
    --koerber-color-bg-fill: var(--koerber-color-acce2);
    --koerber-color-bg-fill-hover: var(--koerber-color-acce2h);
    --koerber-color-bg-fill-pressed: var(--koerber-color-acce2a);
    --koerber-color-bg-fill-disabled: var(--koerber-color-neutral4);
    --koerber-color-bg-fill-secondary: var(--koerber-color-neutral1);
    --koerber-color-bg-fill-secondary-hover: var(--koerber-color-neutral4);
    --koerber-color-bg-fill-tertiary: var(--koerber-color-neutral5);
    --koerber-color-bg-fill-warning: var(--koerber-color-sema1);
    --koerber-color-bg-fill-warning-secondary: var(--koerber-color-sema4);
    --koerber-color-bg-fill-error: var(--koerber-color-sema2);
    --koerber-color-bg-fill-error-hover: var(--koerber-color-sema2h);
    --koerber-color-bg-fill-error-pressed: var(--koerber-color-sema2a);
    --koerber-color-bg-fill-success: var(--koerber-color-sema3);
    --koerber-color-bg-fill-special: var(--koerber-color-sema5);
    --koerber-color-bg-fill-info: var(--koerber-color-sema6);
    --koerber-color-bg-fill-alt: var(--koerber-color-neutral7);
    --koerber-color-bg-fill-support-1: var(--koerber-color-supp1);
    --koerber-color-bg-fill-support-2: var(--koerber-color-supp2);
    --koerber-color-bg-fill-support-3: var(--koerber-color-supp3);
    --koerber-color-bg-fill-support-4: var(--koerber-color-supp4);
    --koerber-color-bg-fill-support-5: var(--koerber-color-supp5);
    --koerber-color-bg-fill-support-6: var(--koerber-color-supp6);
    --koerber-color-bg-fill-support-7: var(--koerber-color-supp7);
    --koerber-color-bg-fill-support-8: var(--koerber-color-supp8);
    --koerber-color-bg-fill-support-9: var(--koerber-color-supp9);
    --koerber-color-bg-fill-support-10: var(--koerber-color-supp10);
    --koerber-color-bg-fill-alt: var(--koerber-color-neutral7);

    --koerber-color-text: var(--koerber-color-acce1);
    --koerber-color-text-bg-fill: var(--koerber-color-neutral1);
    --koerber-color-text-secondary: var(--koerber-color-neutral7);
    --koerber-color-text-tertiary: var(--koerber-color-neutral6);
    --koerber-color-text-disabled: var(--koerber-color-neutral5);
    --koerber-color-text-error: var(--koerber-color-sema2);
    --koerber-color-text-link-disabled: var(--koerber-color-neutral4);
    --koerber-color-text-link: var(--koerber-color-acce2);
    --koerber-color-text-link-hover: var(--koerber-color-acce2h);
    --koerber-color-text-link-pressed: var(--koerber-color-acce2a);
    --koerber-color-text-link-visited: var(--koerber-color-supp4);
    --koerber-color-text-info: var(--koerber-color-sema6);

    --koerber-color-border: var(--koerber-color-neutral6);
    --koerber-color-border-active: var(--koerber-color-neutral6);
    --koerber-color-border-hover: var(--koerber-color-acce2h);
    --koerber-color-border-pressed: var(--koerber-color-acce2a);
    --koerber-color-border-disabled: var(--koerber-color-neutral5);
    --koerber-color-border-secondary: var(--koerber-color-neutral4);
    --koerber-color-border-tertiary: var(--koerber-color-neutral1);
    --koerber-color-border-focus: var(--koerber-color-acce2);
    --koerber-color-border-error: var(--koerber-color-sema2);
    --koerber-color-border-error-hover: var(--koerber-color-sema2h);
    --koerber-color-border-info: var(--koerber-color-sema6);
    --koerber-color-border-info-hover: var(--koerber-color-sema6-40);

    --koerber-color-icon: var(--koerber-color-acce2);
    --koerber-color-icon-hover: var(--koerber-color-acce2h);
    --koerber-color-icon-secondary: var(--koerber-color-acce1);
    --koerber-color-icon-tertiary: var(--koerber-color-neutral7);
    --koerber-color-icon-on-bg-fill: var(--koerber-color-neutral1);
    --koerber-color-icon-disabled: var(--koerber-color-neutral5);
    --koerber-color-icon-link-disabled: var(--koerber-color-neutral4);
    --koerber-color-icon-quaternary: var(--koerber-color-neutral6);
    --koerber-color-icon-error: var(--koerber-color-sema2);
    --koerber-color-icon-warning: var(--koerber-color-sema1);
    --koerber-color-icon-success: var(--koerber-color-sema3);
    --koerber-color-icon-info: var(--koerber-color-sema6);

    --koerber-font-family-default: "Noto Sans", sans-serif;
    --koerber-font-family-code: "Noto Mono", monospace;

    --koerber-text-sm-font-size: 12px;
    --koerber-text-base-font-size: 14px;
    --koerber-text-md-font-size: 16px;
    --koerber-text-lg-font-size: 18px;
    --koerber-text-xl-font-size: 20px;
    --koerber-text-2xl-font-size: 24px;
    --koerber-text-3xl-font-size: 28px;
    --koerber-text-4xl-font-size: 32px;

    --koerber-font-weight-light: 300;
    --koerber-font-weight-regular: 400;
    --koerber-font-weight-bold: 700;
    --koerber-font-weight-black: 900;

    --koerber-text-sm-line-height: 16px;
    --koerber-text-base-line-height: 20px;
    --koerber-text-md-line-height: 24px;
    --koerber-text-lg-line-height: 24px;
    --koerber-text-xl-line-height: 32px;
    --koerber-text-2xl-line-height: 32px;
    --koerber-text-3xl-line-height: 40px;
    --koerber-text-4xl-line-height: 40px;

    --koerber-breakpoints-xs: 576px;
    --koerber-breakpoints-sm: 576px;
    --koerber-breakpoints-md: 786px;
    --koerber-breakpoints-lg: 960px;
    --koerber-breakpoints-xl: 1200px;
    --koerber-breakpoints-2xl: 1400px;

    --koerber-spacing-2xs: 4px;
    --koerber-spacing-xs: 8px;
    --koerber-spacing-s: 16px;
    --koerber-spacing-m: 24px;
    --koerber-spacing-l: 32px;
    --koerber-spacing-xl: 48px;
    --koerber-spacing-2xl: 64px;

    --koerber-border-radius-small: 2px;
    --koerber-border-radius-medium: 4px;
    --koerber-border-radius-large: 8px;
    --koerber-border-radius-x-large: 16px;
    --koerber-border-radius-pill: 9999px;
    --koerber-shape-border-divider: 1px;

    --koerber-shadow-header: 2px 0 1px rgba(35, 38, 37, 0.1);
    --koerber-shadow-sidebar-left: 2px 0 1px rgba(35, 38, 37, 0.1);
    --koerber-shadow-sidebar-right: 2px 0 1px rgba(35, 38, 37, 0.1);
    --koerber-shadow-accordion-nested-edge: 0 0 1px rgba(0, 96, 255, 1);
    --koerber-shadow-card: 8px 0 2px rgba(35, 38, 37, 0.1);

    --koerber-height-size-compact: 32px;
    --koerber-height-size-standard: 40px;
    --koerber-height-size-comfortable: 48px;
    --koerber-height-size-comfortable-xl: 56px;

    --koerber-transition-x-slow: 1000ms;
    --koerber-transition-slow: 500ms;
    --koerber-transition-medium: 250ms;
    --koerber-transition-fast: 150ms;
    --koerber-transition-x-fast: 50ms;

    --koerber-letter-spacing-normal: normal;

    --koerber-border-width-s: 1px;
    --koerber-border-width-m: 2px;

    --koerber-border-offset: 2px;

    --koerber-clickable-size-standard: 24px;
    --koerber-clickable-size-comfortable: 48px;
  }
`;
