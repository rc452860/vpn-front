import React from 'react';
import PropTypes from 'prop-types';
import {Table, Popconfirm, Button} from 'antd';

class ProductList extends React.Component {
  static propTypes = {
    onDelete: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired
  }
  constructor() {
    super()
    this.columns = [
      {
        title: 'Name',
        dataIndex: 'name'
      }, {
        title: 'Actions',
        render: (text, record) => {
          return (
            <Popconfirm title="Delete?" onConfirm={() => this.props.onDelete(record.id)}>
              <Button>Delete</Button>
            </Popconfirm>
          )
        }
      }
    ]
  }
  render() {
    return (
      <Table dataSource={this.props.products} columns={this.columns}>

      </Table>
    )
  }
}
// const ProductList = ({ onDelete, products }) => {   const columns = [{
// title: 'Name',     dataIndex: 'name',   }, {     title: 'Actions',
// render: (text, record) => {       return (         <Popconfirm
// title="Delete?" onConfirm={() => onDelete(record.id)}>
// <Button>Delete</Button>         </Popconfirm>       );     },   }];   return
// (     <Table       dataSource={products}       columns={columns}     />   );
// };

// ProductList.propTypes = {
//   onDelete: PropTypes.func.isRequired,
//   products: PropTypes.array.isRequired
// };

export default ProductList;
