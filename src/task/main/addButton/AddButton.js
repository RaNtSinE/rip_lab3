import React, { Component } from 'react';
import './AddButton.css';
import consts from "../../../Consts"

class AddButton extends Component {
    constructor(props) {
        super(props);

        this.addButtonClickListener = this.addButtonClickListener.bind(this);
    }

    addButtonClickListener() {
        this.props.changeWindow(consts.EDIT_WINDOW);
        this.props.changeEditMode(consts.ADD_TASK)
        this.props.selectTask(-1);
    }

    render() {
        return (
            <div className="AddButton" onClick={this.addButtonClickListener}>
                <div>Добавить</div>
            </div>
        );
    }
}

export default AddButton;
