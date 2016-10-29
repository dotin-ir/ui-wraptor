import React, {PropTypes} from 'react';
import BaseComponent from "../BaseComponent";
import SvgIcon from 'dotin-material-ui/SvgIcon'

class Dotin extends BaseComponent {
    static propTypes = {
        /**
         * This is the fill color of the Dollar icon.
         * If not specified, this component will default
         * to color provided by the ThemeProvider.
         */
        color: PropTypes.string,
        /**
         * This is the icon color when the mouse hovers over the icon.
         */
        hoverColor: PropTypes.string,
        /**
         * Override the inline-styles of the root element.
         */
        style: PropTypes.object,
    };

    render() {
        const {
            color,
            hoverColor,
            style
        } = this.props;

        return <SvgIcon style={style} color={color} hoverColor={hoverColor}
                        width="230.000000pt" height="230.000000pt" viewBox="0 0 230.000000 230.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,250.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">
                <path d="M1500 1934 c-73 -20 -126 -52 -182 -112 -155 -165 -153 -408 4 -565 147 -148 381 -159 548 -27 72 57 129 166 144 273 l5 37 -85 0 c-80 0 -84 -1 -84 -22 -1 -33 -37 -108 -68 -141 -68 -73 -193 -95 -277 -50 -144 76 -178 240 -78 371 28 38 112 82 156 82 l27 0 0 85 0 85 -27 -1 c-16 0 -53 -7 -83 -15z" />
                <path d="M1630 1928 c0 -20 9 -26 67 -41 142 -37 233 -133 264 -277 9 -40 15 -50 31 -50 19 0 20 4 15 51 -20 163 -158 300 -339 333 -35 6 -38 5 -38 -16z" />
                <path d="M1630 1867 c0 -21 6 -26 37 -32 115 -21 203 -108 234 -228 9 -37 16 -47 31 -47 18 0 20 4 14 43 -10 62 -48 137 -92 181 -40 40 -134 89 -191 101 -30 6 -33 4 -33 -18z" />
                <path d="M1100 1195 l0 -55 110 0 110 0 0 55 0 55 -110 0 -110 0 0 -55z" />
                <path d="M335 1066 c-60 -19 -96 -40 -132 -78 -48 -50 -63 -95 -63 -190 0 -102 19 -148 83 -205 72 -62 125 -73 360 -73 l197 0 0 220 0 220 95 0 95 0 0 -220 0 -220 230 0 230 0 0 280 0 280 -65 0 -65 0 0 -220 0 -220 -95 0 -95 0 0 220 0 220 -230 0 -230 0 0 -221 0 -220 -143 3 c-134 3 -146 5 -180 28 -64 44 -84 129 -47 205 24 49 63 74 130 82 l50 6 0 58 0 59 -42 -1 c-24 0 -61 -6 -83 -13z" />
                <path d="M1545 800 l0 -280 70 0 70 0 0 280 0 280 -70 0 -70 0 0 -280z" />
                <path d="M1800 1021 l0 -58 58 -6 c86 -7 139 -38 164 -94 52 -118 -29 -222 -174 -223 l-58 0 0 -59 c0 -54 2 -59 24 -65 39 -10 151 10 210 37 93 43 136 121 136 246 0 67 -4 87 -28 132 -49 95 -149 149 -274 149 l-58 0 0 -59z" />
                <path d="M762 408 l3 -53 110 0 110 0 3 53 3 52 -116 0 -116 0 3 -52z" />
            </g>
        </SvgIcon>;
    }

}

export default Dotin;