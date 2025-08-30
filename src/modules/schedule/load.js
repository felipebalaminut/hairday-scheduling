import { hoursLoad } from "../form/hours-load.js";

const selectedDate = document.querySelector("#date");

export function schedulesDays() {
  // Seleciona a data atual do input.
  const date = selectedDate.value;
  
  hoursLoad({ date });
}
