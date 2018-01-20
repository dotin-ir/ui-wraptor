import React, {Component,PropTypes} from 'react';
import IconMenu from 'dotin-material-ui/IconMenu';
import MenuItem from 'dotin-material-ui/MenuItem';
import IconButton from 'dotin-material-ui/IconButton';
import ContentFilter from 'dotin-material-ui/svg-icons/content/filter-list';
import SaveButton from 'dotin-material-ui/svg-icons/content/save';

/**
 * Three controlled examples, the first allowing a single selection, the second multiple selections,
 * the third using internal state.
 */
export default class IconMultiSelectList extends Component {
    static propTypes = {
        columnsDefinition: PropTypes.array,
        onChange: PropTypes.func
    };

    constructor(props, sate){
        super(props, sate);
        this.state = {
            valueMultiple: [],
            menuOpen: false
        };
        this.switchShowList = this.switchShowList.bind(this);
        this.save = this.save.bind(this);
        this.getDefaultValues = this.getDefaultValues.bind(this);
        this.getDefaultValues();
    }
    getDefaultValues(){
        this.props.columnsDefinition.map((columnDefinition, index)=>{
            if(columnDefinition.present || columnDefinition.present === undefined && this.state.valueMultiple.indexOf(index) == -1)
                this.state.valueMultiple.push(index);
        })
    }
    handleChangeMultiple = (event, value) => {
        this.setState({
            valueMultiple: value,
        });
    };

    switchShowList(){
        var res = true;
        if(this.state.menuOpen)
            res = false;
        this.setState(Object.assign(this.state, {menuOpen: res}))
    }

    save(columnsDefinition) {
        columnsDefinition.map((columnDefinition, index)=> {
            columnDefinition.present = this.state.valueMultiple.indexOf(index) != -1;
        });
        this.switchShowList();
        this.props.onChange(columnsDefinition);
    }
    createMenuItems(columnDefinition, key){
        return(
        <MenuItem key={key} value={key} primaryText={columnDefinition.name}/>
        )
    }
    render() {
        const {
            columnsDefinition,
        } = this.props;
        return (
            <div>
                <IconMenu
                    iconButtonElement={<IconButton onClick={this.switchShowList}><ContentFilter /></IconButton>}
                    onChange={this.handleChangeMultiple}
                    value={this.state.valueMultiple}
                    multiple={true}
                    open={this.state.menuOpen}
                >
                    {columnsDefinition.map((columnDefinition, key)=>this.createMenuItems(columnDefinition,key))}
                    <IconButton onClick={this.save.bind(this,columnsDefinition)}><SaveButton /></IconButton>
                </IconMenu>
            </div>
        );
    }
}