import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, name, when }) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id, name, when }),
    });
    alert("Agendado com sucesso!");
  } catch (error) {
    alert("Erro ao agendar.");
  }
}
