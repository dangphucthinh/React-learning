import React, { Component } from 'react';
import { connect } from 'react-redux';

class Intro extends Component {

    callEditStatusInStore = () => {
        var { dispatch } = this.props
        dispatch({
            type: "Change_edit_status"
        })
    }

    callAddInStore = () => {
        var { dispatch } = this.props
        dispatch({
            type: "Change_add_status",
            newItem: "r"
        })
    }

    callDeleteInStore = () => {
        var { dispatch } = this.props
        dispatch({
            type: "Change_delete_status",
            index: 2
        })
    }

    render() {
        return (
            <div>
                <h2> This is a new Component</h2>
                <button
                    onClick={
                        // this.callEditStatusInStore //call by mapStateToProps
                        () => this.props.useEditStatusInStore() //call by mapDispatchToProps
                    }>
                    Click me
                </button>

                <button
                    onClick={
                        this.callAddInStore
                    }>
                    hihihehe
                </button>

                <button
                    onClick={
                        this.callDeleteInStore
                    }>
                    Click one more time
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        // data : state.num,
        // edit : state.editStatus
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        useEditStatusInStore: () => {
            dispatch({
                type: "Change_edit_status"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intro);