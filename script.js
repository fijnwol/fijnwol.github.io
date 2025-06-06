function sendEmail() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let zip = document.getElementById("zip").value;
  let address = document.getElementById("address").value;
  
  let mailtoLink = "mailto:fijnwol@gmail.com";
  mailtoLink += "?subject=WHOOLNAME + DATEHERE";
  mailtoLink += "&body=Name:%20" + address + "%0D%0AEmail:%20" + "%0D%0AMessage:%20";
  console.log(mailtoLink)
  window.location.href = mailtoLink;

  function getTimestamp() {
    const date = new Date();
    const formatter = new Intl.DateTimeFormat('default', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false, // Use 24-hour format
    });
    const parts = formatter.formatToParts(date);
    const day = parts.find(part => part.type === 'day').value;
    const suffix = getOrdinalSuffix(day);
    const formattedDate = `Order ${parts.find(part => part.type === 'year').value} ${parts.find(part => part.type === 'month').value} ${day}${suffix} ${parts.find(part => part.type === 'hour').value}:${parts.find(part => part.type === 'minute').value}:${parts.find(part => part.type === 'second').value}`;
    return formattedDate;
}

function getOrdinalSuffix(day) {
    if (day.endsWith('1') && !day.endsWith('11')) return 'st';
    if (day.endsWith('2') && !day.endsWith('12')) return 'nd';
    if (day.endsWith('3') && !day.endsWith('13')) return 'rd';
    return 'th';
}

console.log(getTimestamp());

}