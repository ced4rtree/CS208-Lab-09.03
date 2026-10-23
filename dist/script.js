let formElement = document.getElementById("primary-form");

const INFO_ID = "info";

function myLineUp(event) {
    event.preventDefault();

    // from https://stackoverflow.com/a/37646508
    let form = new FormData(formElement);
    let status = form.get("status");
    let date = form.get("gameDate");
    let playerArray = form.getAll("players");

    // `/,/g` is regex, it says to search for occurrences of ',' apply the
    // replacement (', ') globally (for all instances of ',')
    let players = `${playerArray}`.replace(/,/g, ", ");

    let infoString = `<b>Status:</b> ${status}. <b>Date:</b> ${date}. <b>Players:</b> ${players}`;

    // this element is new if we haven't submitted before,
    // have to handle both element being present and not
    let infoElement = document.getElementById("info");
    if (infoElement === null) {
        infoElement = document.createElement("p");
        infoElement.setAttribute("id", INFO_ID);
        document.documentElement.appendChild(infoElement);
    }
    infoElement.innerHTML = infoString;
}

formElement.addEventListener("submit", myLineUp);
