import Icon from '../icon/icon.component';
import Popup from '../popup/popup.component';
import Spinner from '../spinner/spinner.component';
import Tag from '../tag/tag.component';
import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
import type { UIKitFormControl } from '../../internal/uikit-element';
import type SearchOption from '../search-option/search-option';
/**
 * @summary Search allow you to choose items from a menu of predefined options.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net/?path=/docs/components-search--docs
 * @status stable
 * @since 2.0
 *
 * @dependency koerber-icon
 * @dependency koerber-popup
 * @dependency koerber-tag
 *
 * @slot - The listbox options. Must be `<koerber-search-option>` elements.
 * @slot prefix - Used to prepend a presentational icon or similar element to the combobox.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot search-icon - The icon to show when the control is expanded and collapsed. Rotates on open and close.
 *
 * @event koerber-change - Emitted when the control's value changes.
 * @event koerber-clear - Emitted when the control's value is cleared.
 * @event koerber-input - Emitted when the control receives input.
 * @event koerber-focus - Emitted when the control gains focus.
 * @event koerber-blur - Emitted when the control loses focus.
 * @event koerber-show - Emitted when the search's menu opens.
 * @event koerber-after-show - Emitted after the search's menu opens and all animations are complete.
 * @event koerber-hide - Emitted when the search's menu closes.
 * @event koerber-after-hide - Emitted after the search's menu closes and all animations are complete.
 *
 * @csspart combobox - The container the wraps the prefix, combobox, clear icon, and expand button.
 * @csspart prefix - The container that wraps the prefix slot.
 * @csspart display-input - The element that displays the selected option's label, an `<input>` element.
 * @csspart listbox - The listbox container where options are slotted.
 * @csspart tag__base - The tag's base part.
 * @csspart tag__content - The tag's content part.
 * @csspart tag__remove-button - The tag's remove button.
 * @csspart tag__remove-button__base - The tag's remove button base part.
 * @csspart search-button - The search button or clear it depends.
 * @csspart search__icon - The container that wraps the expand icon.
 * @csspart form-control-error-message - The error's message wrapper.
 */
export default class Search extends UIKitElement implements UIKitFormControl {
    static styles: CSSResultGroup;
    static dependencies: {
        'koerber-icon': typeof Icon;
        'koerber-popup': typeof Popup;
        'koerber-tag': typeof Tag;
        'koerber-spinner': typeof Spinner;
    };
    private readonly localize;
    popup: Popup;
    displayInput: HTMLInputElement;
    listbox: HTMLSlotElement;
    searchButton: HTMLElement;
    private hasFocus;
    currentOption: SearchOption;
    selectedOptions: SearchOption[];
    minLengthMessage: string;
    searchResults: number;
    /** The name of the search, submitted as a name/value pair with form data. */
    name: string;
    /**
     * The current value of the search, submitted as a name/value pair with form data.
     */
    value: string;
    /** The default value of the form control. Primarily used for resetting the form control. */
    defaultValue: string;
    /** Placeholder text to show as a hint when the search is empty. */
    placeholder: string;
    /** The search's size. */
    size: 'small' | 'medium' | 'large';
    /** Adds a loader/spinner in the suffix of the search control */
    loading: boolean;
    /** Displays loading message when loading flag set to true */
    loadingMessage: string;
    /**
     * Sets the maximum height for the dropdown box before the scrollbar appears.
     */
    maxHeight: number;
    /** Sets the minimum length of the search input before the search is triggered., zero by default (deactivated) */
    minLength: number;
    /** Disables the search control. */
    disabled: boolean;
    /**
     * Indicates whether or not the search is open. You can toggle this attribute to show and hide the menu, or you can
     * use the `show()` and `hide()` methods and this attribute will reflect the search's open state.
     */
    open: boolean;
    /**
     * Enable this option to prevent the listbox from being clipped when the component is placed inside a container with
     * `overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
     */
    hoist: boolean;
    /**
     * The preferred placement of the search's menu. Note that the actual placement may vary as needed to keep the listbox
     * inside of the viewport.
     */
    placement: 'top' | 'bottom';
    /** The search's required attribute. */
    required: boolean;
    /**
     * Used to indicate that the input has some error based on some rule.
     */
    error: boolean;
    /** The component accessible label name */
    accessibleName: string;
    /** The component accessible description */
    accessibleDescription: string;
    connectedCallback(): void;
    protected firstUpdated(): void;
    private addOpenListeners;
    private removeOpenListeners;
    private handleAnimations;
    private handleInput;
    private handleChange;
    private handleFocus;
    private handleBlur;
    private handleDocumentFocusIn;
    private handleDocumentKeyDown;
    private handleDocumentMouseDown;
    private handleComboboxClick;
    private handleComboboxKeyDown;
    private handleClearClick;
    private handleClearMouseDown;
    private handleOptionClick;
    private handleDefaultSlotChange;
    private getAllOptions;
    private getFirstOption;
    private setCurrentOption;
    private setSelectedOptions;
    private selectionChanged;
    private updateMessage;
    private syncOptions;
    handleSizeChange(): void;
    handleDisabledChange(): void;
    handleValueChange(): void;
    handleMinLengthChange(): void;
    handleOpenChange(): Promise<void>;
    /** Shows the listbox. */
    show(): Promise<void>;
    /** Hides the listbox. */
    hide(): Promise<void>;
    /** Sets focus on the control. */
    focus(options?: FocusOptions): void;
    /** Removes focus from the control. */
    blur(): void;
    render(): import("lit").TemplateResult<1>;
}
