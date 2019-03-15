
  //converts temperature based on the unit
  export function tryConvert(value, temperatureUnit) {
    const input = value;
   // console.log("inside tryconvert"+  temperatureUnit)
    //console.log("inside tryconvert"+  input)
    if (Number.isNaN(input)) {
      return 'Invalid';
    }
    if (temperatureUnit ==='K'){
        const output=  convertKtoC(input)
        return roundNumber(output)
    }else if(temperatureUnit === 'F'){
        const output= convertFtoC(input)
        return roundNumber(output)
    }else if (temperatureUnit === 'R'){
       const output= convertRtoC(input)
       return roundNumber(output)
    }else 
      return value
  
  }
 
  //rounds number to one decimal
  function  roundNumber(val){
    const rounded = parseFloat(Math.round(val,1));
    return rounded.toString();
  }


  function convertKtoC(temp){
   temp = temp - 273.15
  // console.log("convertKtoC" + temp)
   return temp
  }

  export function difference(a, b) {
    return Math.abs(a - b);
  }

  function convertFtoC(temp){

    temp = (temp - 32)  / 9.0 * 5.0
   // console.log("convertFtoC" + temp)
    return temp
  }

  function convertRtoC(temp){

    temp = (temp - 491.67) * 5.0/9.0
   // console.log("convertRtoC" + temp)
    return temp
  }

  export function mapUnit(unit){
  if(unit !== undefined){
    if(unit.trim().toLowerCase() === 'celsius'){
        return 'C'
    }else if(unit.trim().toLowerCase() === 'kelvin'){
        return 'K'
    }else if (unit.trim().toLowerCase() === 'fahrenheit'){
        return 'F'
    }else if (unit.trim().toLowerCase() === 'rankine'){
        return 'R'
    }else 
        return 'Invalid'
   }else 
        return 'Invalid'

  }



  


  