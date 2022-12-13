import React from "react";


export class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name:"",
        email:"",
        password:"",
    };
    this.Submit = this.Submit.bind(this);
  }
  Submit(e){
    e.preventDefault();
    const {name, email, password } = this.state;
    console.log(name, email, password);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        
        <div className="header">Signup</div>
        <div className="content">
        <form onSubmit={this.Submit}>
       
          <div className="form">
            
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" name="name" placeholder="John Smith" onChange={e=>this.state({name: e.target.value})}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" onChange={e=>this.state({email: e.target.value})} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" onChange={e=>this.state({password: e.target.value})} />
            </div>
          </div>
          </form>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Signup
          </button>
          
        </div>
      </div>
    );
  }
}

// data submits to controller