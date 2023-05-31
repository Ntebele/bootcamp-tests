function findItemsOver(itemList,number){
  const results=[];
 for(let i=0;i<itemList.length;i++){
   
   if(itemList[i]["qty"]>number){
      results.push(itemList[i]);
   }
 }
  return results;

}
