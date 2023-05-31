function findItemsOver20(itemList){
  const results=[];
  for(let i=0;i<itemList.length;i++){
    if(itemList[i]["qty"]>20){
         results.push(itemList[i]);
    }
  }
   return results;
 
 }
 

 