import { apiConfig } from "./api-config";
import dayjs from "dayjs";

export async function scheduleFetchByDay({ date }) {
  try {
    // Faz a requisição
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    // Converte para JSON
    const data = await response.json();

    // Filtra os agendamentos pelo filtro selecionado
    const dailySchedules = data.filter((schedule) => {
      return dayjs(date).isSame(schedule.when, "day");
    });

    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("Não foi possível carregar o agendamento.");
  }
}
