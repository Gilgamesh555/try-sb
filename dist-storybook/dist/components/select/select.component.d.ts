import Icon from '../icon/icon.component';
import Popup from '../popup/popup.component';
import Spinner from '../spinner/spinner.component';
import Tag from '../tag/tag.component';
import UIKitElement from '../../internal/uikit-element';
import type { CSSResultGroup } from 'lit';
import type { UIKitFormControl } from '../../internal/uikit-element';
import type SelectOption from '../select-option/select-option.js';
/**
 * @summary Selects allow you to choose items from a menu of predefined options.
 * @documentation https://kind-desert-0fb80550f.5.azurestaticapps.net/?path=/docs/components-select--docs
 * @status stable
 * @since 2.0
 *
 * @dependency koerber-icon
 * @dependency koerber-popup
 * @dependency koerber-tag
 *
 * @slot - The listbox options. Must be `<koerber-select-option>` elements.
 * @slot prefix - Used to prepend a presentational icon or similar element to the combobox.
 * @slot clear-icon - An icon to use in lieu of the default clear icon.
 * @slot expand-icon - The icon to show when the control is expanded and collapsed. Rotates on open and close.
 *
 * @event koerber-change - Emitted when the control's value changes.
 * @event koerber-clear - Emitted when the control's value is cleared.
 * @event koerber-input - Emitted when the control receives input.
 * @event koerber-focus - Emitted when the control gains focus.
 * @event koerber-blur - Emitted when the control loses focus.
 * @event koerber-show - Emitted when the select's menu opens.
 * @event koerber-after-show - Emitted after the select's menu opens and all animations are complete.
 * @event koerber-hide - Emitted when the select's menu closes.
 * @event koerber-after-hide - Emitted after the select's menu closes and all animations are complete.
 *
 * @csspart combobox - The container the wraps the prefix, combobox, clear icon, and expand button.
 * @csspart prefix - The container that wraps the prefix slot.
 * @csspart display-input - The element that displays the selected option's label, an `<input>` element.
 * @csspart listbox - The listbox container where options are slotted.
 * @csspart tags - The container that houses option tags when `multiselect` is used.
 * @csspart tag - The individual tags that represent each multiselect option.
 * @csspart tag__base - The tag's base part.
 * @csspart tag__content - The tag's content part.
 * @csspart tag__remove-button - The tag's remove button.
 * @csspart tag__remove-button__base - The tag's remove button base part.
 * @csspart clear-button - The clear button.
 * @csspart expand-icon - The container that wraps the expand icon.
 * @csspart form-control-error-message - The error's message wrapper.
 */
export default class Select extends UIKitElement implements UIKitFormControl {
    static styles: CSSResultGroup;
    static dependencies: {
        'koerber-icon': typeof Icon;
        'koerber-popup': typeof Popup;
        'koerber-tag': typeof Tag;
        'koerber-spinner': typeof Spinner;
    };
    private readonly localize;
    private typeToSelectString;
    private typeToSelectTimeout;
    popup: Popup;
    combobox: HTMLSlotElement;
    displayInput: HTMLInputElement;
    valueInput: HTMLInputElement;
    listbox: HTMLSlotElement;
    private hasFocus;
    displayLabel: string;
    currentOption: SelectOption;
    selectedOptions: SelectOption[];
    private hasClearIcon;
    /** The name of the select, submitted as a name/value pair with form data. */
    name: string;
    /**
     * The current value of the select, submitted as a name/value pair with form data. When `multiple` is enabled, the
     * value will be a space-delimited list of values based on the options selected.
     */
    value: string | string[];
    /** The default value of the form control. Primarily used for resetting the form control. */
    defaultValue: string | string[];
    /** Placeholder text to show as a hint when the select is empty. */
    placeholder: string;
    /** The select's size. */
    size: 'small' | 'medium' | 'large';
    /** Adds a loader/spinner in the suffix of the select control */
    loading: boolean;
    /** Displays loading message when loading flag set to true */
    loadingMessage: string;
    /** Allows more than one option to be selected. */
    multiple: boolean;
    /**
     * Sets the maximum height for the dropdown box before the scrollbar appears.
     */
    maxHeight: number;
    /**
     * The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to
     * indicate the number of additional items that are selected. Set to 0 to remove the limit.
     */
    maxOptionsVisible: number;
    /** Disables the select control. */
    disabled: boolean;
    /** Adds a clear button when the select is not empty. */
    clearable: boolean;
    /**
     * Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can
     * use the `show()` and `hide()` methods and this attribute will reflect the select's open state.
     */
    open: boolean;
    /**
     * Enable this option to prevent the listbox from being clipped when the component is placed inside a container with
     * `overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.
     */
    hoist: boolean;
    /**
     * The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox
     * inside of the viewport.
     */
    placement: 'top' | 'bottom';
    /** The select's required attribute. */
    required: boolean;
    /** Enables search functionality in the select box. */
    allowSearch: boolean;
    /**
     * Used to indicate that the input has some error based on some rule.
     */
    error: boolean;
    /**
     * Used to indicate that the input has some error based on some rule.
     */
    loadingErrorMessage: string;
    /** The component accessible label name */
    accessibleName: string;
    /** The component accessible description */
    accessibleDescription: string;
    connectedCallback(): void;
    private addOpenListeners;
    private removeOpenListeners;
    private handleFocus;
    private handleBlur;
    private handleDocumentFocusIn;
    private handleDocumentKeyDown;
    private shouldShowClearIcon;
    private isSearchable;
    private isClearable;
    private isDisabled;
    private handleDocumentMouseDown;
    private handleComboboxMouseDown;
    private handleComboboxKeyDown;
    private handleClearClick;
    private handleClearMouseDown;
    private handleOptionClick;
    private handleDefaultSlotChange;
    private handleTagRemove;
    private getAllOptions;
    private getFirstOption;
    private setCurrentOption;
    private setSelectedOptions;
    private toggleOptionSelection;
    private selectionChanged;
    private syncOptions;
    handleSizeChange(): void;
    handleDisabledChange(): void;
    handleValueChange(): void;
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
