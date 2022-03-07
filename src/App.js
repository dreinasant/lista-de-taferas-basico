import React, { Component } from "react";
import './App.css'

class todo extends Component {

  state = {
    tarefa:'',
    lista: []
  }

  handleChange = (event) => {
    this.setState({
      tarefa: event.target.value
    })
  }

  add = (event) =>{
    let {lista, tarefa} = this.state  //desconstrução
    if(tarefa != ""){
      this.setState({
        tarefa: '',
        lista: lista.concat({
          tarefa: tarefa,
          id: Date.now()
        })
      })
    }
    event.preventDefault()
  }

  remover = (id) => {
    let {lista} = this.state
    this.setState({
      lista: lista.filter((item)=> {
        return item.id != id
      })
    })
  }

  render(){
    return(
      <div className="box">
        <form onSubmit={this.add}>
        <h1>Lista de tarefa basico</h1>
        <div className="intro-box">
        <input onChange={this.handleChange} type="text" value={this.state.tarefa}/>
        <button onClick={this.add}>Add</button>
        <div className="contain">
          {this.state.lista.map((item) =>(
            <ul>
              <li>{item.tarefa} <button onClick={()=>{this.remover(item.id)}}>X</button></li>
            </ul>
          ))}
        </div>
      </div>
      </form>
      </div>
    )
  }
}

export default todo;