import React, { Component } from 'react';
import './Task.css';
import consts from "../../../Consts"

class Task extends Component {
    constructor(props) {
        super(props);

        this.taskClickListener = this.taskClickListener.bind(this);
        this.taskIsCompleteChange = this.taskIsCompleteChange.bind(this);
    }

    taskClickListener() {
        this.props.selectTask(this.props.id);
        this.props.changeWindow(consts.TASK_WINDOW);
    }

    taskIsCompleteChange(event) {

        this.props.updateIsComplete(this.props.id, event.target.checked);
    }

    render() {
        return (
            <div className="TaskRow">
                <div className="TaskRowName" onClick={this.taskClickListener}>
                    {this.props.name}
                </div>
                <input type="checkbox" checked={this.props.checked} onChange={this.taskIsCompleteChange}/>
            </div>
        );
    }
}

export default Task;
