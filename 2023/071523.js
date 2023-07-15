// Converting 12-hour time to 24-hour time - 7kyu

function to24hourtime(hour, minute, period) {
  if (hour == 12) {
    return period=='pm' ? `${hour}${minute < 10 ? `0${minute}` : minute}` : `00${minute < 10 ? `0${minute}` : minute}`;
  }
  return period=='pm' ? `${12+hour}${minute < 10 ? `0${minute}` : minute}` : `${hour < 10 ? `0${hour}` : hour}${minute < 10 ? `0${minute}` : minute}`;
}
