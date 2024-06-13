import type { Args } from '@storybook/web-components';
/**
 * Generates attributes string based on the provided arguments.
 *
 * @param args - The arguments object containing the attributes.
 * @returns The generated attributes string.
 */
export declare const generateAttributes: ({ args }: {
    args: Partial<Args>;
}) => string;
/**
 * Returns a story template with the provided HTML string.
 *
 * @param htmlString - The HTML string to be used as the story template.
 * @returns The story template as an HTML element.
 */
export declare const getStoryTemplate: (htmlString: string) => import("lit").TemplateResult<1>;
