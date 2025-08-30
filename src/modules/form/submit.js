import dayjs from "dayjs";

const form = document.querySelector("form");
const clientName = document.querySelector("#client");
const selectedDate = document.querySelector("#date");

const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = (event) => {
  event.preventDefault();

  try {
    // Recuperar nome do cliente
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente.");
    }

    // Recupera o horário selecionado
    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Selecione a hora");
    }

    const [hour] = hourSelected.innerText.split(":");

    // Inserir a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour");
    console.log(when);

    // Gerar ID
    const id = newDate().getTime();

    console.log({
      id,
      name,
      when,
    });
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
  }
};
