
  export function tryConvert(value, convert) {
    const input = value;
    console.log("inside tryconvert"+  convert)
    console.log("inside tryconvert"+  input)
    if (Number.isNaN(input)) {
      return 'Invalid';
    }
    if (convert ==='K'){
        const output=  convertKtoC(input)
        return ceilNumber(output)
    }else if(convert === 'F'){
        const output= convertFtoC(input)
        return ceilNumber(output)
    }else if (convert === 'R'){
       const output= convertRtoC(input)
       return ceilNumber(output)
    }else 
      return value
    /*const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();*/
  }
  /*function  roundNumber(val){
    const rounded = parseFloat(Math.round(val)).toFixed(2);
    return rounded.toString();
  }*/

  function  ceilNumber(val){
    const rounded = parseFloat(Math.ceil(val));
    return rounded.toString();
  }


  function convertKtoC(temp){
   temp = temp - 273.15
   console.log("convertKtoC" + temp)
   return temp
  }

  export function difference(a, b) {
    return Math.abs(a - b);
  }

  function convertFtoC(temp){

    temp = (temp - 32)  / 9.0 * 5.0
    console.log("convertFtoC" + temp)
    return temp
  }

  function convertRtoC(temp){

    temp = (temp - 491.67) * 5.0/9.0
    console.log("convertRtoC" + temp)
    return temp
  }

  export function mapUnit(unit){
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
    

  }



  


  