function mostProfitableDepartment(salesData) {
    let departmentSales = {};
    
    for(let i = 0; i<salesData.length; i++) {
    let department=salesData[i].department;
    
     if (department in departmentSales){
         departmentSales[department]+=salesData[i].sales;
    } else{ departmentSales[department] = salesData[i].sales;
    }   
    }   
    let mostProfitable='';
    let maxSales=0;
    
    for (let department in departmentSales){
        if (departmentSales[department] > maxSales){
            maxSales = departmentSales[department];
        mostProfitable = department;
            
     } 
     }
     //console.log(mostProfitable)
      return mostProfitable;
    }
    
   