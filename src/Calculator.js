import React from 'react';
 import {tryConvert, mapUnit, difference} from './Module'
 
  
 export default class Calculator extends React.Component {
    constructor(props) {
      super();
      this.state ={
        input : "",
        inputUnit : "",
        studentInput : "",
        studentInputUnit : "",
        correction : ""
      }
      this.onChange =this.onChange.bind(this);
      this.onSubmit =this.onSubmit.bind(this);
      this.onKeyPress = this.onKeyPress.bind(this);
    }
    onKey

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
            this.setState({correction : " "})

         }
  
         onSubmit(e){
            e.preventDefault();
            const studentRecord = {
                input : this.state.input,
                
                studentInput :this.state.studentInput,
                studentInputUnit : this.state.studentInputUnit
            }
            console.log(studentRecord)          
            const inputSplitArray = studentRecord.input.split(" ")
            console.log( inputSplitArray[0]);
            console.log( inputSplitArray[1]);
            console.log("length of the array "+ inputSplitArray.length)
            let Unit = mapUnit( inputSplitArray[1] )
            console.log("Unit"+ Unit)
            console.log(Number.isNaN( inputSplitArray[0]))
            if(inputSplitArray.length  !==2 ||Number.isNaN( inputSplitArray[0])){
              this.setState({correction : "Invalid"})
            }else if (Number.isNaN(studentRecord.studentInputUnit)){
              this.setState({correction : "Incorrect"})
            }else if(Unit ==='Invalid'){
              this.setState({correction : "Invalid"})
            }else{
            studentRecord.inputTemp= inputSplitArray[0]
                  
            const result1  =  tryConvert(studentRecord.inputTemp, Unit)
            console.log("result1 "+ result1 )
            console.log("ceil result1 "+ Math.ceil(result1) )
            const result2=   tryConvert(studentRecord.studentInput, studentRecord.studentInputUnit)
            console.log("result2 "+ result2 )
            console.log("ceil result2 "+ Math.ceil(result2) )
            if(difference(result1,result2) <=2){
              this.setState({correction : "Correct"})
            }else{
              this.setState({correction : "InCorrect"})
            }
          }
          }
  
    render() {
     
  
      return (
        <div class="scienceProject">
        <div class="container">
            <div class="row">
                <div class="col-md-8 m-auto">
                   
                    <h4 class="display-6 text-center mx-auto"> Temperature Unit-conversion Worksheets Evaluator </h4>
                    <form onSubmit={this.onSubmit}>
                      <div class="form-group">
                          <input type="text" class="form-control form-control-lg" name="input" placeholder="Input For temperature" value = {this.state.input} 
                          onChange={this.onChange} onKeyPress={this.onKeyPress}/>
                      </div>
                      {/*<div class="form-group">
                          <select class="form-control form-control-lg" placeholder="Input temperature Unit" name="inputUnit" value = {this.state.inputUnit} onChange={this.onChange} onKeyPress={this.onKeyPress}>
                              <option value="">Select Unit</option>
                              <option value="K">Kelvin</option>
                              <option value="C">Celsius</option>
                              <option value="F">Fahrenheit</option>
                              <option value="R">Rankine</option>
                          </select>
                       </div>*/}
                      <div class="form-group">
                          <input type="text" class="form-control form-control-lg" placeholder="Student Input" name="studentInput" value = {this.state.studentInput} onChange={this.onChange} onKeyPress={this.onKeyPress}/>
                      </div>
                      <div class="form-group">
                          <select class="form-control form-control-lg" placeholder="Student temperature Unit" name="studentInputUnit" value = {this.state.studentInputUnit} onChange={this.onChange} onKeyPress={this.onKeyPress}> 
                              <option value="">Select Unit</option>
                              <option value="K">Kelvin</option>
                              <option value="C">Celsius</option>
                              <option value="F">Fahrenheit</option>
                              <option value="R">Rankine</option>
                          </select>
                      </div>
                      
                      <input type="submit" class="btn btn-primary btn-block mt-4"  />
                  </form>
                  
                    <div class="align-middle">
                      <p  class="font-weight-bold display-8 text-center">{this.state.correction} </p>
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
      );
    }
  }
  
