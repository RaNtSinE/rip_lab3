import React, { Component } from 'react';
import './EditButton.css';
import consts from '../../../Consts'

class EditButton extends Component {
    constructor(props) {
        super(props);

        this.editClickListener = this.editClickListener.bind(this);
    }

    editClickListener() {
        this.props.updateTask();
    }

    render() {
        let buttonText;

        switch (this.props.editMode) {
            case consts.EDIT_TASK:
                buttonText = "Редактировать";
                break;
            case consts.ADD_TASK:
                buttonText = "Добавить";
                break;
            default:
                buttonText = "";
                break;
        }
        return (
            <div className="EditButton" onClick={this.editClickListener}>
                {buttonText}
            </div>
        );
    }
}

export default EditButton;
