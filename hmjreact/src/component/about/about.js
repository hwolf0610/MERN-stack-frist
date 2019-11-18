import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { userInfo } from 'os';

class About extends React.Component {
  constructor(props) {
    super(props);
     
    this.state = {
      dataList: []
    };

    axios.post('http://localhost:3000/todos/show')
      .then((res) => {
        // this.state.email=res.data[0].email;
        // this.state.password=res.data[0].password;
        // alert(res.data[0].email);

        if(res.data.length > 0)
          this.setState({dataList: res.data})

        // alert("Successful!!");
      }).catch((error) => {
        console.log(error)
      });
  }
  
  render() {
    return (
        <div className="row" >
          <div className="col-lg-8">
            <h1>About</h1>
          </div>
          <div className="col-lg-8">
            <div className="col-lg-6">
              {
                this.state.dataList.map(item=>{
                  return(<div>
                    <h2>username : {item.email}</h2>  
                    <h2>userpassword : {item.password}</h2>  
                  </div>)
                })
              }  
            </div>
                
           
          </div> 
          
        </div>


    )
  }
}
export default About