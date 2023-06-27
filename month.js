function findDaysInMonth(month, year) {
    if (month < 1 || month > 12) {
      console.log("Invalid month");
    } else if (month == 2) {
      if ((year % 4 == 0 && (year % 100 != 0)) || (year % 400 == 0)) {
        console.log("29 days");
      } else {
        console.log("28 days");
      }
    } else if ([4, 6, 9, 11].includes(month)) {
      console.log("30 days");
    } else {
      console.log("31 days");
    }
  }
  findDaysInMonth(1,2021)
  findDaysInMonth(2,2016)
  findDaysInMonth(4,2024)
  findDaysInMonth(2,100)
  


  