import React, { Component } from 'react';
import './EditWindow.css';
import EditButton from "./editButton/EditButton"
import consts from "../../Consts"

class EditWindow extends Component {
    constructor(props) {
        super(props);

        let name = "";
        let text = "";
        let isComplete = false;
        if (this.props.currentTask)
        {
            name = this.props.currentTask.name;
            text = this.props.currentTask.text;
            isComplete = this.props.currentTask.isComplete;
        }
        this.state = {
            name: name,
            text: text,
            isComplete: isComplete
        }

        this.nameInputChange = this.nameInputChange.bind(this);
        this.textInputChange = this.textInputChange.bind(this);
        this.completeInputChange = this.completeInputChange.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.resetState = this.resetState.bind(this);
        this.closeButtonClickListener = this.closeButtonClickListener.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.currentStateTask === -1 && prevProps.currentStateTask !== -1)
            this.resetState();
    }

    resetState() {
        this.state = {
            name: "",
            text: "",
            isComplete: false
        }
    }

    nameInputChange(event) {
        this.setState({name: event.target.value});
    }

    textInputChange(event) {
        this.setState({text: event.target.value});
    }

    completeInputChange(event) {
        this.setState({isComplete: event.target.checked})
    }

    updateTask() {
        if (this.props.currentTask && this.props.editMode === consts.EDIT_TASK)
        {
            let localTask = this.props.currentTask;
            localTask.name = this.state.name;
            localTask.text = this.state.text;
            localTask.isComplete = this.state.isComplete;
            this.props.updateTask(localTask);
        }
        else
        {
            let localTask = {id: -1, name: this.state.name, text: this.state.text, isComplete: this.state.isComplete};
            this.props.createTask(localTask);
        }
        this.props.changeWindow("")
        this.props.changeEditMode("");
        this.props.selectTask(-1);
    }

    closeButtonClickListener() {
        this.props.changeWindow("");
        this.props.changeEditMode("");
        this.props.selectTask(-1);
    }

    render() {
        return (
            <div className="EditWindow">
                <div className="TaskContainer">
                    <div>
                        <input className={"TaskName"} onChange={this.nameInputChange} value={this.state.name} type="text"/>
                        <textarea className={"TaskText"} onChange={this.textInputChange} value={this.state.text}/>
                        <div className={"IsComplete"}>
                            <div>IsComplete: </div>
                            <input type="checkbox" onChange={this.completeInputChange} checked={this.state.isComplete}/>
                        </div>
                    </div>
                    <div className="TaskControls">
                        <EditButton updateTask={this.updateTask} changeEditMode={this.props.changeEditMode} editMode={this.props.editMode}/>
                    </div>
                </div>
                <div className="CloseButton" onClick={this.closeButtonClickListener}>
                    X
                </div>
            </div>
        );
    }
}

export default EditWindow;
