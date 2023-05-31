function countAllFromTown(registrationNumbers,Reg) {
    const regNumList = registrationNumbers.split(","); 
    const currentRegNum=[];  //array that will be used for new data
    const newArray=[];//new array that will be used for the last data filtered
    let  Number=0;
      
    for (let i = 0; i < regNumList.length; i++) { 
         
      currentRegNum.push(regNumList[i].trim()); //pushing new iterated data into the empty array 
      
    
     if (currentRegNum[i].startsWith(Reg)) {
          newArray.push(currentRegNum[i])
         Number=newArray.length
       
       console.log(Number)
     }  
      }
      return Number
    }