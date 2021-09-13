import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator} from '../../../redux/form_1-reducer';
import Tasks from './Tasks';

const mapStateToProps = (state) => {
    return {
        id: state.formPage.id,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}
const TasksContainer = connect(mapStateToProps, mapDispatchToProps)(Tasks);

export default TasksContainer;