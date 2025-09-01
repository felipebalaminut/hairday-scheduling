import { schedulesDays } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel.js";

const period = document.querySelectorAll(".period");

period.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      const item = event.target.closest("li");
      let { id } = item.dataset;

      if (id) {
        const isConfirm = confirm(
          "Tem certeza que deseja remover o agendamento?"
        );

        if (isConfirm) {
          await scheduleCancel({ id });
          schedulesDays();
        }
      }
    }
  });
});
