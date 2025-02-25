import './App.css'
import React from 'react'
import {CommonContext} from './components/CommonContext'
import Mian from './components/Mian'; 
import UpdateButton from './components/UpdateButton'; 
import Header from "./components/header"
import Footer from './components/footer';
class App extends React.Component{
  constructor(){
    super();
    this.updateColor=(color)=>{
      this.setState({
        color:color
      })
    }
    this.state={
      color: "green",
     updateColor:this.updateColor
    }
   
  }
  render(){
    
    return(
      <div>
       <CommonContext.Provider value={this.state}>
        <Header />
         <CommonContext.Consumer >
                {
                    ({color})=>(
                        <h1 style={{backgroundColor:color}}> Complet And Esy Example Of Context API</h1>
                    )
                }
              
               </CommonContext.Consumer>
       
       <Mian />
       <UpdateButton/>
       <Footer/>
       </CommonContext.Provider>
      </div>
    )
  
  }
}
export default App;
