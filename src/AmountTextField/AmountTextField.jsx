import React, {PropTypes} from 'react';
import RestrictedInput from './AmountPatternChecker';
import Tooltip from 'dotin-material-ui/internal/Tooltip';

const tooltipStyle = {
    boxSizing: 'border-box',
    marginTop: '45px',
}

class AmountTextField extends React.Component{
    static propTypes = {
        /**
         * Dotin property type
         * The value of label
         * The content of the floating label(material-ui floatingLabelText).
         */
        label: PropTypes.string,
        /**
         * The css class name of the root element.
         */
        className: PropTypes.string,
        /**
         * The text string to use for the default value.
         */
        defaultValue: PropTypes.any,
        /**
         * If true, the select field will be disabled.
         */
        disabled: PropTypes.bool,
        /**
         * The error content to display.
         */
        errorText: PropTypes.node,
        /**
         * The hint content to display.
         */
        hintText: PropTypes.node,
        /**
         * The id prop for the text field.
         */
        id: PropTypes.string,
        /**
         * Callback function fired when a menu item is selected.
         *
         * @param {object} event Click event targeting the menu item
         * that was selected.
         * @param {number} key The index of the selected menu item.
         * @param {any} payload The `value` prop of the selected menu item.
         */
        onChange: PropTypes.func,
        /**
         * Override the inline-styles of the root element.
         */
        style: PropTypes.object,
        /**
         * The value of the text field.
         */
        value: PropTypes.any,

        validate: PropTypes.func,

        onEnter: PropTypes.func,

        /**
         * Specifies the type of input to display
         * chose one of (num nnum pnum dnum pdnum ndnum)
         */

        /**
         * by pressing *, 000 will add to field
         */
        hasStar: PropTypes.bool,
        /**
         * put comma in number fields. (it comes with num, pnum or nnum)
         */
        hasCommas: PropTypes.bool,
        /**
         * show number tooltip in letter
         */
        hasLetterTooltip: PropTypes.bool,
        /**
         * check just positive integer numbers
         */
        pnum: PropTypes.bool,
        /**
         * check just negative integer numbers
         */
        nnum: PropTypes.bool,
        /**
         * check integer numbers
         */
        num: PropTypes.bool,
        /**
         * check just positive double numbers
         */
        pdnum: PropTypes.bool,
        /**
         * check just negative double numbers
         */
        ndnum: PropTypes.bool,
        /**
         * check double numbers
         */
        dnum: PropTypes.bool,

        decimalPlaces: PropTypes.number,
        numericPlaces: PropTypes.number,
    };


