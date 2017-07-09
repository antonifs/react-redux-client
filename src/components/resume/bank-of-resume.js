import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import  from '../../actions';

const products = [{
                        id: 1,
                        name: "Product1",
                        price: 120
                    }, 
                    {
                        id: 2,
                        name: "Product2",
                        price: 80
                    }];

class BankOfResume extends Component {

    componentWillMount() {
        this.props.loadUsers();
    }

    render () {
        return (
            <div>
                <h2> List of Resumes  </h2>
                <BootstrapTable data={products} striped hover>
                    <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return { users: state.users };
}

export default connect(mapStateToProps, actions)(BankOfResume);
