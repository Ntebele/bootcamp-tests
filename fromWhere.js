function fromWhere(carRegistrationNumber){

  if(carRegistrationNumber.startsWith("CY")){return "Bellville"}
  else if(carRegistrationNumber.startsWith("CJ")){return "Paarl"}
  else if(carRegistrationNumber.startsWith("CA")){return "Cape Town"}
  
  else {return 'Some other place!'
  }
  }