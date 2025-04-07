function formatDate(inputDate) {
  // Create a Date object from the input date string
  const date = new Date(inputDate);

  // Define months array for month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the month, day, and year from the Date object
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  // Add ordinal suffix to the day
  let dayWithSuffix;
  switch (day % 10) {
    case 1:
      dayWithSuffix = day + "st";
      break;
    case 2:
      dayWithSuffix = day + "nd";
      break;
    case 3:
      dayWithSuffix = day + "rd";
      break;
    default:
      dayWithSuffix = day + "th";
  }

  // Format the date string with the month, day, and year
  const formattedDate = `${month} ${dayWithSuffix}, ${year}`;

  return formattedDate;
}

function formatTime(inputDate) {
  // Create a Date object from the input date string
  const date = new Date(inputDate);

  // Get the hours and minutes from the Date object
  let hours = date.getHours();
  const minutes = date.getMinutes();

  // Determine whether it's AM or PM
  const meridiem = hours >= 12 ? "PM" : "AM";

  // Convert hours from 24-hour format to 12-hour format
  hours = hours % 12 || 12;

  // Add leading zero to minutes if necessary
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  // Format the time string with hours, minutes, and meridiem
  const formattedTime = `${hours}:${formattedMinutes} ${meridiem}`;

  return formattedTime;
}

export { formatDate, formatTime };