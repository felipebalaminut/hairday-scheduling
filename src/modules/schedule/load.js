import { hoursLoad } from "../form/hours-load.js";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "../schedule/show.js";

const selectedDate = document.querySelector("#date");

export async function schedulesDays() {
  // Seleciona a data atual do input.
  const date = selectedDate.value;

  // Buscar na API agendamentos
  const dailySchedules = await scheduleFetchByDay({ date });

  schedulesShow({ dailySchedules });

  hoursLoad({ date, dailySchedules });
}
