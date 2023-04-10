// DATE & TIME Script
function updateClock() {
  // create a new Date object
  const now = new Date();

  // get the current date components
  const year = now.getFullYear();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  const month = monthNames[now.getMonth()];
  const day = now.getDate();

  // get the current time components
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  // format the date and time components as strings
  const dateString = `${month} ${day}, ${year}`;
  const timeString = `${hour}:${minute}:${second}`;

  // update the HTML elements
  document.querySelector("#date").innerHTML = dateString;
  document.querySelector("#time").innerHTML = timeString;
}

updateClock();
setInterval(updateClock, 1000);

// THEME Script
  // Get the toggle switch element
  const toggleSwitch = document.querySelector("#dark-mode-toggle");

  // Add event listener to toggle switch
  toggleSwitch.addEventListener("change", function () {
    // Check if the switch is checked
    if (this.checked) {
      // Change the data-theme attribute to dark
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      // Change the data-theme attribute to light
      document.documentElement.setAttribute("data-theme", "light");
    }
  });   

