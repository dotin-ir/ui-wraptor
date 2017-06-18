import React, {PropTypes} from 'react';
import BaseComponent from '../BaseComponent'


class PageTitle extends BaseComponent {
    static propTypes ={
        text : PropTypes.string.isRequired,
        cssStyle: PropTypes.object
    };
    static defaultProps = {
        cssStyle: {
            paddingRight: "2em",
            paddingLeft: "2em",
            paddingTop: "2em"
        },
    };
    static contextTypes = {
        theme: PropTypes.object.isRequired
    };
    constructor(props, state) {
        super(props, state);
    }

    render() {
        const {
            text,
            cssStyle,
        } = this.props;
        var style = this.context.theme.isRtl ? Object.assign(cssStyle, {direction:'rtl'}) : Object.assign(cssStyle, {direction:'ltr'});
        return (
            <div>
                <h3 style={style}>{text}</h3>
            </div>
        );
    }

}

export default PageTitle;