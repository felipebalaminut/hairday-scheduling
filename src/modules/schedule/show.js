import dayjs from "dayjs";

const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {
  periodMorning.innerHTML = "";
  periodAfternoon.innerHTML = "";
  periodNight.innerHTML = "";

  // Renderizar os agendamentos por período

  dailySchedules.forEach((schedule) => {
    const hour = dayjs(schedule.when).hour();

    let targetPeriod;
    if (hour <= 12) {
      targetPeriod = periodMorning;
    } else if (hour > 12 && hour <= 18) {
      targetPeriod = periodAfternoon;
    } else if (hour > 18 && hour <= 21) {
      targetPeriod = periodNight;
    }

    targetPeriod.innerHTML += `
        <li data-id="${schedule.id}">
          <strong>${dayjs(schedule.when).format("HH:mm")}</strong>
          <span>${schedule.name}</span>
          <img
            src="./src/assets/cancel.svg"
            alt="Cancelar"
            class="cancel-icon"
          />
        </li>
    `;
  });
}
