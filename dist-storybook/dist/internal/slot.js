/** A reactive controller that determines when slots exist. */
export class HasSlotController {
    constructor(host, ...slotNames) {
        this.slotNames = [];
        (this.host = host).addController(this);
        this.slotNames = slotNames;
        this.handleSlotChange = this.handleSlotChange.bind(this);
    }
    hasDefaultSlot() {
        return [...this.host.childNodes].some(node => {
            if (node.nodeType === node.TEXT_NODE && node.textContent.trim() !== '') {
                return true;
            }
            if (node.nodeType === node.ELEMENT_NODE) {
                const el = node;
                const tagName = el.tagName.toLowerCase();
                // Ignore visually hidden elements since they aren't rendered
                if (tagName === 'koerber-visually-hidden') {
                    return false;
                }
                // If it doesn't have a slot attribute, it's part of the default slot
                if (!el.hasAttribute('slot')) {
                    return true;
                }
            }
            return false;
        });
    }
    hasNamedSlot(name) {
        return this.host.querySelector(`:scope > [slot="${name}"]`) !== null;
    }
    test(slotName) {
        return slotName === '[default]' ? this.hasDefaultSlot() : this.hasNamedSlot(slotName);
    }
    hostConnected() {
        this.host.shadowRoot.addEventListener('slotchange', this.handleSlotChange);
    }
    hostDisconnected() {
        this.host.shadowRoot.removeEventListener('slotchange', this.handleSlotChange);
    }
    handleSlotChange(event) {
        const slot = event.target;
        if ((this.slotNames.includes('[default]') && !slot.name) || (slot.name && this.slotNames.includes(slot.name))) {
            this.host.requestUpdate();
        }
    }
}
/**
 * Given a slot, this function iterates over all of its assigned element and text nodes and returns the concatenated
 * HTML as a string. This is useful because we can't use slot.innerHTML as an alternative.
 */
export function getInnerHTML(slot) {
    const nodes = slot.assignedNodes({ flatten: true });
    let html = '';
    [...nodes].forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) {
            html += node.outerHTML;
        }
        if (node.nodeType === Node.TEXT_NODE) {
            html += node.textContent;
        }
    });
    return html;
}
/**
 * Given a slot, this function iterates over all of its assigned text nodes and returns the concatenated text as a
 * string. This is useful because we can't use slot.textContent as an alternative.
 */
export function getTextContent(slot) {
    if (!slot) {
        return '';
    }
    const nodes = slot.assignedNodes({ flatten: true });
    let text = '';
    [...nodes].forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            text += node.textContent;
        }
    });
    return text;
}
