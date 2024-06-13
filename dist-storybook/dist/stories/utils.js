import { html } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
/**
 * Generates attributes string based on the provided arguments.
 *
 * @param args - The arguments object containing the attributes.
 * @returns The generated attributes string.
 */
export const generateAttributes = ({ args }) => {
    return Object.entries(args)
        .map(([key, value]) => {
        if (key === 'click')
            return `${key}="() => {}"`;
        if (typeof value === 'boolean') {
            return value ? `${key}` : null;
        }
        return `${key}="${value}"`;
    })
        .filter(Boolean)
        .join(' ');
};
/**
 * Returns a story template with the provided HTML string.
 *
 * @param htmlString - The HTML string to be used as the story template.
 * @returns The story template as an HTML element.
 */
export const getStoryTemplate = (htmlString) => {
    return html `${unsafeHTML(htmlString)}`;
};
