import React, { Component } from 'react';
import './TaskWindow.css';
import DeleteButton from "./deleteButton/DeleteButton";
import EditButton from "./editButton/EditButton";

class TaskWindow extends Component {
    constructor(props) {
        super(props);

        this.closeButtonClickListener = this.closeButtonClickListener.bind(this);
    }

    closeButtonClickListener() {
        this.props.changeWindow("");
        this.props.changeEditMode("");
        this.props.selectTask(-1);
    }

    render() {
        let taskId = -1;

        if (this.props.currentTask)
            taskId = this.props.currentTask.id;

        return (
            <div className="TaskWindow">
                <div className="TaskContainer">
                    <div>
                        <div className="TaskName">
                            {this.props.currentTask.name}
                        </div>
                        <div className="TaskText">
                            {this.props.currentTask.text}
                        </div>
                        <div className={"IsComplete"}>
                            <div>IsComplete: </div>
                            <input type="checkbox" onChange={()=>{}} checked={this.props.currentTask.isComplete}/>
                        </div>
                    </div>
                    <div className="TaskControls">
                        <DeleteButton deleteTask={this.props.deleteTask}
                                      taskId={taskId}
                                      changeWindow={this.props.changeWindow}
                                      selectTask={this.props.selectTask}
                                      changeEditMode={this.props.changeEditMode}/>
                        <EditButton changeWindow={this.props.changeWindow} changeEditMode={this.props.changeEditMode}/>
                    </div>
                </div>
                <div className="CloseButton" onClick={this.closeButtonClickListener}>
                    X
                </div>
            </div>
        );
    }
}

export default TaskWindow;
