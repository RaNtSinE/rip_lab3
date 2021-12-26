import React, { Component } from 'react';
import './Main.css';
import Task from "./task/Task";
import AddButton from "./addButton/AddButton";

class Main extends Component {
    render() {
        const tasks = this.props.tasks.map((task) => {
            return(
                <Task
                    key={task.id}
                    id={task.id}
                    name={task.name}
                    changeWindow={this.props.changeWindow}
                    selectTask={this.props.selectTask}
                    checked={task.isComplete}
                    updateIsComplete={this.props.updateIsComplete}
                />
            )
        })

        return (
            <div className="Main">
                <AddButton changeWindow={this.props.changeWindow} changeEditMode={this.props.changeEditMode} selectTask={this.props.selectTask}/>
                <div className="TasksContainer">
                    {tasks}
                </div>
            </div>
        );
    }
}

export default Main;
