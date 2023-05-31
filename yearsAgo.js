function yearsAgo(year) {
    const currentYear = new Date().getFullYear();
    
    const yearsAgo = currentYear - year;
   
    return yearsAgo;
  }