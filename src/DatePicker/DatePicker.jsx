import React, {PropTypes} from 'react';
import BaseComponent from "../BaseComponent";
import MUIDatePicker from 'dotin-material-ui/DatePicker';
import areIntlLocalesSupported from 'intl-locales-supported';


class DatePicker extends BaseComponent {
    static propTypes = {
        /**
         * The css class name of the root element.
         */
        className: PropTypes.string,
        /**
         * This is the initial date value of the component.
         * If either `value` or `valueLink` is provided they will override this
         * prop with `value` taking precedence.
         */
        defaultDate: PropTypes.object,
        /**
         * Disables the year selection in the date picker.
         */
        disableYearSelection: PropTypes.bool,
        /**
         * Disables the DatePicker.
         */
        disabled: PropTypes.bool,
        /**
         * 	The hint content to display.
         */
        hintText: PropTypes.object,
        /**
         * 	Locale used for formatting the DatePicker date strings. Other than for 'en-US', you must provide a DateTimeFormat that supports the chosen locale.
         */
        locale: PropTypes.string,
        /**
         * 	Constructor for date formatting for the specified locale. The constructor must follow this specification: ECMAScript Internationalization API 1.0 (ECMA-402). Intl.DateTimeFormat is supported by most modern browsers, see http://caniuse.com/#search=intl, otherwise https://github.com/andyearnshaw/Intl.js is a good polyfill.
            By default, a built-in DateTimeFormat is used which supports the 'en-US' locale.
         */
        dateTimeFormat: PropTypes.func
    };
    
    static contextTypes = {
        theme: PropTypes.object.isRequired,
    };
    
    render() {
        const {
            className,
            defaultDate,
            disabled,
            disableYearSelection,
            hintText,
        } = this.props;
        let locale = (this.props.locale !== null && this.props.locale !== undefined) ?  this.props.locale : this.context.theme.locale;
        let DateTimeFormat;
        if (areIntlLocalesSupported(['fr', 'fa-IR'])) {
            DateTimeFormat = global.Intl.DateTimeFormat;
        } else {
            const IntlPolyfill = require('intl');
            DateTimeFormat = IntlPolyfill.DateTimeFormat;
            require('intl/locale-data/jsonp/fr');
            require('intl/locale-data/jsonp/fa-IR');
        }
        return <MUIDatePicker
            className = {className}
            defaultDate = {defaultDate}
            disabled = {disabled}
            disableYearSelection = {disableYearSelection}
            hintText = {hintText}
            locale = {locale}
            DateTimeFormat = {DateTimeFormat}
        />
    }
}

export default DatePicker;