    constructor(props) {
        super(props);
        this.state = {
            value: '',
            pattern: '',
            numericPlaces: props.numericPlaces != null && props.numericPlaces != undefined ? props.numericPlaces.toString() : '15',
            decimalPlaces: props.decimalPlaces != null && props.decimalPlaces != undefined ? props.decimalPlaces.toString() : '10',
            isZ: false,
            isFloat: false,

            showTooltip: false,
            tooltipLabel: '',
        };
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount() {
        let {numericPlaces, decimalPlaces, isZ, isFloat} = this.state;
        let pattern;

        pattern = {
            num : new RegExp("^-?(\\d{0," + numericPlaces +"})?$" , 'g'),
            nnum : new RegExp("^-(\\d{0," + numericPlaces +"})?$" , 'g'),
            pnum : new RegExp("^(\\d{0," + numericPlaces +"})?$" , 'g'),
            dnum : new RegExp("^-?(\\d{0," + numericPlaces +"})?(\\.[0-9]{0," + decimalPlaces + "})?$" , 'g'),
            ndnum : new RegExp("^-(\\d{0," + numericPlaces +"})?(\\.[0-9]{0," + decimalPlaces + "})?$" , 'g'),
            pdnum : new RegExp("^(\\d{0," + numericPlaces +"})?(\\.[0-9]{0," + decimalPlaces + "})?$" , 'g'),
        };

        let _pattern;

        if(this.props.num) {
            _pattern = pattern.num;
            isZ = true;
        }
        else if(this.props.pnum) {
            _pattern = pattern.pnum;
            isZ = true;
        }
        else if(this.props.nnum) {
            _pattern = pattern.nnum;
            isZ = true;
        }
        else if(this.props.dnum) {
            _pattern = pattern.dnum;
            isFloat = true;
        }
        else if(this.props.pdnum) {
            _pattern = pattern.pdnum;
            isFloat = true;
        }
        else if(this.props.ndnum) {
            _pattern = pattern.num;
            isFloat = true;
        }

        this.setState(Object.assign(this.state, {
            pattern: _pattern,
            isZ: isZ,
            isFloat: isFloat,
        }))
    }

    componentDidMount() {
        const {value} = this.props
        if(value != undefined && value != null) {
            if (this.props.hasCommas) {
                const numValueWithCommas = addCommaToAmount(this.props.value, 3, this.state.isZ, this.state.isFloat)
                this.setState(Object.assign(this.state, {
                    value: numValueWithCommas,
                }));
            }
            else{
                this.setState(Object.assign(this.state, {
                    value: value
                }))
            }
        }
    }

    handleChange(value) {
        if (this.props.onChange) this.props.onChange(value)

        if (this.props.hasCommas) {
            const numValueWithCommas = addCommaToAmount(value, 3, this.state.isZ, this.state.isFloat)
            this.setState(Object.assign(this.state, {
                value: numValueWithCommas,
            }));
        }
        else{
            this.setState(Object.assign(this.state, {
                value: value
            }))
        }

        if(this.props.hasLetterTooltip) {
            const letterValue = wordifyfa(parseInt(value));

            this.setState(Object.assign(this.state, {
                showTooltip: true,
                tooltipLabel: letterValue,
            }));
        }
    }

    render() {
        return(
            <div>
                <RestrictedInput
                    fieldPattern={this.state.pattern}
                    label = {this.props.label}
                    value={this.state.value}
                    onChange={this.handleChange}
                    hasStar = {this.props.hasStar}
                    errorText = {this.props.errorText}
                    validate = {this.props.validate}

                />
                <Tooltip
                    label={this.state.tooltipLabel }
                    show={this.state.showTooltip}
                    style={tooltipStyle}
                />
            </div>

        )
    }
}

export default AmountTextField;

function splitNumber(n, m) {
    n = replaceAll(n, ",", "");
    var s = n + "";
    var res = new Array();
    while (s != "") {
        res.push(s.substring(s.length - m, s.length));
        s = s.substring(0, s.length - m);
    }

    return res;
}

function replaceAll(str, from, to) {
    var idx = str.indexOf(from);
    while (idx > -1) {
        str = str.replace(from, to);
        idx = str.indexOf(from);
    }
    return str;
}

export function addCommaToAmount(amount, num, isZ, isFloat) {
    amount += "";
    if (num == undefined) {
        num = 3;
    }
    var newAmount;
    if (isZ) {
        var neg = false;
        amount = replaceAll(amount, ",", "");
        if (parseInt(amount, 10) < 0) {
            amount = -parseInt(amount, 10) + "";
            neg = true;
        }
        var result = splitNumber(amount, num);
        if (result.length == 0)
            return "";
        newAmount = result[0];
        for (var i = 1; i < result.length; i++) {
            newAmount = result[i] + "," + newAmount;
        }
        if (neg) {
            newAmount = "-" + newAmount;
        }
    } else if (isFloat) {
        var neg = false;
        amount = replaceAll(amount, ",", "");
        if (amount.charAt(0) == "-") {
            amount = amount.substr(1);
        }
        var decimal = "";
        var decI = amount.indexOf(".");
        if (decI != -1) {
            decimal = amount.substr(decI);
        }
        amount = Math.floor(parseFloat(amount)) + "";
        var result = splitNumber(amount, num);
        if (result.length == 0)
            return "";
        newAmount = result[0];
        for (var i = 1; i < result.length; i++) {
            newAmount = result[i] + "," + newAmount;
        }
        if (neg) {
            newAmount = "-" + newAmount;
        }
        newAmount += decimal;
    }
    return newAmount;
}

export function wordifyfa(num, level) {

    if (num === null) {
        return "";
    }
    // convert negative number to positive and get wordify value
    if (num<0) {
        num = num * -1;
        return "منفی " + wordifyfa(num, level);
    }
    if (num === 0) {
        if (level === 0) {
            return "صفر";
        } else {
            return "";
        }
    }
    let result = "";
    const yekan = [" یک ", " دو ", " سه ", " چهار ", " پنج ", " شش ", " هفت ", " هشت ", " نه "];
    const dahgan = [" بیست ", " سی ", " چهل ", " پنجاه ", " شصت ", " هفتاد ", " هشتاد ", " نود "];
    const sadgan = [" یکصد ", " دویست ", " سیصد ", " چهارصد ", " پانصد ", " ششصد ", " هفتصد ", " هشتصد ", " نهصد "];
    const dah = [" ده ", " یازده ", " دوازده ", " سیزده ", " چهارده ", " پانزده ", " شانزده ", " هفده ", " هیجده ", " نوزده "]

    if (level > 0) {
        result += " و ";
        level -= 1;
    }

    if (num < 10) {
        result += yekan[num - 1];
    }
    else if (num < 20) {
        result += dah[num - 10];
    }
    else if (num < 100) {
        result += dahgan[parseInt(num / 10, 10) - 2] +  wordifyfa(num % 10, level + 1);
    }
    else if (num < 1000) {
        result += sadgan[parseInt(num / 100, 10) - 1] + wordifyfa(num % 100, level + 1);
    }
    else if (num < 1000000) {
        result += wordifyfa(parseInt(num / 1000, 10), level) + " هزار " + wordifyfa(num % 1000, level + 1);
    }
    else if (num < 1000000000) {
        result += wordifyfa(parseInt(num / 1000000, 10), level) + " میلیون " + wordifyfa(num % 1000000, level + 1);
    }
    else if (num < 1000000000000) {
        result += wordifyfa(parseInt(num / 1000000000, 10), level) + " میلیارد " + wordifyfa(num % 1000000000, level + 1);
    }
    else if (num < 1000000000000000) {
        result += wordifyfa(parseInt(num / 1000000000000, 10), level) + " تریلیارد " + wordifyfa(num % 1000000000000, level + 1);
    }
    return result;
};

