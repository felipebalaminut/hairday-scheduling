import { apiConfig } from "./api-config";

export async function scheduleCancel({ id }) {
  console.log(id);
  try {
    console.log(id);
    await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    alert("Não foi possível cancelar o agendamento.");
  }
}
