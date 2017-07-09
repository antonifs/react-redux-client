import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const products = [{
                        id: 1,
                        name: "John Doe",
                        date_submitted: "2017-02-02"
                    }, 
                    {
                        id: 2,
                        name: "Jane Doe",
                        date_submitted: "2017-02-02"
                    }];

class BankOfResume extends Component {

    componentWillMount() {
        this.props.loadUsers();
    }

    render () {

        return (
            <div>
                <h2> Resume  </h2>
                <BootstrapTable data={products} striped hover>
                    <TableHeaderColumn isKey dataField='id'>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='date_submitted'>Date Submitted</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return { users: state.users };
}

export default connect(mapStateToProps, actions)(BankOfResume);
