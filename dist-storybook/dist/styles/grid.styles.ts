import { css } from "lit";
      export default css`
.col-auto {
  grid-column: auto;
}

.col-span-1 {
  grid-column: span 1 / span 1;
}

.col-span-10 {
  grid-column: span 10 / span 10;
}

.col-span-11 {
  grid-column: span 11 / span 11;
}

.col-span-12 {
  grid-column: span 12 / span 12;
}

.col-span-2 {
  grid-column: span 2 / span 2;
}

.col-span-3 {
  grid-column: span 3 / span 3;
}

.col-span-4 {
  grid-column: span 4 / span 4;
}

.col-span-5 {
  grid-column: span 5 / span 5;
}

.col-span-6 {
  grid-column: span 6 / span 6;
}

.col-span-7 {
  grid-column: span 7 / span 7;
}

.col-span-8 {
  grid-column: span 8 / span 8;
}

.col-span-9 {
  grid-column: span 9 / span 9;
}

.col-span-full {
  grid-column: 1 / -1;
}

.col-start-1 {
  grid-column-start: 1;
}

.col-start-10 {
  grid-column-start: 10;
}

.col-start-11 {
  grid-column-start: 11;
}

.col-start-12 {
  grid-column-start: 12;
}

.col-start-13 {
  grid-column-start: 13;
}

.col-start-2 {
  grid-column-start: 2;
}

.col-start-3 {
  grid-column-start: 3;
}

.col-start-4 {
  grid-column-start: 4;
}

.col-start-5 {
  grid-column-start: 5;
}

.col-start-6 {
  grid-column-start: 6;
}

.col-start-7 {
  grid-column-start: 7;
}

.col-start-8 {
  grid-column-start: 8;
}

.col-start-9 {
  grid-column-start: 9;
}

.col-start-auto {
  grid-column-start: auto;
}

.col-end-1 {
  grid-column-end: 1;
}

.col-end-10 {
  grid-column-end: 10;
}

.col-end-11 {
  grid-column-end: 11;
}

.col-end-12 {
  grid-column-end: 12;
}

.col-end-13 {
  grid-column-end: 13;
}

.col-end-2 {
  grid-column-end: 2;
}

.col-end-3 {
  grid-column-end: 3;
}

.col-end-4 {
  grid-column-end: 4;
}

.col-end-5 {
  grid-column-end: 5;
}

.col-end-6 {
  grid-column-end: 6;
}

.col-end-7 {
  grid-column-end: 7;
}

.col-end-8 {
  grid-column-end: 8;
}

.col-end-9 {
  grid-column-end: 9;
}

.col-end-auto {
  grid-column-end: auto;
}

.row-auto {
  grid-row: auto;
}

.row-span-1 {
  grid-row: span 1 / span 1;
}

.row-span-10 {
  grid-row: span 10 / span 10;
}

.row-span-11 {
  grid-row: span 11 / span 11;
}

.row-span-12 {
  grid-row: span 12 / span 12;
}

.row-span-2 {
  grid-row: span 2 / span 2;
}

.row-span-3 {
  grid-row: span 3 / span 3;
}

.row-span-4 {
  grid-row: span 4 / span 4;
}

.row-span-5 {
  grid-row: span 5 / span 5;
}

.row-span-6 {
  grid-row: span 6 / span 6;
}

.row-span-7 {
  grid-row: span 7 / span 7;
}

.row-span-8 {
  grid-row: span 8 / span 8;
}

.row-span-9 {
  grid-row: span 9 / span 9;
}

.row-span-full {
  grid-row: 1 / -1;
}

.row-start-1 {
  grid-row-start: 1;
}

.row-start-10 {
  grid-row-start: 10;
}

.row-start-11 {
  grid-row-start: 11;
}

.row-start-12 {
  grid-row-start: 12;
}

.row-start-13 {
  grid-row-start: 13;
}

.row-start-2 {
  grid-row-start: 2;
}

.row-start-3 {
  grid-row-start: 3;
}

.row-start-4 {
  grid-row-start: 4;
}

.row-start-5 {
  grid-row-start: 5;
}

.row-start-6 {
  grid-row-start: 6;
}

.row-start-7 {
  grid-row-start: 7;
}

.row-start-8 {
  grid-row-start: 8;
}

.row-start-9 {
  grid-row-start: 9;
}

.row-start-auto {
  grid-row-start: auto;
}

.row-end-1 {
  grid-row-end: 1;
}

.row-end-10 {
  grid-row-end: 10;
}

.row-end-11 {
  grid-row-end: 11;
}

.row-end-12 {
  grid-row-end: 12;
}

.row-end-13 {
  grid-row-end: 13;
}

.row-end-2 {
  grid-row-end: 2;
}

.row-end-3 {
  grid-row-end: 3;
}

.row-end-4 {
  grid-row-end: 4;
}

.row-end-5 {
  grid-row-end: 5;
}

.row-end-6 {
  grid-row-end: 6;
}

.row-end-7 {
  grid-row-end: 7;
}

.row-end-8 {
  grid-row-end: 8;
}

.row-end-9 {
  grid-row-end: 9;
}

.row-end-auto {
  grid-row-end: auto;
}

.grid {
  display: grid;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.grid-cols-10 {
  grid-template-columns: repeat(10, minmax(0, 1fr));
}

.grid-cols-11 {
  grid-template-columns: repeat(11, minmax(0, 1fr));
}

.grid-cols-12 {
  grid-template-columns: repeat(12, minmax(0, 1fr));
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.grid-cols-5 {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}

.grid-cols-6 {
  grid-template-columns: repeat(6, minmax(0, 1fr));
}

.grid-cols-7 {
  grid-template-columns: repeat(7, minmax(0, 1fr));
}

.grid-cols-8 {
  grid-template-columns: repeat(8, minmax(0, 1fr));
}

.grid-cols-9 {
  grid-template-columns: repeat(9, minmax(0, 1fr));
}

.grid-cols-none {
  grid-template-columns: none;
}

.grid-rows-1 {
  grid-template-rows: repeat(1, minmax(0, 1fr));
}

.grid-rows-10 {
  grid-template-rows: repeat(10, minmax(0, 1fr));
}

.grid-rows-11 {
  grid-template-rows: repeat(11, minmax(0, 1fr));
}

.grid-rows-12 {
  grid-template-rows: repeat(12, minmax(0, 1fr));
}

.grid-rows-2 {
  grid-template-rows: repeat(2, minmax(0, 1fr));
}

.grid-rows-3 {
  grid-template-rows: repeat(3, minmax(0, 1fr));
}

.grid-rows-4 {
  grid-template-rows: repeat(4, minmax(0, 1fr));
}

.grid-rows-5 {
  grid-template-rows: repeat(5, minmax(0, 1fr));
}

.grid-rows-6 {
  grid-template-rows: repeat(6, minmax(0, 1fr));
}

.grid-rows-7 {
  grid-template-rows: repeat(7, minmax(0, 1fr));
}

.grid-rows-8 {
  grid-template-rows: repeat(8, minmax(0, 1fr));
}

.grid-rows-9 {
  grid-template-rows: repeat(9, minmax(0, 1fr));
}

.grid-rows-none {
  grid-template-rows: none;
}

.gap-2xs {
  gap: var(--koerber-spacing-2xs);
}

.gap-xs {
  gap: var(--koerber-spacing-xs);
}

.gap-s {
  gap: var(--koerber-spacing-s);
}

.gap-m {
  gap: var(--koerber-spacing-m);
}

.gap-l {
  gap: var(--koerber-spacing-l);
}

.gap-xl {
  gap: var(--koerber-spacing-xl);
}

.gap-2xl {
  gap: var(--koerber-spacing-2xl);
}

.gap-x-2xs {
  -moz-column-gap: var(--koerber-spacing-2xs);
  column-gap: var(--koerber-spacing-2xs);
}

.gap-x-xs {
  -moz-column-gap: var(--koerber-spacing-xs);
  column-gap: var(--koerber-spacing-xs);
}

.gap-x-s {
  -moz-column-gap: var(--koerber-spacing-s);
  column-gap: var(--koerber-spacing-s);
}

.gap-x-m {
  -moz-column-gap: var(--koerber-spacing-m);
  column-gap: var(--koerber-spacing-m);
}

.gap-x-l {
  -moz-column-gap: var(--koerber-spacing-l);
  column-gap: var(--koerber-spacing-l);
}

.gap-x-xl {
  -moz-column-gap: var(--koerber-spacing-xl);
  column-gap: var(--koerber-spacing-xl);
}

.gap-x-2xl {
  -moz-column-gap: var(--koerber-spacing-2xl);
  column-gap: var(--koerber-spacing-2xl);
}

.gap-y-2xs {
  row-gap: var(--koerber-spacing-2xs);
}

.gap-y-xs {
  row-gap: var(--koerber-spacing-xs);
}

.gap-y-s {
  row-gap: var(--koerber-spacing-s);
}

.gap-y-m {
  row-gap: var(--koerber-spacing-m);
}

.gap-y-l {
  row-gap: var(--koerber-spacing-l);
}

.gap-y-xl {
  row-gap: var(--koerber-spacing-xl);
}

.gap-y-2xl {
  row-gap: var(--koerber-spacing-2xl);
}

@media (min-width: 0) {
  .xs\\:col-auto {
    grid-column: auto;
  }

  .xs\\:col-span-1 {
    grid-column: span 1 / span 1;
  }

  .xs\\:col-span-10 {
    grid-column: span 10 / span 10;
  }

  .xs\\:col-span-11 {
    grid-column: span 11 / span 11;
  }

  .xs\\:col-span-12 {
    grid-column: span 12 / span 12;
  }

  .xs\\:col-span-2 {
    grid-column: span 2 / span 2;
  }

  .xs\\:col-span-3 {
    grid-column: span 3 / span 3;
  }

  .xs\\:col-span-4 {
    grid-column: span 4 / span 4;
  }

  .xs\\:col-span-5 {
    grid-column: span 5 / span 5;
  }

  .xs\\:col-span-6 {
    grid-column: span 6 / span 6;
  }

  .xs\\:col-span-7 {
    grid-column: span 7 / span 7;
  }

  .xs\\:col-span-8 {
    grid-column: span 8 / span 8;
  }

  .xs\\:col-span-9 {
    grid-column: span 9 / span 9;
  }

  .xs\\:col-span-full {
    grid-column: 1 / -1;
  }

  .xs\\:col-start-1 {
    grid-column-start: 1;
  }

  .xs\\:col-start-10 {
    grid-column-start: 10;
  }

  .xs\\:col-start-11 {
    grid-column-start: 11;
  }

  .xs\\:col-start-12 {
    grid-column-start: 12;
  }

  .xs\\:col-start-13 {
    grid-column-start: 13;
  }

  .xs\\:col-start-2 {
    grid-column-start: 2;
  }

  .xs\\:col-start-3 {
    grid-column-start: 3;
  }

  .xs\\:col-start-4 {
    grid-column-start: 4;
  }

  .xs\\:col-start-5 {
    grid-column-start: 5;
  }

  .xs\\:col-start-6 {
    grid-column-start: 6;
  }

  .xs\\:col-start-7 {
    grid-column-start: 7;
  }

  .xs\\:col-start-8 {
    grid-column-start: 8;
  }

  .xs\\:col-start-9 {
    grid-column-start: 9;
  }

  .xs\\:col-start-auto {
    grid-column-start: auto;
  }

  .xs\\:col-end-1 {
    grid-column-end: 1;
  }

  .xs\\:col-end-10 {
    grid-column-end: 10;
  }

  .xs\\:col-end-11 {
    grid-column-end: 11;
  }

  .xs\\:col-end-12 {
    grid-column-end: 12;
  }

  .xs\\:col-end-13 {
    grid-column-end: 13;
  }

  .xs\\:col-end-2 {
    grid-column-end: 2;
  }

  .xs\\:col-end-3 {
    grid-column-end: 3;
  }

  .xs\\:col-end-4 {
    grid-column-end: 4;
  }

  .xs\\:col-end-5 {
    grid-column-end: 5;
  }

  .xs\\:col-end-6 {
    grid-column-end: 6;
  }

  .xs\\:col-end-7 {
    grid-column-end: 7;
  }

  .xs\\:col-end-8 {
    grid-column-end: 8;
  }

  .xs\\:col-end-9 {
    grid-column-end: 9;
  }

  .xs\\:col-end-auto {
    grid-column-end: auto;
  }

  .xs\\:row-auto {
    grid-row: auto;
  }

  .xs\\:row-span-1 {
    grid-row: span 1 / span 1;
  }

  .xs\\:row-span-10 {
    grid-row: span 10 / span 10;
  }

  .xs\\:row-span-11 {
    grid-row: span 11 / span 11;
  }

  .xs\\:row-span-12 {
    grid-row: span 12 / span 12;
  }

  .xs\\:row-span-2 {
    grid-row: span 2 / span 2;
  }

  .xs\\:row-span-3 {
    grid-row: span 3 / span 3;
  }

  .xs\\:row-span-4 {
    grid-row: span 4 / span 4;
  }

  .xs\\:row-span-5 {
    grid-row: span 5 / span 5;
  }

  .xs\\:row-span-6 {
    grid-row: span 6 / span 6;
  }

  .xs\\:row-span-7 {
    grid-row: span 7 / span 7;
  }

  .xs\\:row-span-8 {
    grid-row: span 8 / span 8;
  }

  .xs\\:row-span-9 {
    grid-row: span 9 / span 9;
  }

  .xs\\:row-span-full {
    grid-row: 1 / -1;
  }

  .xs\\:row-start-1 {
    grid-row-start: 1;
  }

  .xs\\:row-start-10 {
    grid-row-start: 10;
  }

  .xs\\:row-start-11 {
    grid-row-start: 11;
  }

  .xs\\:row-start-12 {
    grid-row-start: 12;
  }

  .xs\\:row-start-13 {
    grid-row-start: 13;
  }

  .xs\\:row-start-2 {
    grid-row-start: 2;
  }

  .xs\\:row-start-3 {
    grid-row-start: 3;
  }

  .xs\\:row-start-4 {
    grid-row-start: 4;
  }

  .xs\\:row-start-5 {
    grid-row-start: 5;
  }

  .xs\\:row-start-6 {
    grid-row-start: 6;
  }

  .xs\\:row-start-7 {
    grid-row-start: 7;
  }

  .xs\\:row-start-8 {
    grid-row-start: 8;
  }

  .xs\\:row-start-9 {
    grid-row-start: 9;
  }

  .xs\\:row-start-auto {
    grid-row-start: auto;
  }

  .xs\\:row-end-1 {
    grid-row-end: 1;
  }

  .xs\\:row-end-10 {
    grid-row-end: 10;
  }

  .xs\\:row-end-11 {
    grid-row-end: 11;
  }

  .xs\\:row-end-12 {
    grid-row-end: 12;
  }

  .xs\\:row-end-13 {
    grid-row-end: 13;
  }

  .xs\\:row-end-2 {
    grid-row-end: 2;
  }

  .xs\\:row-end-3 {
    grid-row-end: 3;
  }

  .xs\\:row-end-4 {
    grid-row-end: 4;
  }

  .xs\\:row-end-5 {
    grid-row-end: 5;
  }

  .xs\\:row-end-6 {
    grid-row-end: 6;
  }

  .xs\\:row-end-7 {
    grid-row-end: 7;
  }

  .xs\\:row-end-8 {
    grid-row-end: 8;
  }

  .xs\\:row-end-9 {
    grid-row-end: 9;
  }

  .xs\\:row-end-auto {
    grid-row-end: auto;
  }

  .xs\\:grid {
    display: grid;
  }

  .xs\\:grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .xs\\:grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }

  .xs\\:grid-cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }

  .xs\\:grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  .xs\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .xs\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .xs\\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .xs\\:grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .xs\\:grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  .xs\\:grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }

  .xs\\:grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }

  .xs\\:grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }

  .xs\\:grid-cols-none {
    grid-template-columns: none;
  }

  .xs\\:grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }

  .xs\\:grid-rows-10 {
    grid-template-rows: repeat(10, minmax(0, 1fr));
  }

  .xs\\:grid-rows-11 {
    grid-template-rows: repeat(11, minmax(0, 1fr));
  }

  .xs\\:grid-rows-12 {
    grid-template-rows: repeat(12, minmax(0, 1fr));
  }

  .xs\\:grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }

  .xs\\:grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }

  .xs\\:grid-rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }

  .xs\\:grid-rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }

  .xs\\:grid-rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  .xs\\:grid-rows-7 {
    grid-template-rows: repeat(7, minmax(0, 1fr));
  }

  .xs\\:grid-rows-8 {
    grid-template-rows: repeat(8, minmax(0, 1fr));
  }

  .xs\\:grid-rows-9 {
    grid-template-rows: repeat(9, minmax(0, 1fr));
  }

  .xs\\:grid-rows-none {
    grid-template-rows: none;
  }

  .xs\\:gap-2xs {
    gap: var(--koerber-spacing-2xs);
  }

  .xs\\:gap-xs {
    gap: var(--koerber-spacing-xs);
  }

  .xs\\:gap-s {
    gap: var(--koerber-spacing-s);
  }

  .xs\\:gap-m {
    gap: var(--koerber-spacing-m);
  }

  .xs\\:gap-l {
    gap: var(--koerber-spacing-l);
  }

  .xs\\:gap-xl {
    gap: var(--koerber-spacing-xl);
  }

  .xs\\:gap-2xl {
    gap: var(--koerber-spacing-2xl);
  }

  .xs\\:gap-x-2xs {
    -moz-column-gap: var(--koerber-spacing-2xs);
    column-gap: var(--koerber-spacing-2xs);
  }

  .xs\\:gap-x-xs {
    -moz-column-gap: var(--koerber-spacing-xs);
    column-gap: var(--koerber-spacing-xs);
  }

  .xs\\:gap-x-s {
    -moz-column-gap: var(--koerber-spacing-s);
    column-gap: var(--koerber-spacing-s);
  }

  .xs\\:gap-x-m {
    -moz-column-gap: var(--koerber-spacing-m);
    column-gap: var(--koerber-spacing-m);
  }

  .xs\\:gap-x-l {
    -moz-column-gap: var(--koerber-spacing-l);
    column-gap: var(--koerber-spacing-l);
  }

  .xs\\:gap-x-xl {
    -moz-column-gap: var(--koerber-spacing-xl);
    column-gap: var(--koerber-spacing-xl);
  }

  .xs\\:gap-x-2xl {
    -moz-column-gap: var(--koerber-spacing-2xl);
    column-gap: var(--koerber-spacing-2xl);
  }

  .xs\\:gap-y-2xs {
    row-gap: var(--koerber-spacing-2xs);
  }

  .xs\\:gap-y-xs {
    row-gap: var(--koerber-spacing-xs);
  }

  .xs\\:gap-y-s {
    row-gap: var(--koerber-spacing-s);
  }

  .xs\\:gap-y-m {
    row-gap: var(--koerber-spacing-m);
  }

  .xs\\:gap-y-l {
    row-gap: var(--koerber-spacing-l);
  }

  .xs\\:gap-y-xl {
    row-gap: var(--koerber-spacing-xl);
  }

  .xs\\:gap-y-2xl {
    row-gap: var(--koerber-spacing-2xl);
  }
}

@media (min-width: 576px) {
  .sm\\:col-auto {
    grid-column: auto;
  }

  .sm\\:col-span-1 {
    grid-column: span 1 / span 1;
  }

  .sm\\:col-span-10 {
    grid-column: span 10 / span 10;
  }

  .sm\\:col-span-11 {
    grid-column: span 11 / span 11;
  }

  .sm\\:col-span-12 {
    grid-column: span 12 / span 12;
  }

  .sm\\:col-span-2 {
    grid-column: span 2 / span 2;
  }

  .sm\\:col-span-3 {
    grid-column: span 3 / span 3;
  }

  .sm\\:col-span-4 {
    grid-column: span 4 / span 4;
  }

  .sm\\:col-span-5 {
    grid-column: span 5 / span 5;
  }

  .sm\\:col-span-6 {
    grid-column: span 6 / span 6;
  }

  .sm\\:col-span-7 {
    grid-column: span 7 / span 7;
  }

  .sm\\:col-span-8 {
    grid-column: span 8 / span 8;
  }

  .sm\\:col-span-9 {
    grid-column: span 9 / span 9;
  }

  .sm\\:col-span-full {
    grid-column: 1 / -1;
  }

  .sm\\:col-start-1 {
    grid-column-start: 1;
  }

  .sm\\:col-start-10 {
    grid-column-start: 10;
  }

  .sm\\:col-start-11 {
    grid-column-start: 11;
  }

  .sm\\:col-start-12 {
    grid-column-start: 12;
  }

  .sm\\:col-start-13 {
    grid-column-start: 13;
  }

  .sm\\:col-start-2 {
    grid-column-start: 2;
  }

  .sm\\:col-start-3 {
    grid-column-start: 3;
  }

  .sm\\:col-start-4 {
    grid-column-start: 4;
  }

  .sm\\:col-start-5 {
    grid-column-start: 5;
  }

  .sm\\:col-start-6 {
    grid-column-start: 6;
  }

  .sm\\:col-start-7 {
    grid-column-start: 7;
  }

  .sm\\:col-start-8 {
    grid-column-start: 8;
  }

  .sm\\:col-start-9 {
    grid-column-start: 9;
  }

  .sm\\:col-start-auto {
    grid-column-start: auto;
  }

  .sm\\:col-end-1 {
    grid-column-end: 1;
  }

  .sm\\:col-end-10 {
    grid-column-end: 10;
  }

  .sm\\:col-end-11 {
    grid-column-end: 11;
  }

  .sm\\:col-end-12 {
    grid-column-end: 12;
  }

  .sm\\:col-end-13 {
    grid-column-end: 13;
  }

  .sm\\:col-end-2 {
    grid-column-end: 2;
  }

  .sm\\:col-end-3 {
    grid-column-end: 3;
  }

  .sm\\:col-end-4 {
    grid-column-end: 4;
  }

  .sm\\:col-end-5 {
    grid-column-end: 5;
  }

  .sm\\:col-end-6 {
    grid-column-end: 6;
  }

  .sm\\:col-end-7 {
    grid-column-end: 7;
  }

  .sm\\:col-end-8 {
    grid-column-end: 8;
  }

  .sm\\:col-end-9 {
    grid-column-end: 9;
  }

  .sm\\:col-end-auto {
    grid-column-end: auto;
  }

  .sm\\:row-auto {
    grid-row: auto;
  }

  .sm\\:row-span-1 {
    grid-row: span 1 / span 1;
  }

  .sm\\:row-span-10 {
    grid-row: span 10 / span 10;
  }

  .sm\\:row-span-11 {
    grid-row: span 11 / span 11;
  }

  .sm\\:row-span-12 {
    grid-row: span 12 / span 12;
  }

  .sm\\:row-span-2 {
    grid-row: span 2 / span 2;
  }

  .sm\\:row-span-3 {
    grid-row: span 3 / span 3;
  }

  .sm\\:row-span-4 {
    grid-row: span 4 / span 4;
  }

  .sm\\:row-span-5 {
    grid-row: span 5 / span 5;
  }

  .sm\\:row-span-6 {
    grid-row: span 6 / span 6;
  }

  .sm\\:row-span-7 {
    grid-row: span 7 / span 7;
  }

  .sm\\:row-span-8 {
    grid-row: span 8 / span 8;
  }

  .sm\\:row-span-9 {
    grid-row: span 9 / span 9;
  }

  .sm\\:row-span-full {
    grid-row: 1 / -1;
  }

  .sm\\:row-start-1 {
    grid-row-start: 1;
  }

  .sm\\:row-start-10 {
    grid-row-start: 10;
  }

  .sm\\:row-start-11 {
    grid-row-start: 11;
  }

  .sm\\:row-start-12 {
    grid-row-start: 12;
  }

  .sm\\:row-start-13 {
    grid-row-start: 13;
  }

  .sm\\:row-start-2 {
    grid-row-start: 2;
  }

  .sm\\:row-start-3 {
    grid-row-start: 3;
  }

  .sm\\:row-start-4 {
    grid-row-start: 4;
  }

  .sm\\:row-start-5 {
    grid-row-start: 5;
  }

  .sm\\:row-start-6 {
    grid-row-start: 6;
  }

  .sm\\:row-start-7 {
    grid-row-start: 7;
  }

  .sm\\:row-start-8 {
    grid-row-start: 8;
  }

  .sm\\:row-start-9 {
    grid-row-start: 9;
  }

  .sm\\:row-start-auto {
    grid-row-start: auto;
  }

  .sm\\:row-end-1 {
    grid-row-end: 1;
  }

  .sm\\:row-end-10 {
    grid-row-end: 10;
  }

  .sm\\:row-end-11 {
    grid-row-end: 11;
  }

  .sm\\:row-end-12 {
    grid-row-end: 12;
  }

  .sm\\:row-end-13 {
    grid-row-end: 13;
  }

  .sm\\:row-end-2 {
    grid-row-end: 2;
  }

  .sm\\:row-end-3 {
    grid-row-end: 3;
  }

  .sm\\:row-end-4 {
    grid-row-end: 4;
  }

  .sm\\:row-end-5 {
    grid-row-end: 5;
  }

  .sm\\:row-end-6 {
    grid-row-end: 6;
  }

  .sm\\:row-end-7 {
    grid-row-end: 7;
  }

  .sm\\:row-end-8 {
    grid-row-end: 8;
  }

  .sm\\:row-end-9 {
    grid-row-end: 9;
  }

  .sm\\:row-end-auto {
    grid-row-end: auto;
  }

  .sm\\:grid {
    display: grid;
  }

  .sm\\:grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .sm\\:grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }

  .sm\\:grid-cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }

  .sm\\:grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  .sm\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sm\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .sm\\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .sm\\:grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .sm\\:grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  .sm\\:grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }

  .sm\\:grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }

  .sm\\:grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }

  .sm\\:grid-cols-none {
    grid-template-columns: none;
  }

  .sm\\:grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }

  .sm\\:grid-rows-10 {
    grid-template-rows: repeat(10, minmax(0, 1fr));
  }

  .sm\\:grid-rows-11 {
    grid-template-rows: repeat(11, minmax(0, 1fr));
  }

  .sm\\:grid-rows-12 {
    grid-template-rows: repeat(12, minmax(0, 1fr));
  }

  .sm\\:grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }

  .sm\\:grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }

  .sm\\:grid-rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }

  .sm\\:grid-rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }

  .sm\\:grid-rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  .sm\\:grid-rows-7 {
    grid-template-rows: repeat(7, minmax(0, 1fr));
  }

  .sm\\:grid-rows-8 {
    grid-template-rows: repeat(8, minmax(0, 1fr));
  }

  .sm\\:grid-rows-9 {
    grid-template-rows: repeat(9, minmax(0, 1fr));
  }

  .sm\\:grid-rows-none {
    grid-template-rows: none;
  }

  .sm\\:gap-2xs {
    gap: var(--koerber-spacing-2xs);
  }

  .sm\\:gap-xs {
    gap: var(--koerber-spacing-xs);
  }

  .sm\\:gap-s {
    gap: var(--koerber-spacing-s);
  }

  .sm\\:gap-m {
    gap: var(--koerber-spacing-m);
  }

  .sm\\:gap-l {
    gap: var(--koerber-spacing-l);
  }

  .sm\\:gap-xl {
    gap: var(--koerber-spacing-xl);
  }

  .sm\\:gap-2xl {
    gap: var(--koerber-spacing-2xl);
  }

  .sm\\:gap-x-2xs {
    -moz-column-gap: var(--koerber-spacing-2xs);
    column-gap: var(--koerber-spacing-2xs);
  }

  .sm\\:gap-x-xs {
    -moz-column-gap: var(--koerber-spacing-xs);
    column-gap: var(--koerber-spacing-xs);
  }

  .sm\\:gap-x-s {
    -moz-column-gap: var(--koerber-spacing-s);
    column-gap: var(--koerber-spacing-s);
  }

  .sm\\:gap-x-m {
    -moz-column-gap: var(--koerber-spacing-m);
    column-gap: var(--koerber-spacing-m);
  }

  .sm\\:gap-x-l {
    -moz-column-gap: var(--koerber-spacing-l);
    column-gap: var(--koerber-spacing-l);
  }

  .sm\\:gap-x-xl {
    -moz-column-gap: var(--koerber-spacing-xl);
    column-gap: var(--koerber-spacing-xl);
  }

  .sm\\:gap-x-2xl {
    -moz-column-gap: var(--koerber-spacing-2xl);
    column-gap: var(--koerber-spacing-2xl);
  }

  .sm\\:gap-y-2xs {
    row-gap: var(--koerber-spacing-2xs);
  }

  .sm\\:gap-y-xs {
    row-gap: var(--koerber-spacing-xs);
  }

  .sm\\:gap-y-s {
    row-gap: var(--koerber-spacing-s);
  }

  .sm\\:gap-y-m {
    row-gap: var(--koerber-spacing-m);
  }

  .sm\\:gap-y-l {
    row-gap: var(--koerber-spacing-l);
  }

  .sm\\:gap-y-xl {
    row-gap: var(--koerber-spacing-xl);
  }

  .sm\\:gap-y-2xl {
    row-gap: var(--koerber-spacing-2xl);
  }
}

@media (min-width: 786px) {
  .md\\:col-auto {
    grid-column: auto;
  }

  .md\\:col-span-1 {
    grid-column: span 1 / span 1;
  }

  .md\\:col-span-10 {
    grid-column: span 10 / span 10;
  }

  .md\\:col-span-11 {
    grid-column: span 11 / span 11;
  }

  .md\\:col-span-12 {
    grid-column: span 12 / span 12;
  }

  .md\\:col-span-2 {
    grid-column: span 2 / span 2;
  }

  .md\\:col-span-3 {
    grid-column: span 3 / span 3;
  }

  .md\\:col-span-4 {
    grid-column: span 4 / span 4;
  }

  .md\\:col-span-5 {
    grid-column: span 5 / span 5;
  }

  .md\\:col-span-6 {
    grid-column: span 6 / span 6;
  }

  .md\\:col-span-7 {
    grid-column: span 7 / span 7;
  }

  .md\\:col-span-8 {
    grid-column: span 8 / span 8;
  }

  .md\\:col-span-9 {
    grid-column: span 9 / span 9;
  }

  .md\\:col-span-full {
    grid-column: 1 / -1;
  }

  .md\\:col-start-1 {
    grid-column-start: 1;
  }

  .md\\:col-start-10 {
    grid-column-start: 10;
  }

  .md\\:col-start-11 {
    grid-column-start: 11;
  }

  .md\\:col-start-12 {
    grid-column-start: 12;
  }

  .md\\:col-start-13 {
    grid-column-start: 13;
  }

  .md\\:col-start-2 {
    grid-column-start: 2;
  }

  .md\\:col-start-3 {
    grid-column-start: 3;
  }

  .md\\:col-start-4 {
    grid-column-start: 4;
  }

  .md\\:col-start-5 {
    grid-column-start: 5;
  }

  .md\\:col-start-6 {
    grid-column-start: 6;
  }

  .md\\:col-start-7 {
    grid-column-start: 7;
  }

  .md\\:col-start-8 {
    grid-column-start: 8;
  }

  .md\\:col-start-9 {
    grid-column-start: 9;
  }

  .md\\:col-start-auto {
    grid-column-start: auto;
  }

  .md\\:col-end-1 {
    grid-column-end: 1;
  }

  .md\\:col-end-10 {
    grid-column-end: 10;
  }

  .md\\:col-end-11 {
    grid-column-end: 11;
  }

  .md\\:col-end-12 {
    grid-column-end: 12;
  }

  .md\\:col-end-13 {
    grid-column-end: 13;
  }

  .md\\:col-end-2 {
    grid-column-end: 2;
  }

  .md\\:col-end-3 {
    grid-column-end: 3;
  }

  .md\\:col-end-4 {
    grid-column-end: 4;
  }

  .md\\:col-end-5 {
    grid-column-end: 5;
  }

  .md\\:col-end-6 {
    grid-column-end: 6;
  }

  .md\\:col-end-7 {
    grid-column-end: 7;
  }

  .md\\:col-end-8 {
    grid-column-end: 8;
  }

  .md\\:col-end-9 {
    grid-column-end: 9;
  }

  .md\\:col-end-auto {
    grid-column-end: auto;
  }

  .md\\:row-auto {
    grid-row: auto;
  }

  .md\\:row-span-1 {
    grid-row: span 1 / span 1;
  }

  .md\\:row-span-10 {
    grid-row: span 10 / span 10;
  }

  .md\\:row-span-11 {
    grid-row: span 11 / span 11;
  }

  .md\\:row-span-12 {
    grid-row: span 12 / span 12;
  }

  .md\\:row-span-2 {
    grid-row: span 2 / span 2;
  }

  .md\\:row-span-3 {
    grid-row: span 3 / span 3;
  }

  .md\\:row-span-4 {
    grid-row: span 4 / span 4;
  }

  .md\\:row-span-5 {
    grid-row: span 5 / span 5;
  }

  .md\\:row-span-6 {
    grid-row: span 6 / span 6;
  }

  .md\\:row-span-7 {
    grid-row: span 7 / span 7;
  }

  .md\\:row-span-8 {
    grid-row: span 8 / span 8;
  }

  .md\\:row-span-9 {
    grid-row: span 9 / span 9;
  }

  .md\\:row-span-full {
    grid-row: 1 / -1;
  }

  .md\\:row-start-1 {
    grid-row-start: 1;
  }

  .md\\:row-start-10 {
    grid-row-start: 10;
  }

  .md\\:row-start-11 {
    grid-row-start: 11;
  }

  .md\\:row-start-12 {
    grid-row-start: 12;
  }

  .md\\:row-start-13 {
    grid-row-start: 13;
  }

  .md\\:row-start-2 {
    grid-row-start: 2;
  }

  .md\\:row-start-3 {
    grid-row-start: 3;
  }

  .md\\:row-start-4 {
    grid-row-start: 4;
  }

  .md\\:row-start-5 {
    grid-row-start: 5;
  }

  .md\\:row-start-6 {
    grid-row-start: 6;
  }

  .md\\:row-start-7 {
    grid-row-start: 7;
  }

  .md\\:row-start-8 {
    grid-row-start: 8;
  }

  .md\\:row-start-9 {
    grid-row-start: 9;
  }

  .md\\:row-start-auto {
    grid-row-start: auto;
  }

  .md\\:row-end-1 {
    grid-row-end: 1;
  }

  .md\\:row-end-10 {
    grid-row-end: 10;
  }

  .md\\:row-end-11 {
    grid-row-end: 11;
  }

  .md\\:row-end-12 {
    grid-row-end: 12;
  }

  .md\\:row-end-13 {
    grid-row-end: 13;
  }

  .md\\:row-end-2 {
    grid-row-end: 2;
  }

  .md\\:row-end-3 {
    grid-row-end: 3;
  }

  .md\\:row-end-4 {
    grid-row-end: 4;
  }

  .md\\:row-end-5 {
    grid-row-end: 5;
  }

  .md\\:row-end-6 {
    grid-row-end: 6;
  }

  .md\\:row-end-7 {
    grid-row-end: 7;
  }

  .md\\:row-end-8 {
    grid-row-end: 8;
  }

  .md\\:row-end-9 {
    grid-row-end: 9;
  }

  .md\\:row-end-auto {
    grid-row-end: auto;
  }

  .md\\:grid {
    display: grid;
  }

  .md\\:grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .md\\:grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }

  .md\\:grid-cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }

  .md\\:grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  .md\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .md\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .md\\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .md\\:grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .md\\:grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  .md\\:grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }

  .md\\:grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }

  .md\\:grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }

  .md\\:grid-cols-none {
    grid-template-columns: none;
  }

  .md\\:grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }

  .md\\:grid-rows-10 {
    grid-template-rows: repeat(10, minmax(0, 1fr));
  }

  .md\\:grid-rows-11 {
    grid-template-rows: repeat(11, minmax(0, 1fr));
  }

  .md\\:grid-rows-12 {
    grid-template-rows: repeat(12, minmax(0, 1fr));
  }

  .md\\:grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }

  .md\\:grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }

  .md\\:grid-rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }

  .md\\:grid-rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }

  .md\\:grid-rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  .md\\:grid-rows-7 {
    grid-template-rows: repeat(7, minmax(0, 1fr));
  }

  .md\\:grid-rows-8 {
    grid-template-rows: repeat(8, minmax(0, 1fr));
  }

  .md\\:grid-rows-9 {
    grid-template-rows: repeat(9, minmax(0, 1fr));
  }

  .md\\:grid-rows-none {
    grid-template-rows: none;
  }

  .md\\:gap-2xs {
    gap: var(--koerber-spacing-2xs);
  }

  .md\\:gap-xs {
    gap: var(--koerber-spacing-xs);
  }

  .md\\:gap-s {
    gap: var(--koerber-spacing-s);
  }

  .md\\:gap-m {
    gap: var(--koerber-spacing-m);
  }

  .md\\:gap-l {
    gap: var(--koerber-spacing-l);
  }

  .md\\:gap-xl {
    gap: var(--koerber-spacing-xl);
  }

  .md\\:gap-2xl {
    gap: var(--koerber-spacing-2xl);
  }

  .md\\:gap-x-2xs {
    -moz-column-gap: var(--koerber-spacing-2xs);
    column-gap: var(--koerber-spacing-2xs);
  }

  .md\\:gap-x-xs {
    -moz-column-gap: var(--koerber-spacing-xs);
    column-gap: var(--koerber-spacing-xs);
  }

  .md\\:gap-x-s {
    -moz-column-gap: var(--koerber-spacing-s);
    column-gap: var(--koerber-spacing-s);
  }

  .md\\:gap-x-m {
    -moz-column-gap: var(--koerber-spacing-m);
    column-gap: var(--koerber-spacing-m);
  }

  .md\\:gap-x-l {
    -moz-column-gap: var(--koerber-spacing-l);
    column-gap: var(--koerber-spacing-l);
  }

  .md\\:gap-x-xl {
    -moz-column-gap: var(--koerber-spacing-xl);
    column-gap: var(--koerber-spacing-xl);
  }

  .md\\:gap-x-2xl {
    -moz-column-gap: var(--koerber-spacing-2xl);
    column-gap: var(--koerber-spacing-2xl);
  }

  .md\\:gap-y-2xs {
    row-gap: var(--koerber-spacing-2xs);
  }

  .md\\:gap-y-xs {
    row-gap: var(--koerber-spacing-xs);
  }

  .md\\:gap-y-s {
    row-gap: var(--koerber-spacing-s);
  }

  .md\\:gap-y-m {
    row-gap: var(--koerber-spacing-m);
  }

  .md\\:gap-y-l {
    row-gap: var(--koerber-spacing-l);
  }

  .md\\:gap-y-xl {
    row-gap: var(--koerber-spacing-xl);
  }

  .md\\:gap-y-2xl {
    row-gap: var(--koerber-spacing-2xl);
  }
}

@media (min-width: 960px) {
  .lg\\:col-auto {
    grid-column: auto;
  }

  .lg\\:col-span-1 {
    grid-column: span 1 / span 1;
  }

  .lg\\:col-span-10 {
    grid-column: span 10 / span 10;
  }

  .lg\\:col-span-11 {
    grid-column: span 11 / span 11;
  }

  .lg\\:col-span-12 {
    grid-column: span 12 / span 12;
  }

  .lg\\:col-span-2 {
    grid-column: span 2 / span 2;
  }

  .lg\\:col-span-3 {
    grid-column: span 3 / span 3;
  }

  .lg\\:col-span-4 {
    grid-column: span 4 / span 4;
  }

  .lg\\:col-span-5 {
    grid-column: span 5 / span 5;
  }

  .lg\\:col-span-6 {
    grid-column: span 6 / span 6;
  }

  .lg\\:col-span-7 {
    grid-column: span 7 / span 7;
  }

  .lg\\:col-span-8 {
    grid-column: span 8 / span 8;
  }

  .lg\\:col-span-9 {
    grid-column: span 9 / span 9;
  }

  .lg\\:col-span-full {
    grid-column: 1 / -1;
  }

  .lg\\:col-start-1 {
    grid-column-start: 1;
  }

  .lg\\:col-start-10 {
    grid-column-start: 10;
  }

  .lg\\:col-start-11 {
    grid-column-start: 11;
  }

  .lg\\:col-start-12 {
    grid-column-start: 12;
  }

  .lg\\:col-start-13 {
    grid-column-start: 13;
  }

  .lg\\:col-start-2 {
    grid-column-start: 2;
  }

  .lg\\:col-start-3 {
    grid-column-start: 3;
  }

  .lg\\:col-start-4 {
    grid-column-start: 4;
  }

  .lg\\:col-start-5 {
    grid-column-start: 5;
  }

  .lg\\:col-start-6 {
    grid-column-start: 6;
  }

  .lg\\:col-start-7 {
    grid-column-start: 7;
  }

  .lg\\:col-start-8 {
    grid-column-start: 8;
  }

  .lg\\:col-start-9 {
    grid-column-start: 9;
  }

  .lg\\:col-start-auto {
    grid-column-start: auto;
  }

  .lg\\:col-end-1 {
    grid-column-end: 1;
  }

  .lg\\:col-end-10 {
    grid-column-end: 10;
  }

  .lg\\:col-end-11 {
    grid-column-end: 11;
  }

  .lg\\:col-end-12 {
    grid-column-end: 12;
  }

  .lg\\:col-end-13 {
    grid-column-end: 13;
  }

  .lg\\:col-end-2 {
    grid-column-end: 2;
  }

  .lg\\:col-end-3 {
    grid-column-end: 3;
  }

  .lg\\:col-end-4 {
    grid-column-end: 4;
  }

  .lg\\:col-end-5 {
    grid-column-end: 5;
  }

  .lg\\:col-end-6 {
    grid-column-end: 6;
  }

  .lg\\:col-end-7 {
    grid-column-end: 7;
  }

  .lg\\:col-end-8 {
    grid-column-end: 8;
  }

  .lg\\:col-end-9 {
    grid-column-end: 9;
  }

  .lg\\:col-end-auto {
    grid-column-end: auto;
  }

  .lg\\:row-auto {
    grid-row: auto;
  }

  .lg\\:row-span-1 {
    grid-row: span 1 / span 1;
  }

  .lg\\:row-span-10 {
    grid-row: span 10 / span 10;
  }

  .lg\\:row-span-11 {
    grid-row: span 11 / span 11;
  }

  .lg\\:row-span-12 {
    grid-row: span 12 / span 12;
  }

  .lg\\:row-span-2 {
    grid-row: span 2 / span 2;
  }

  .lg\\:row-span-3 {
    grid-row: span 3 / span 3;
  }

  .lg\\:row-span-4 {
    grid-row: span 4 / span 4;
  }

  .lg\\:row-span-5 {
    grid-row: span 5 / span 5;
  }

  .lg\\:row-span-6 {
    grid-row: span 6 / span 6;
  }

  .lg\\:row-span-7 {
    grid-row: span 7 / span 7;
  }

  .lg\\:row-span-8 {
    grid-row: span 8 / span 8;
  }

  .lg\\:row-span-9 {
    grid-row: span 9 / span 9;
  }

  .lg\\:row-span-full {
    grid-row: 1 / -1;
  }

  .lg\\:row-start-1 {
    grid-row-start: 1;
  }

  .lg\\:row-start-10 {
    grid-row-start: 10;
  }

  .lg\\:row-start-11 {
    grid-row-start: 11;
  }

  .lg\\:row-start-12 {
    grid-row-start: 12;
  }

  .lg\\:row-start-13 {
    grid-row-start: 13;
  }

  .lg\\:row-start-2 {
    grid-row-start: 2;
  }

  .lg\\:row-start-3 {
    grid-row-start: 3;
  }

  .lg\\:row-start-4 {
    grid-row-start: 4;
  }

  .lg\\:row-start-5 {
    grid-row-start: 5;
  }

  .lg\\:row-start-6 {
    grid-row-start: 6;
  }

  .lg\\:row-start-7 {
    grid-row-start: 7;
  }

  .lg\\:row-start-8 {
    grid-row-start: 8;
  }

  .lg\\:row-start-9 {
    grid-row-start: 9;
  }

  .lg\\:row-start-auto {
    grid-row-start: auto;
  }

  .lg\\:row-end-1 {
    grid-row-end: 1;
  }

  .lg\\:row-end-10 {
    grid-row-end: 10;
  }

  .lg\\:row-end-11 {
    grid-row-end: 11;
  }

  .lg\\:row-end-12 {
    grid-row-end: 12;
  }

  .lg\\:row-end-13 {
    grid-row-end: 13;
  }

  .lg\\:row-end-2 {
    grid-row-end: 2;
  }

  .lg\\:row-end-3 {
    grid-row-end: 3;
  }

  .lg\\:row-end-4 {
    grid-row-end: 4;
  }

  .lg\\:row-end-5 {
    grid-row-end: 5;
  }

  .lg\\:row-end-6 {
    grid-row-end: 6;
  }

  .lg\\:row-end-7 {
    grid-row-end: 7;
  }

  .lg\\:row-end-8 {
    grid-row-end: 8;
  }

  .lg\\:row-end-9 {
    grid-row-end: 9;
  }

  .lg\\:row-end-auto {
    grid-row-end: auto;
  }

  .lg\\:grid {
    display: grid;
  }

  .lg\\:grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .lg\\:grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }

  .lg\\:grid-cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }

  .lg\\:grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  .lg\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .lg\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .lg\\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .lg\\:grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .lg\\:grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  .lg\\:grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }

  .lg\\:grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }

  .lg\\:grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }

  .lg\\:grid-cols-none {
    grid-template-columns: none;
  }

  .lg\\:grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }

  .lg\\:grid-rows-10 {
    grid-template-rows: repeat(10, minmax(0, 1fr));
  }

  .lg\\:grid-rows-11 {
    grid-template-rows: repeat(11, minmax(0, 1fr));
  }

  .lg\\:grid-rows-12 {
    grid-template-rows: repeat(12, minmax(0, 1fr));
  }

  .lg\\:grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }

  .lg\\:grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }

  .lg\\:grid-rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }

  .lg\\:grid-rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }

  .lg\\:grid-rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  .lg\\:grid-rows-7 {
    grid-template-rows: repeat(7, minmax(0, 1fr));
  }

  .lg\\:grid-rows-8 {
    grid-template-rows: repeat(8, minmax(0, 1fr));
  }

  .lg\\:grid-rows-9 {
    grid-template-rows: repeat(9, minmax(0, 1fr));
  }

  .lg\\:grid-rows-none {
    grid-template-rows: none;
  }

  .lg\\:gap-2xs {
    gap: var(--koerber-spacing-2xs);
  }

  .lg\\:gap-xs {
    gap: var(--koerber-spacing-xs);
  }

  .lg\\:gap-s {
    gap: var(--koerber-spacing-s);
  }

  .lg\\:gap-m {
    gap: var(--koerber-spacing-m);
  }

  .lg\\:gap-l {
    gap: var(--koerber-spacing-l);
  }

  .lg\\:gap-xl {
    gap: var(--koerber-spacing-xl);
  }

  .lg\\:gap-2xl {
    gap: var(--koerber-spacing-2xl);
  }

  .lg\\:gap-x-2xs {
    -moz-column-gap: var(--koerber-spacing-2xs);
    column-gap: var(--koerber-spacing-2xs);
  }

  .lg\\:gap-x-xs {
    -moz-column-gap: var(--koerber-spacing-xs);
    column-gap: var(--koerber-spacing-xs);
  }

  .lg\\:gap-x-s {
    -moz-column-gap: var(--koerber-spacing-s);
    column-gap: var(--koerber-spacing-s);
  }

  .lg\\:gap-x-m {
    -moz-column-gap: var(--koerber-spacing-m);
    column-gap: var(--koerber-spacing-m);
  }

  .lg\\:gap-x-l {
    -moz-column-gap: var(--koerber-spacing-l);
    column-gap: var(--koerber-spacing-l);
  }

  .lg\\:gap-x-xl {
    -moz-column-gap: var(--koerber-spacing-xl);
    column-gap: var(--koerber-spacing-xl);
  }

  .lg\\:gap-x-2xl {
    -moz-column-gap: var(--koerber-spacing-2xl);
    column-gap: var(--koerber-spacing-2xl);
  }

  .lg\\:gap-y-2xs {
    row-gap: var(--koerber-spacing-2xs);
  }

  .lg\\:gap-y-xs {
    row-gap: var(--koerber-spacing-xs);
  }

  .lg\\:gap-y-s {
    row-gap: var(--koerber-spacing-s);
  }

  .lg\\:gap-y-m {
    row-gap: var(--koerber-spacing-m);
  }

  .lg\\:gap-y-l {
    row-gap: var(--koerber-spacing-l);
  }

  .lg\\:gap-y-xl {
    row-gap: var(--koerber-spacing-xl);
  }

  .lg\\:gap-y-2xl {
    row-gap: var(--koerber-spacing-2xl);
  }
}

@media (min-width: 1200px) {
  .xl\\:col-auto {
    grid-column: auto;
  }

  .xl\\:col-span-1 {
    grid-column: span 1 / span 1;
  }

  .xl\\:col-span-10 {
    grid-column: span 10 / span 10;
  }

  .xl\\:col-span-11 {
    grid-column: span 11 / span 11;
  }

  .xl\\:col-span-12 {
    grid-column: span 12 / span 12;
  }

  .xl\\:col-span-2 {
    grid-column: span 2 / span 2;
  }

  .xl\\:col-span-3 {
    grid-column: span 3 / span 3;
  }

  .xl\\:col-span-4 {
    grid-column: span 4 / span 4;
  }

  .xl\\:col-span-5 {
    grid-column: span 5 / span 5;
  }

  .xl\\:col-span-6 {
    grid-column: span 6 / span 6;
  }

  .xl\\:col-span-7 {
    grid-column: span 7 / span 7;
  }

  .xl\\:col-span-8 {
    grid-column: span 8 / span 8;
  }

  .xl\\:col-span-9 {
    grid-column: span 9 / span 9;
  }

  .xl\\:col-span-full {
    grid-column: 1 / -1;
  }

  .xl\\:col-start-1 {
    grid-column-start: 1;
  }

  .xl\\:col-start-10 {
    grid-column-start: 10;
  }

  .xl\\:col-start-11 {
    grid-column-start: 11;
  }

  .xl\\:col-start-12 {
    grid-column-start: 12;
  }

  .xl\\:col-start-13 {
    grid-column-start: 13;
  }

  .xl\\:col-start-2 {
    grid-column-start: 2;
  }

  .xl\\:col-start-3 {
    grid-column-start: 3;
  }

  .xl\\:col-start-4 {
    grid-column-start: 4;
  }

  .xl\\:col-start-5 {
    grid-column-start: 5;
  }

  .xl\\:col-start-6 {
    grid-column-start: 6;
  }

  .xl\\:col-start-7 {
    grid-column-start: 7;
  }

  .xl\\:col-start-8 {
    grid-column-start: 8;
  }

  .xl\\:col-start-9 {
    grid-column-start: 9;
  }

  .xl\\:col-start-auto {
    grid-column-start: auto;
  }

  .xl\\:col-end-1 {
    grid-column-end: 1;
  }

  .xl\\:col-end-10 {
    grid-column-end: 10;
  }

  .xl\\:col-end-11 {
    grid-column-end: 11;
  }

  .xl\\:col-end-12 {
    grid-column-end: 12;
  }

  .xl\\:col-end-13 {
    grid-column-end: 13;
  }

  .xl\\:col-end-2 {
    grid-column-end: 2;
  }

  .xl\\:col-end-3 {
    grid-column-end: 3;
  }

  .xl\\:col-end-4 {
    grid-column-end: 4;
  }

  .xl\\:col-end-5 {
    grid-column-end: 5;
  }

  .xl\\:col-end-6 {
    grid-column-end: 6;
  }

  .xl\\:col-end-7 {
    grid-column-end: 7;
  }

  .xl\\:col-end-8 {
    grid-column-end: 8;
  }

  .xl\\:col-end-9 {
    grid-column-end: 9;
  }

  .xl\\:col-end-auto {
    grid-column-end: auto;
  }

  .xl\\:row-auto {
    grid-row: auto;
  }

  .xl\\:row-span-1 {
    grid-row: span 1 / span 1;
  }

  .xl\\:row-span-10 {
    grid-row: span 10 / span 10;
  }

  .xl\\:row-span-11 {
    grid-row: span 11 / span 11;
  }

  .xl\\:row-span-12 {
    grid-row: span 12 / span 12;
  }

  .xl\\:row-span-2 {
    grid-row: span 2 / span 2;
  }

  .xl\\:row-span-3 {
    grid-row: span 3 / span 3;
  }

  .xl\\:row-span-4 {
    grid-row: span 4 / span 4;
  }

  .xl\\:row-span-5 {
    grid-row: span 5 / span 5;
  }

  .xl\\:row-span-6 {
    grid-row: span 6 / span 6;
  }

  .xl\\:row-span-7 {
    grid-row: span 7 / span 7;
  }

  .xl\\:row-span-8 {
    grid-row: span 8 / span 8;
  }

  .xl\\:row-span-9 {
    grid-row: span 9 / span 9;
  }

  .xl\\:row-span-full {
    grid-row: 1 / -1;
  }

  .xl\\:row-start-1 {
    grid-row-start: 1;
  }

  .xl\\:row-start-10 {
    grid-row-start: 10;
  }

  .xl\\:row-start-11 {
    grid-row-start: 11;
  }

  .xl\\:row-start-12 {
    grid-row-start: 12;
  }

  .xl\\:row-start-13 {
    grid-row-start: 13;
  }

  .xl\\:row-start-2 {
    grid-row-start: 2;
  }

  .xl\\:row-start-3 {
    grid-row-start: 3;
  }

  .xl\\:row-start-4 {
    grid-row-start: 4;
  }

  .xl\\:row-start-5 {
    grid-row-start: 5;
  }

  .xl\\:row-start-6 {
    grid-row-start: 6;
  }

  .xl\\:row-start-7 {
    grid-row-start: 7;
  }

  .xl\\:row-start-8 {
    grid-row-start: 8;
  }

  .xl\\:row-start-9 {
    grid-row-start: 9;
  }

  .xl\\:row-start-auto {
    grid-row-start: auto;
  }

  .xl\\:row-end-1 {
    grid-row-end: 1;
  }

  .xl\\:row-end-10 {
    grid-row-end: 10;
  }

  .xl\\:row-end-11 {
    grid-row-end: 11;
  }

  .xl\\:row-end-12 {
    grid-row-end: 12;
  }

  .xl\\:row-end-13 {
    grid-row-end: 13;
  }

  .xl\\:row-end-2 {
    grid-row-end: 2;
  }

  .xl\\:row-end-3 {
    grid-row-end: 3;
  }

  .xl\\:row-end-4 {
    grid-row-end: 4;
  }

  .xl\\:row-end-5 {
    grid-row-end: 5;
  }

  .xl\\:row-end-6 {
    grid-row-end: 6;
  }

  .xl\\:row-end-7 {
    grid-row-end: 7;
  }

  .xl\\:row-end-8 {
    grid-row-end: 8;
  }

  .xl\\:row-end-9 {
    grid-row-end: 9;
  }

  .xl\\:row-end-auto {
    grid-row-end: auto;
  }

  .xl\\:grid {
    display: grid;
  }

  .xl\\:grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .xl\\:grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }

  .xl\\:grid-cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }

  .xl\\:grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  .xl\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .xl\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .xl\\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .xl\\:grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .xl\\:grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  .xl\\:grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }

  .xl\\:grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }

  .xl\\:grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }

  .xl\\:grid-cols-none {
    grid-template-columns: none;
  }

  .xl\\:grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }

  .xl\\:grid-rows-10 {
    grid-template-rows: repeat(10, minmax(0, 1fr));
  }

  .xl\\:grid-rows-11 {
    grid-template-rows: repeat(11, minmax(0, 1fr));
  }

  .xl\\:grid-rows-12 {
    grid-template-rows: repeat(12, minmax(0, 1fr));
  }

  .xl\\:grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }

  .xl\\:grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }

  .xl\\:grid-rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }

  .xl\\:grid-rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }

  .xl\\:grid-rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  .xl\\:grid-rows-7 {
    grid-template-rows: repeat(7, minmax(0, 1fr));
  }

  .xl\\:grid-rows-8 {
    grid-template-rows: repeat(8, minmax(0, 1fr));
  }

  .xl\\:grid-rows-9 {
    grid-template-rows: repeat(9, minmax(0, 1fr));
  }

  .xl\\:grid-rows-none {
    grid-template-rows: none;
  }

  .xl\\:gap-2xs {
    gap: var(--koerber-spacing-2xs);
  }

  .xl\\:gap-xs {
    gap: var(--koerber-spacing-xs);
  }

  .xl\\:gap-s {
    gap: var(--koerber-spacing-s);
  }

  .xl\\:gap-m {
    gap: var(--koerber-spacing-m);
  }

  .xl\\:gap-l {
    gap: var(--koerber-spacing-l);
  }

  .xl\\:gap-xl {
    gap: var(--koerber-spacing-xl);
  }

  .xl\\:gap-2xl {
    gap: var(--koerber-spacing-2xl);
  }

  .xl\\:gap-x-2xs {
    -moz-column-gap: var(--koerber-spacing-2xs);
    column-gap: var(--koerber-spacing-2xs);
  }

  .xl\\:gap-x-xs {
    -moz-column-gap: var(--koerber-spacing-xs);
    column-gap: var(--koerber-spacing-xs);
  }

  .xl\\:gap-x-s {
    -moz-column-gap: var(--koerber-spacing-s);
    column-gap: var(--koerber-spacing-s);
  }

  .xl\\:gap-x-m {
    -moz-column-gap: var(--koerber-spacing-m);
    column-gap: var(--koerber-spacing-m);
  }

  .xl\\:gap-x-l {
    -moz-column-gap: var(--koerber-spacing-l);
    column-gap: var(--koerber-spacing-l);
  }

  .xl\\:gap-x-xl {
    -moz-column-gap: var(--koerber-spacing-xl);
    column-gap: var(--koerber-spacing-xl);
  }

  .xl\\:gap-x-2xl {
    -moz-column-gap: var(--koerber-spacing-2xl);
    column-gap: var(--koerber-spacing-2xl);
  }

  .xl\\:gap-y-2xs {
    row-gap: var(--koerber-spacing-2xs);
  }

  .xl\\:gap-y-xs {
    row-gap: var(--koerber-spacing-xs);
  }

  .xl\\:gap-y-s {
    row-gap: var(--koerber-spacing-s);
  }

  .xl\\:gap-y-m {
    row-gap: var(--koerber-spacing-m);
  }

  .xl\\:gap-y-l {
    row-gap: var(--koerber-spacing-l);
  }

  .xl\\:gap-y-xl {
    row-gap: var(--koerber-spacing-xl);
  }

  .xl\\:gap-y-2xl {
    row-gap: var(--koerber-spacing-2xl);
  }
}

@media (min-width: 1400px) {
  .\\32xl\\:col-auto {
    grid-column: auto;
  }

  .\\32xl\\:col-span-1 {
    grid-column: span 1 / span 1;
  }

  .\\32xl\\:col-span-10 {
    grid-column: span 10 / span 10;
  }

  .\\32xl\\:col-span-11 {
    grid-column: span 11 / span 11;
  }

  .\\32xl\\:col-span-12 {
    grid-column: span 12 / span 12;
  }

  .\\32xl\\:col-span-2 {
    grid-column: span 2 / span 2;
  }

  .\\32xl\\:col-span-3 {
    grid-column: span 3 / span 3;
  }

  .\\32xl\\:col-span-4 {
    grid-column: span 4 / span 4;
  }

  .\\32xl\\:col-span-5 {
    grid-column: span 5 / span 5;
  }

  .\\32xl\\:col-span-6 {
    grid-column: span 6 / span 6;
  }

  .\\32xl\\:col-span-7 {
    grid-column: span 7 / span 7;
  }

  .\\32xl\\:col-span-8 {
    grid-column: span 8 / span 8;
  }

  .\\32xl\\:col-span-9 {
    grid-column: span 9 / span 9;
  }

  .\\32xl\\:col-span-full {
    grid-column: 1 / -1;
  }

  .\\32xl\\:col-start-1 {
    grid-column-start: 1;
  }

  .\\32xl\\:col-start-10 {
    grid-column-start: 10;
  }

  .\\32xl\\:col-start-11 {
    grid-column-start: 11;
  }

  .\\32xl\\:col-start-12 {
    grid-column-start: 12;
  }

  .\\32xl\\:col-start-13 {
    grid-column-start: 13;
  }

  .\\32xl\\:col-start-2 {
    grid-column-start: 2;
  }

  .\\32xl\\:col-start-3 {
    grid-column-start: 3;
  }

  .\\32xl\\:col-start-4 {
    grid-column-start: 4;
  }

  .\\32xl\\:col-start-5 {
    grid-column-start: 5;
  }

  .\\32xl\\:col-start-6 {
    grid-column-start: 6;
  }

  .\\32xl\\:col-start-7 {
    grid-column-start: 7;
  }

  .\\32xl\\:col-start-8 {
    grid-column-start: 8;
  }

  .\\32xl\\:col-start-9 {
    grid-column-start: 9;
  }

  .\\32xl\\:col-start-auto {
    grid-column-start: auto;
  }

  .\\32xl\\:col-end-1 {
    grid-column-end: 1;
  }

  .\\32xl\\:col-end-10 {
    grid-column-end: 10;
  }

  .\\32xl\\:col-end-11 {
    grid-column-end: 11;
  }

  .\\32xl\\:col-end-12 {
    grid-column-end: 12;
  }

  .\\32xl\\:col-end-13 {
    grid-column-end: 13;
  }

  .\\32xl\\:col-end-2 {
    grid-column-end: 2;
  }

  .\\32xl\\:col-end-3 {
    grid-column-end: 3;
  }

  .\\32xl\\:col-end-4 {
    grid-column-end: 4;
  }

  .\\32xl\\:col-end-5 {
    grid-column-end: 5;
  }

  .\\32xl\\:col-end-6 {
    grid-column-end: 6;
  }

  .\\32xl\\:col-end-7 {
    grid-column-end: 7;
  }

  .\\32xl\\:col-end-8 {
    grid-column-end: 8;
  }

  .\\32xl\\:col-end-9 {
    grid-column-end: 9;
  }

  .\\32xl\\:col-end-auto {
    grid-column-end: auto;
  }

  .\\32xl\\:row-auto {
    grid-row: auto;
  }

  .\\32xl\\:row-span-1 {
    grid-row: span 1 / span 1;
  }

  .\\32xl\\:row-span-10 {
    grid-row: span 10 / span 10;
  }

  .\\32xl\\:row-span-11 {
    grid-row: span 11 / span 11;
  }

  .\\32xl\\:row-span-12 {
    grid-row: span 12 / span 12;
  }

  .\\32xl\\:row-span-2 {
    grid-row: span 2 / span 2;
  }

  .\\32xl\\:row-span-3 {
    grid-row: span 3 / span 3;
  }

  .\\32xl\\:row-span-4 {
    grid-row: span 4 / span 4;
  }

  .\\32xl\\:row-span-5 {
    grid-row: span 5 / span 5;
  }

  .\\32xl\\:row-span-6 {
    grid-row: span 6 / span 6;
  }

  .\\32xl\\:row-span-7 {
    grid-row: span 7 / span 7;
  }

  .\\32xl\\:row-span-8 {
    grid-row: span 8 / span 8;
  }

  .\\32xl\\:row-span-9 {
    grid-row: span 9 / span 9;
  }

  .\\32xl\\:row-span-full {
    grid-row: 1 / -1;
  }

  .\\32xl\\:row-start-1 {
    grid-row-start: 1;
  }

  .\\32xl\\:row-start-10 {
    grid-row-start: 10;
  }

  .\\32xl\\:row-start-11 {
    grid-row-start: 11;
  }

  .\\32xl\\:row-start-12 {
    grid-row-start: 12;
  }

  .\\32xl\\:row-start-13 {
    grid-row-start: 13;
  }

  .\\32xl\\:row-start-2 {
    grid-row-start: 2;
  }

  .\\32xl\\:row-start-3 {
    grid-row-start: 3;
  }

  .\\32xl\\:row-start-4 {
    grid-row-start: 4;
  }

  .\\32xl\\:row-start-5 {
    grid-row-start: 5;
  }

  .\\32xl\\:row-start-6 {
    grid-row-start: 6;
  }

  .\\32xl\\:row-start-7 {
    grid-row-start: 7;
  }

  .\\32xl\\:row-start-8 {
    grid-row-start: 8;
  }

  .\\32xl\\:row-start-9 {
    grid-row-start: 9;
  }

  .\\32xl\\:row-start-auto {
    grid-row-start: auto;
  }

  .\\32xl\\:row-end-1 {
    grid-row-end: 1;
  }

  .\\32xl\\:row-end-10 {
    grid-row-end: 10;
  }

  .\\32xl\\:row-end-11 {
    grid-row-end: 11;
  }

  .\\32xl\\:row-end-12 {
    grid-row-end: 12;
  }

  .\\32xl\\:row-end-13 {
    grid-row-end: 13;
  }

  .\\32xl\\:row-end-2 {
    grid-row-end: 2;
  }

  .\\32xl\\:row-end-3 {
    grid-row-end: 3;
  }

  .\\32xl\\:row-end-4 {
    grid-row-end: 4;
  }

  .\\32xl\\:row-end-5 {
    grid-row-end: 5;
  }

  .\\32xl\\:row-end-6 {
    grid-row-end: 6;
  }

  .\\32xl\\:row-end-7 {
    grid-row-end: 7;
  }

  .\\32xl\\:row-end-8 {
    grid-row-end: 8;
  }

  .\\32xl\\:row-end-9 {
    grid-row-end: 9;
  }

  .\\32xl\\:row-end-auto {
    grid-row-end: auto;
  }

  .\\32xl\\:grid {
    display: grid;
  }

  .\\32xl\\:grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .\\32xl\\:grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }

  .\\32xl\\:grid-cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }

  .\\32xl\\:grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  .\\32xl\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .\\32xl\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .\\32xl\\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .\\32xl\\:grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .\\32xl\\:grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  .\\32xl\\:grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }

  .\\32xl\\:grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }

  .\\32xl\\:grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }

  .\\32xl\\:grid-cols-none {
    grid-template-columns: none;
  }

  .\\32xl\\:grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }

  .\\32xl\\:grid-rows-10 {
    grid-template-rows: repeat(10, minmax(0, 1fr));
  }

  .\\32xl\\:grid-rows-11 {
    grid-template-rows: repeat(11, minmax(0, 1fr));
  }

  .\\32xl\\:grid-rows-12 {
    grid-template-rows: repeat(12, minmax(0, 1fr));
  }

  .\\32xl\\:grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }

  .\\32xl\\:grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }

  .\\32xl\\:grid-rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }

  .\\32xl\\:grid-rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }

  .\\32xl\\:grid-rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  .\\32xl\\:grid-rows-7 {
    grid-template-rows: repeat(7, minmax(0, 1fr));
  }

  .\\32xl\\:grid-rows-8 {
    grid-template-rows: repeat(8, minmax(0, 1fr));
  }

  .\\32xl\\:grid-rows-9 {
    grid-template-rows: repeat(9, minmax(0, 1fr));
  }

  .\\32xl\\:grid-rows-none {
    grid-template-rows: none;
  }

  .\\32xl\\:gap-2xs {
    gap: var(--koerber-spacing-2xs);
  }

  .\\32xl\\:gap-xs {
    gap: var(--koerber-spacing-xs);
  }

  .\\32xl\\:gap-s {
    gap: var(--koerber-spacing-s);
  }

  .\\32xl\\:gap-m {
    gap: var(--koerber-spacing-m);
  }

  .\\32xl\\:gap-l {
    gap: var(--koerber-spacing-l);
  }

  .\\32xl\\:gap-xl {
    gap: var(--koerber-spacing-xl);
  }

  .\\32xl\\:gap-2xl {
    gap: var(--koerber-spacing-2xl);
  }

  .\\32xl\\:gap-x-2xs {
    -moz-column-gap: var(--koerber-spacing-2xs);
    column-gap: var(--koerber-spacing-2xs);
  }

  .\\32xl\\:gap-x-xs {
    -moz-column-gap: var(--koerber-spacing-xs);
    column-gap: var(--koerber-spacing-xs);
  }

  .\\32xl\\:gap-x-s {
    -moz-column-gap: var(--koerber-spacing-s);
    column-gap: var(--koerber-spacing-s);
  }

  .\\32xl\\:gap-x-m {
    -moz-column-gap: var(--koerber-spacing-m);
    column-gap: var(--koerber-spacing-m);
  }

  .\\32xl\\:gap-x-l {
    -moz-column-gap: var(--koerber-spacing-l);
    column-gap: var(--koerber-spacing-l);
  }

  .\\32xl\\:gap-x-xl {
    -moz-column-gap: var(--koerber-spacing-xl);
    column-gap: var(--koerber-spacing-xl);
  }

  .\\32xl\\:gap-x-2xl {
    -moz-column-gap: var(--koerber-spacing-2xl);
    column-gap: var(--koerber-spacing-2xl);
  }

  .\\32xl\\:gap-y-2xs {
    row-gap: var(--koerber-spacing-2xs);
  }

  .\\32xl\\:gap-y-xs {
    row-gap: var(--koerber-spacing-xs);
  }

  .\\32xl\\:gap-y-s {
    row-gap: var(--koerber-spacing-s);
  }

  .\\32xl\\:gap-y-m {
    row-gap: var(--koerber-spacing-m);
  }

  .\\32xl\\:gap-y-l {
    row-gap: var(--koerber-spacing-l);
  }

  .\\32xl\\:gap-y-xl {
    row-gap: var(--koerber-spacing-xl);
  }

  .\\32xl\\:gap-y-2xl {
    row-gap: var(--koerber-spacing-2xl);
  }
}
`;