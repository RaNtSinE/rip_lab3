import React, { Component } from 'react';
import './EditButton.css';
import consts from "../../../Consts"

class EditButton extends Component {
    constructor(props) {
        super(props);

        this.editClickListener = this.editClickListener.bind(this);
    }

    editClickListener() {
        this.props.changeWindow(consts.EDIT_WINDOW);
        this.props.changeEditMode(consts.EDIT_TASK);
    }

    render() {
        return (
            <div className="EditButton" onClick={this.editClickListener}>
                Редактировать
            </div>
        );
    }
}

export default EditButton;
