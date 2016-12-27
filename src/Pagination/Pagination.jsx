
import React, {PropTypes} from 'react';
import BaseComponent from '../BaseComponent'
import {createUltimatePagination, ITEM_TYPES} from 'react-ultimate-pagination'
import FlatButton from '../FlatButton';
import NavigationChevronLeft from "dotin-material-ui/svg-icons/navigation/chevron-left";
import NavigationChevronRight from "dotin-material-ui/svg-icons/navigation/chevron-right";
import NavigationToLeftPage from "dotin-material-ui/svg-icons/navigation/first-page";
import NavigationToRightPage from "dotin-material-ui/svg-icons/navigation/last-page";

const flatButtonStyle = {
    minWidth: 36
};

const Page = ({value, isActive, onClick}) => (
    <FlatButton style={flatButtonStyle} label={value.toString()} primary={isActive} onClick={onClick}/>
);

const Ellipsis = ({onClick}) => (
    <FlatButton style={flatButtonStyle} label="..." onClick={onClick}/>
);

const FirstPageLink = ({onClick}, context) => (
    <FlatButton style={flatButtonStyle} icon={context.theme.isRtl ? <NavigationToRightPage/> : <NavigationToLeftPage/>} onClick={onClick}/>
);
FirstPageLink.contextTypes = {
    theme: PropTypes.object.isRequired
};

const PreviousPageLink = ({onClick}, context) => (
    <FlatButton style={flatButtonStyle} icon={context.theme.isRtl ? <NavigationChevronRight/> : <NavigationChevronLeft/>} onClick={onClick}/>
);
PreviousPageLink.contextTypes = {
    theme: PropTypes.object.isRequired
};

const NextPageLink = ({onClick}, context) => (
    <FlatButton style={flatButtonStyle} icon={context.theme.isRtl ? <NavigationChevronLeft/> : <NavigationChevronRight/>} onClick={onClick}/>
);
NextPageLink.contextTypes = {
    theme: PropTypes.object.isRequired
};

const LastPageLink = ({onClick}, context) => (
    <FlatButton style={flatButtonStyle} icon={context.theme.isRtl ? <NavigationToLeftPage/> : <NavigationToRightPage/>} onClick={onClick}/>
);
LastPageLink.contextTypes = {
    theme: PropTypes.object.isRequired
};

const Wrapper = (props) => (
    <div style={{display: 'inline-block'}}>{props.children}</div>
);

const itemTypeToComponent = {
    [ITEM_TYPES.PAGE]: Page,
    [ITEM_TYPES.ELLIPSIS]: Ellipsis,
    [ITEM_TYPES.FIRST_PAGE_LINK]: FirstPageLink,
    [ITEM_TYPES.PREVIOUS_PAGE_LINK]: PreviousPageLink,
    [ITEM_TYPES.NEXT_PAGE_LINK]: NextPageLink,
    [ITEM_TYPES.LAST_PAGE_LINK]: LastPageLink
};

const UltimatePaginationMaterialUi = createUltimatePagination(
    {
        itemTypeToComponent: itemTypeToComponent,
        WrapperComponent: Wrapper,
    }
);

function calculateToIndex(fromIndex, countPerPage, totalCount) {
    let toIndex = (fromIndex + countPerPage) - 1;
    return (toIndex <= totalCount ? toIndex : totalCount);
}

function calculateTotalPages(totalCount, countPerPage) {
    let realTotal = Math.floor(totalCount / countPerPage);
    let remained = totalCount % countPerPage;
    if (realTotal > 0 && remained > 0) {
        realTotal += 1;
    }
    return realTotal;
}

class Pagination extends BaseComponent {

    static propTypes = {
        totalCount: PropTypes.number.isRequired,
        countPerPage: PropTypes.number.isRequired,
        currentPage: PropTypes.number,
        showDetails: PropTypes.bool,
        onChangePage: PropTypes.func.isRequired,
    };

    static contextTypes = {
        theme: PropTypes.object.isRequired
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            currentPage: (props.currentPage ? props.currentPage : 1),
            totalPages: calculateTotalPages(props.totalCount, props.countPerPage),
            fromIndex: 1,
            toIndex: calculateToIndex(1, props.countPerPage, props.totalCount),
        };
        this.handlePaging = this.handlePaging.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        let fromIndex = ((nextProps.currentPage - 1) * nextProps.countPerPage) + 1;
        this.setState({
            currentPage: (nextProps.currentPage ? nextProps.currentPage : 1),
            totalPages: calculateTotalPages(nextProps.totalCount, nextProps.countPerPage),
            fromIndex: fromIndex,
            toIndex: calculateToIndex(fromIndex, nextProps.countPerPage, nextProps.totalCount),
        });
    }

    handlePaging(newPage) {
        const {
            countPerPage,
            totalCount,
            showDetails,
            onChangePage,
        } = this.props;
        if ((newPage - this.state.currentPage) === 0) {
            return
        }
        let details = {};
        let fromIndex = ((newPage - 1) * countPerPage) + 1;
        if (showDetails) {
            let toIndex = calculateToIndex(fromIndex, countPerPage, totalCount);
            Object.assign(details, {fromIndex: fromIndex, toIndex: toIndex})
        }
        this.setState(Object.assign(this.state, {currentPage: newPage}, details));
        onChangePage(fromIndex, countPerPage, newPage)
    }

    render() {
        const {
            totalCount,
            showDetails,
        } = this.props;
        const detailsStyle = {
            fontSize: '14px',
            fontWeight: '500',
            color: this.context.theme.palette.accent1Color,
            display: 'inline-block',
            verticalAlign: 'middle',
            direction: this.context.theme.isRtl ? 'rtl' : 'ltr'
        };
        let details = (<span style={detailsStyle}>{this.state.fromIndex}-{this.state.toIndex} / {totalCount}</span>);
        return (
            <div>
                <UltimatePaginationMaterialUi
                    totalPages={this.state.totalPages}
                    currentPage={this.state.currentPage}
                    onChange={this.handlePaging} />
                {showDetails ? details : null}
            </div>
        );
    }

}

export default Pagination;