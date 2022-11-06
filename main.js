function createGame(player1, hour, player2) {
    return `
        <li>
            <figure>
            <img src="./assets/icon=${player1}.svg" alt="${player1}" title="${player1}">
            <figcaption>${player1}</figcaption>
            </figure>
            <strong>${hour}</strong>
            <figure>
            <img src="./assets/icon=${player2}.svg" alt="${player2}" title="${player2}">
            <figcaption>${player2}</figcaption>
            </figure>
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

document.querySelector('#app').innerHTML = `
<header>
    <img src="./assets/header.svg" alt="NLW - Copa: Calendário">
        </header>
        <main id="cards">
            ${createCard("20/11", "domingo", createGame('Catar', '13:00', 'Equador')
        )}

            ${createCard("21/11", "segunda", createGame('Inglaterra', '10:00', 'Irã') + createGame('Senegal', '13:00', 'Países Baixos') + createGame('Estados Unidos', '16:00', 'País de Gales')
        )}

            ${createCard("22/11", "terça", createGame('Argentina', '07:00', 'Arábia Saudita') + createGame('Dinamarca', '10:00', 'Tunísia') + createGame('México', '13:00', 'Polônia') + createGame('França', '16:00', 'Austrália')
        )}

            ${createCard("23/11", "quarta", createGame('Marrocos', '07:00', 'Croácia') + createGame('Alemanha', '10:00', 'Japão') + createGame('Espanha', '13:00', 'Costa Rica') + createGame('Bélgica', '16:00', 'Canadá')
        )}

            ${createCard("24/11", "quinta", createGame('Suíça', '07:00', 'Camarões') + createGame('Uruguai', '10:00', 'Coreia do Sul') + createGame('Portugal', '13:00', 'Gana') + createGame('Brasil', '16:00', 'Sérvia')
            )}

            ${createCard("25/11", "sexta", createGame('País de Gales', '07:00', 'Irã') + createGame('Catar', '10:00', 'Senegal') + createGame('Países Baixos', '13:00', 'Equador') + createGame('Inglaterra', '16:00', 'Estados Unidos')
            )}   

            ${createCard("26/11", "sabado", createGame('Tunísia', '07:00', 'Austrália') + createGame('Polônia', '10:00', 'Arábia Saudita') + createGame('França', '13:00', 'Dinamarca') + createGame('Argentina', '16:00', 'México')
            )}    
   
            ${createCard("27/11", "domingo", createGame('Japão', '07:00', 'Costa Rica') + createGame('Bélgica', '10:00', 'Marrocos') + createGame('Croácia', '13:00', 'Canadá') + createGame('Espanha', '16:00', 'Alemanha')
            )}    

            ${createCard("28/11", "segunda", createGame('Camarões', '07:00', 'Sérvia') + createGame('Coreia do Sul', '10:00', 'Gana') + createGame('Brasil', '13:00', 'Suíça') + createGame('Portugal', '16:00', 'Uruguai')
            )}    

            ${createCard("29/11", "terça", createGame('Equador', '07:00', 'Senegal') + createGame('Países Baixos', '10:00', 'Catar') + createGame('Irã', '13:00', 'Estados Unidos') + createGame('País de Gales', '16:00', 'Inglaterra')
            )}    
 
            ${createCard("30/11", "quarta", createGame('Tunísia', '07:00', 'França') + createGame('Austrália', '10:00', 'Dinamarca') + createGame('Polônia', '13:00', 'Argentina') + createGame('Arábia Saudita', '16:00', 'México')
            )}    

            ${createCard("01/12", "quinta", createGame('Croácia', '07:00', 'Bélgica') + createGame('Canadá', '10:00', 'Marrocos') + createGame('Japão', '13:00', 'Espanha') + createGame('Costa Rica', '16:00', 'Alemanha')
            )}    
 
            ${createCard("02/12", "sexta", createGame('Coreia do Sul', '07:00', 'Portugal') + createGame('Gana', '10:00', 'Uruguai') + createGame('Sérvia', '13:00', 'Suíça') + createGame('Camarões', '16:00', 'Brasil')
            )}    
          
            
        </main>
    `