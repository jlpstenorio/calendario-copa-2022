function createGame(player1, hour, player2, location) {
  return `
  
                        <li>
                            <div id="player1icon"><img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}"></div>
                            <p id="hoverplayer1name">${player1}</p>
                            <strong>${hour}</strong>
                            <div id="player2icon"><img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}"></div>
                            <p id="hoverplayer2name">${player2}</p>
                            <p id="local"><img src="./assets/icon-local.svg" alt="Icone Localização"><span>${location}</span></p>
                        </li>
  
  `
}

let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
                <div class="card" style="animation-delay: ${delay}s">
                    <h2>${date} <span>${day}</span></h2>
                    <ul>
                      ${games}
                    </ul>
                </div>
  `
}

document.querySelector("#cardsgrupos").innerHTML = 
            
            
              createCard(
                "21/11",
                "Segunda",
                createGame("senegal", "13:00", "netherlands", "Home")
              ) +
              createCard(
                "24/11",
                "Quinta",
                createGame("portugal", "13:00", "ghana", "Home") +
                  createGame("brazil", "16:00", "serbia", "Divino")
              ) +
              createCard(
                "25/11",
                "Sexta",
                createGame("england", "16:00", "united states", "Home")
              ) +
              createCard(
                "26/11",
                "Sábado",
                createGame("france", "13:00", "denmark", "Home") +
                  createGame("argentina", "16:00", "mexico", "Home")
              ) +
              createCard(
                "27/11",
                "Domingo",
                createGame("spain", "16:00", "germany", "Home")
              ) +
              createCard(
                "28/11",
                "Segunda",
                createGame("brazil", "13:00", "switzerland", "Zé") +
                  createGame("portugal", "16:00", "uruguay", "Home")
              ) +
              createCard(
                "29/11",
                "Terça",
                createGame("wales", "16:00", "england", "Home")
              ) +
              createCard(
                "30/11",
                "Quarta",
                createGame("poland", "16:00", "argentina", "Home")
              ) +
              createCard(
                "01/12",
                "Quinta",
                createGame("croatia", "16:00", "belgium", "Home")
              ) +
              createCard(
                "02/12",
                "Sexta",
                createGame("south korea", "12:00", "portugal", "Home") +
                  createGame("cameroon", "16:00", "brazil", "Jay")
              )

              
document.querySelector("#cardsoitavas").innerHTML =            
            
              createCard(
                "03/12",
                "Sábado",
                createGame("TBD", "12:00", "TBD", "TBD") +
                  createGame("TBD", "16:00", "TBD", "TBD")
              ) +
              createCard(
                "04/12",
                "Domingo",
                createGame("TBD", "12:00", "TBD", "TBD") +
                  createGame("TBD", "16:00", "TBD", "TBD")
              ) +
              createCard(
                "05/12",
                "Segunda",
                createGame("TBD", "12:00", "TBD", "TBD") +
                  createGame("TBD", "16:00", "TBD", "TBD")
              ) +
              createCard(
                "06/12",
                "Terça",
                createGame("TBD", "12:00", "TBD", "TBD") +
                  createGame("TBD", "16:00", "TBD", "TBD")
              )


document.querySelector("#cardsquartas").innerHTML = 
            
              createCard(
                "09/12",
                "Sexta",
                createGame("TBD", "12:00", "TBD", "TBD") +
                  createGame("TBD", "16:00", "TBD", "TBD")
              ) +
              createCard(
                "10/12",
                "Sábado",
                createGame("TBD", "12:00", "TBD", "TBD") +
                  createGame("TBD", "16:00", "TBD", "TBD")
              )


document.querySelector("#cardssemi").innerHTML =
            
              createCard(
                "13/12",
                "Terça",
                createGame("TBD", "16:00", "TBD", "TBD")
              ) +
              createCard(
                "14/12",
                "Quarta",
                createGame("TBD", "16:00", "TBD", "TBD")
              )


document.querySelector("#cardsfinal").innerHTML =
            
              createCard(
                "18/12",
                "Domingo",
                createGame("TBD", "12:00", "TBD", "TBD")
              )            

