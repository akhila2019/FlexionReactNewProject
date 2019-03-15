 import React from 'react';
 import {tryConvert, mapUnit, difference} from './Module'
 
  
 export default class Calculator extends React.Component {
    constructor(props) {
      super();
      this.state ={
        input : "",
        inputUnit : "",
        studentResponse : "",
        targetUnit : "",
        correction : "",
        error : false,
        message : ""
      }
      this.onChange =this.onChange.bind(this);
      this.onSubmit =this.onSubmit.bind(this);
      this.onKeyPress = this.onKeyPress.bind(this);
    }
   
    //onChange of Input this event is called
    onChange(e){

        e.preventDefault();
           this.setState(
             {
               [e.target.name] : e.target.value
             }
           )
         }
         onKeyPress(e){
             console.log("Inside onKeyPress")
             if(e.keyCode===8 || e.keyCode===46){
            this.setState({correction : " ",
               message : ""    })
             }
         }
        
        //OnSubmit handles all the validation and throws Invalid, valid and incorrect messages
         onSubmit(e){
            e.preventDefault();

            
           
            const record = {
                input : this.state.input,                
                studentResponse :this.state.studentResponse,
                targetUnit : this.state.targetUnit
            }
            //console.log(record)          
            const inputSplitArray = record.input.trim().split(" ")     
                         
            if(inputSplitArray.length ===2 ){  //checking the length of the first input
                  let unit = mapUnit( inputSplitArray[1] )     //mapping to scale based on the user input   
                  //console.log("unit" + unit)
              
                  if (Number.isNaN( inputSplitArray[0])|| unit === "Invalid" ){
                   
                    this.setState({correction : "Invalid",
                    message : "Please enter Input Temperature in form of Value Unit, for example 84.2 Fahrenheit" })
                  }
                  else if (Number.isNaN(record.targetUnit)){
                    this.setState({correction : "Incorrect"})
                  }else {
                  record.inputTemp= inputSplitArray[0]     
                  
                  const convertedTemp_1  =  tryConvert(record.inputTemp, unit) //converting temperature to relavant unit
                 
                  const convertedTemp_2=   tryConvert(record.studentResponse, record.targetUnit)
                 // console.log("convertedTemp_1" + convertedTemp_1)
                 // console.log("convertedTemp_2" + convertedTemp_2)
                      if(convertedTemp_1 ==='Invalid'){
                        this.setState({correction : "Invalid"})
                      }else if(difference(convertedTemp_1,convertedTemp_2) <1){
                        this.setState({correction : "Correct"})
                      }else{
                        this.setState({correction : "InCorrect"})
                      }
                  }
            }else{
                  this.setState({correction : "Invalid",
                  message : "Please enter Input Temperature in form of Value Unit, for example 84.2 Fahrenheit" })
            }
         
          }
  
    render() {
     
      return (
        <div class="scienceProject">
        <div class="container">
            <div class="row">
                <div class="col-md-8 m-auto">
                   
                    <h1 class="display-6 text-center mx-auto"> Temperature Unit-conversion Worksheets Evaluator </h1>
                    <form onSubmit={this.onSubmit}>
                      <div class="form-group">
                          <label class="control-label form-control-lg" for="input">Input Temperature</label>
                          <input  class="form-control" type="text" id="input" name="input" placeholder="Input Temperature (VALUE UNIT for example 84.2 Fahrenheit)" value = {this.state.input} 
                          onChange={this.onChange} onKeyUp={this.onKeyPress} required/>
                      </div>
                      <div class="form-group">
                        <label class="control-label form-control-lg" for="input">Target Units</label>
                          <select class="form-control " placeholder="Target Units" name="targetUnit" id="Target Units"value = {this.state.targetUnit} onChange={this.onChange} onKeyUp={this.onKeyPress} required> 
                              <option value="">Select Unit</option>
                              <option value="K">Kelvin</option>
                              <option value="C">Celsius</option>
                              <option value="F">Fahrenheit</option>
                              <option value="R">Rankine</option>
                          </select>
                      </div>
                      <div class="form-group">
                          <label class="control-label form-control-lg" for="Student Input">Student Response</label>
                          <input type="text" class="form-control " placeholder="Student Response" name="studentResponse"id="studentResponse" value = {this.state.studentResponse} onChange={this.onChange} onKeyUp={this.onKeyPress} required/>
                      </div>                     
                      
                      <input type="submit" class="btn btn-primary btn-block mt-4" value="Validate" />
                  </form>
                  <div class="align-middle  mx-auto">
                     <p  class="font-weight-bold display-8 text-center">{this.state.message} </p>
                     </div>
                    <div class="align-middle  mx-auto">
                      <p  class="font-weight-bold display-4 text-center">{this.state.correction} </p>
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
      );
    }
  }
  
