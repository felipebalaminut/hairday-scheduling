import { schedulesDays } from "../schedule/load.js";

const selectedDate = document.querySelector("#date");

selectedDate.onchange = () => {
  schedulesDays();
};
