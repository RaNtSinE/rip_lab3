import React, { Component } from 'react';
import './DeleteButton.css';

class DeleteButton extends Component {
    constructor(props) {
        super(props);

        this.deleteButtonClickListener = this.deleteButtonClickListener.bind(this);
    }

    deleteButtonClickListener() {
        this.props.deleteTask(this.props.taskId);
        this.props.changeWindow("");
        this.props.changeEditMode("");
        this.props.selectTask(-1);
    }

    render() {
        return (
            <div className="DeleteButton" onClick={this.deleteButtonClickListener}>
                Удалить
            </div>
        );
    }
}

export default DeleteButton;
