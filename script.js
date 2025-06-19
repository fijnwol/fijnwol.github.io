function sendEmail() {
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

  let timestamp = getTimestamp()
  let amount = document.getElementById("amount").value;
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let company = document.getElementById("company").value;
  let country = document.getElementById("country").value;
  let streethouse = document.getElementById("streethouse").value;
  let zip = document.getElementById("zip").value;
  let city = document.getElementById("city").value;
  let phone = document.getElementById("phone").value;
  let note = document.getElementById("note").value
  
  let mailtoLink = "mailto:fijnwol@gmail.com";
  mailtoLink += "?subject=" + lname + " " + fname + ": " + timestamp;
  mailtoLink += "&body=Product: " + location.href + "%0D%0A" + "Amount: " + amount + "%0D%0A" + "First name: " + fname + "%0D%0A" + "Last name: " + lname + "%0D%0A" + "Company: " + company + "%0D%0A" + "Country: " + country + "%0D%0A" + "Street name and house number: " + streethouse + "%0D%0A" + "Postcode: " + zip + "%0D%0A" + "Town/City: " + city + "%0D%0A" + "Phone: " + phone + "%0D%0A" + "Additional Information: " + note;
  window.location.href = mailtoLink;
}