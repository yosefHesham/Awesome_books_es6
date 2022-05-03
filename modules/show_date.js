import { DateTime } from "./luxon.js";
const dateElement = document.querySelector(".date");

const showDate = () => {
  dateElement.innerHTML = `${DateTime.now().toLocaleString(
    DateTime.DATETIME_MED
  )}`;
};

window.onload = showDate();
