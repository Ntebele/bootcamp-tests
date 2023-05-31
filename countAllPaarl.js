function countAllPaarl(registrationNumbers) {
    const regNumList = registrationNumbers.split(","); 
    const currentRegNum=[];
    const newArray=[];
    let  Number=0;
      
    for (let i = 0; i < regNumList.length; i++) { 
         currentRegNum.push(regNumList[i].trim()); 
       //console.log(currentRegNum)
     if (currentRegNum[i].startsWith("CJ")) {
          newArray.push(currentRegNum[i])
         Number=newArray.length
     }  
      }
      return Number
    }