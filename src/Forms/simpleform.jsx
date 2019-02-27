import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { userAdd } from '../actions/userAction';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class SimpleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Hello',
        }
        this.handlerSubmit = this.handlerSubmit.bind(this);
    }
    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        });

    };
    handlerSubmit(e) {
        e.preventDefault();
        const data = this.state.name;
        let user = {
            'name': data
        }
        this.props.fireProp(user);
        alert('Form submit');
    }

    render() {
        console.log(this.props.user);
        const { classes } = this.props;
        return (
            <Fragment>
                <h1>Simple Form</h1>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="outlined-name"
                        label="Name"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange}
                        margin="normal"
                        name="name"
                        variant="outlined"
                    />
                    <Button variant="contained" color="secondary" className={classes.button} onClick={this.handlerSubmit}>
                        Secondary
                    </Button>
                </form>
            </Fragment>);
    }
}
SimpleForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapStateTpProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fireProp: bindActionCreators(userAdd, dispatch)
    }
}



export default connect(mapStateTpProps, mapDispatchToProps)(withStyles(styles)(SimpleForm));