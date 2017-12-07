import React, { Component } from 'react';

function Tablecat ({list}){
    return (
      <table className='table'>
        <tr>
          <td>Category Name</td>
          <td>Category Description</td>
        </tr>
        {list.map(item => (
            <tr key={item.id} className='table-row'>
              <td style={{width: '10%'}}>{item.name}</td>
              <td style={{width: '10%'}}>{item.description}</td>
              <td style={{width: '10%'}}>
                <Button onClick={()=> onDismiss(item.id)} className="button-inline">
                  Dismiss
                </Button>
              </td> 
              <td style={{width: '10%'}}>
                <Button onClick={()=> update(item.id)} className="button-inline">
                  Update
                </Button>
              </td> 
            </tr>
        ))}
      </table>
    );
  }

function Tableprod ({list}){
    return (
      <div className='tableprod'>
        {list.map(item => (
            <div key={item.id} className='table-row'>
              <span style={{width: '30%'}}>{item.name}</span>
              <span style={{width: '30%'}}>{item.price}</span> 
              <span style={{width: '30%'}}>{item.description}</span> 
              <span style={{width: '30%'}}>{item.category_name}</span>
              <span style={{width: '10%'}}>
                <Button onClick={()=> onDismiss(item.id)} className="button-inline">
                  Dismiss
                </Button>
              </span> 
              <span style={{width: '10%'}}>
                <Button onClick={()=> update(item.id)} className="button-inline">
                  Update
                </Button>
              </span> 
            </div>
        ))}
      </div>
    );
  }

  function update(id){

  }

  function onDismiss(id){

  }

  class Button extends Component{
    render(){
      const {onClick, className='', children} = this.props;
      return (
        <button onClick={onClick} className={className} type="button">
          {children}
        </button>
      );
    }
  }

//var urls = [{url:'http://localhost/acmeproducts/api/read_all_categories.php', name: 'category'},{url:'http://localhost/acmeproducts/api/read_all_products.php', name: 'products'}];

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      category: []
    };
    this.fetchAll = this.fetchAll.bind(this);
  }

  // Promise.all(urls.map(url => fetch(url).then(res => res.text())
  //.then(html => (/* stuff */))).then(() => console.log('all urls were fetched and processed')) 

  fetchAll(){
   /*  Promise.all(urls.map(obj => fetch(obj.url)
    .then(response => response.json())
    .then(response => this.setState({obj.name :response}))
    .catch(e => e)
    )); */
    fetch('http://localhost/acmeproducts/api/read_all_products.php')
      .then(response => response.json())
      .then(response => this.setState({products:response}))
      .catch(e => e);
    fetch('http://localhost/acmeproducts/api/read_all_categories.php')
      .then(response => response.json())
      .then(response => this.setState({category:response}))
      .catch(e => e);
  }
  componentDidMount(){
    this.fetchAll();
  }
  createCategory(){
    fetch('http://localhost/acmeproducts/api/create_category.php')
    .then(response => response.json())
    .then(response => this.setState({category:response}))
    .catch(e => e);
  }
  createProduct(){

  }
  render() {
    console.log(this.state.category);
    return (
      <div className="App">
        <div className='interaction'>
          <div> 
            <Button onClick={()=>this.createCategory()}>
              Create Category
            </Button>
          </div>
          <Tablecat list={this.state.category}/>
          </div>
        <div className='interaction'>
            <Button onClick={()=>this.createProduct()}>
              Create Product
            </Button>
          </div>
        <Tableprod list={this.state.products}/>
      </div>
    );
  }
}

export default App;
