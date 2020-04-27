import React from 'react';
import { connect } from 'react-redux';

export const TaskList = ({tasks, groupName}) =>(
    <div>
        <h3>
            {groupName}
        </h3>
        <div>
            {tasks.map(task=>(<div>{task.name}</div>))}
        </div>
    </div>
)

const mapStateToProps = (state, ownProps) =>{
    let groupID = ownProps.groupId;
    
    return {
        groupName:ownProps.groupName,
        groupID:ownProps.groupId,
        tasks:state.tasks.filter(task=>task.group  == groupID)
    }
};

export const ConnectedTaskList = connect(mapStateToProps)(TaskList)