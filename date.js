// let dateString = '20230831';

const transformDate = (dateString)=> {
    // Convert the date string to a valid JavaScript date format (YYYY-MM-DD)
    let year  =  dateString.substring(0, 4);
    let month =  dateString.substring(6, 4);
    let day =  dateString.substring(8, 6);
    let validDate = `${year}-${month}-${day}`;

    // Create a Date object from the valid date format
    const date = new Date(validDate);
  
    // Extract the year, month, and day components from the date
    const yearComponent = date.getFullYear();
  
    const monthComponent = date.getMonth();
    const dayComponent = date.getDate();
    console.log(yearComponent)
    console.log(monthComponent)
    console.log(dayComponent)
  
    // Map the month number to the corresponding month name
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthName = months[monthComponent];
  
    // Construct the desired output format
    const output = `${dayComponent}${getDaySuffix(dayComponent)} of ${monthName} ${yearComponent}`;
  
    return output;
  }
  transformDate(dateString)
  // Helper function to get the correct suffix for the day component
  function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
  
    const lastDigit = day % 10;
    switch (lastDigit) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
  

  const transformedDate = transformDate(dateString);
  console.log(transformedDate); // Output: 1st of July 2023
  