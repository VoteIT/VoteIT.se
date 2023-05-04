---
outline: deep
---

# Omröstningsmetoder

När ni är redo att gå till omröstning finns det flera omröstningsmetoder att välja på. Men metoden är inte neutral - vilken metod ni väljer kan påverka resultatet. Det kan handla om skillnaden mellan ett representativt eller majoritetsinriktat resultat, eller om att en röstmetod är känslig för manipulation. Några röstmetoder kan ge ett direkt missvisande resultat, även utan att någon försökt manipulera resultatet.

## Metoder med en vinnare

|                                    | [Majoritetsvinst](./kriterier.md#majoritetsvinst) | [Gemensam majoritet](kriterier.md#gemensam-majoritet) | [Klonsäker](kriterier.md#klonsäker) | [Condorcet](kriterier.md#condorcet) | [Later no harm](kriterier.md#later-no-harm) |
|------------------------------------|-----------------|--------------------|-----------|-----------|---------------|
| Majoritetsomröstning               | Ja              | *                  | *         | *         | *             |
| Dutt (Relativ majoritet)           | Nej             | Nej                | Nej       | Nej       | *             |
| Eliminationsvotering / kontrapropp | Ja              | Ja                 | Nej       | Nej       | *             |
| Schulze                            | Ja**            | Ja                 | Ja        | Ja        | Nej           |
| IRV                                | Ja              | Ja                 | Ja        | Nej       | Ja            |

\* Ej applicerbar  
\** Om avslagsförslag tas med

### Schulze-metoden (rekommenderas)

Schulze är en rangordnad röstmetod där du kan ställa flera förslag mot varandra i en omröstning. Vinnaren är det förslag som parvis vinner mot alla andra förslag. Det är alltså som att de röstande röstat parvis om varje kombination av förslag som ingår i omröstningen, men allt sker genom en enkel rankning. Genom att lägga till ett avslag i omröstningen slipper ni ytterligare en omröstning mot avslag.

I VoteIT rankar de röstande förslagen genom att sätta fler stjärnor på de förslag de föredrar mest. Det är möjligt att ge flera förslag samma antal stjärnor, vilket tolkas som att avstå i omröstning mellan de två förslagen. En Schulze-omröstning kan teoretiskt sett bli oavgjord, men det är ovanligt i riktiga omröstningar.

Schulze-metoden kan inte manipuleras genom taktikröstande eller [kloning av förslag](kriterier.md#klonsäker). Den ersätter med fördel [kontrapropositionsvotering](#eliminations---kontrapropositionsvotering) och [relativ majoritet](#dutt-relativ-majoritet), som båda är lätta att manipulera.

- [Mer om Schulze-metoden](schulze.md)

### Majoritetsomröstning 1: Motförslag

Om vi vill ställa två förslag mot varandra i VoteIT använder ni metoden *Motförslag*. Vinnaren är det förslag som får flest röster. I de flesta fall vill ni även ställa vinnaren mot avslag. Det kan ni göra i en separat omröstning, men ännu enklare är att istället göra det som en [Schulze-omröstning](#schulze-metoden-rekommenderas), där ni lägger till avslag.

### Majoritetsomröstning 2: Bifall / Avslag / Avstå

Med den här metoden kan ni ställa ett eller flera förslag mot avslag. Det betyder att ni kan avverka många förslag i samma omröstning. De som röstar och också välja att avstå från att ta ställning till enskilda förslag.

### Dutt (Relativ majoritet)

Relativ majoritet (på engelska känt som First Past The Post) är en röstmetod där deltagarna röstar för ett av flera alternativ, och där det förslag som får flest röster vinner. Metoden är vanlig i parlamentariska system med majoritetsvalkretsar, och graviterar i parlamentariska val till ett statiskt tvåpartisystem.

Det här är metoden som visar att det som ser lätt ut på ytan snabbt kan bli väldigt komplicerat. Som du ser i tabellen med kriterier klarar den inte något kriterium, och det betyder trubbel. Metoden är väldigt lätt att manipulera resultatet i – till och med oavsiktligt.

Metoden bör inte användas för viktiga omröstningar. Använd hellre en rangordnad omröstning som [Schulze](#schulze-metoden-rekommenderas) eller [IRV](#instant-runoff-voting-irv). Om ni måste kunna räkna röster för hand är det bättre att göra en eliminationsvotering.

Om metoden används för att utse med flera vinnare kallas den för [Acceptröstning](#dutt-acceptröstning).

### Eliminations- / kontrapropositionsvotering

En elimintions- eller kontrapropositionsvotering är ett sätt att ställa flera förslag mot varandra ett och ett, tills det finns en slutlig kontraproposition. Det framvaskade förslaget ställs sedan mot huvudförslaget – vanligen styrelsens eller en motionärs förslag.

Det finns tillfällen då de förslag som ligger har ett så komplicerat motsatsförhållande att ”kontrapropp” egentligen är det enda sättet att få fram ett beslut. Vissa förslag står kanske mot varandra helt, medan andra är beroende på om ett ändringsyrkande på huvudförslaget går igenom, vilket gör att möjligheten att avgöra i en enda omröstning är utesluten.

I de flesta omröstningar där kontrapropositionsvotering används idag skulle det ändå vara mer demokratiskt att rösta med [Schulze-metoden](#schulze-metoden-rekommenderas). Det behövs inte ens aktiv manipulation för att det ska bli fel beslut med kontrapropp – det finns inget sätt att lägga upp omröstningen för att garantera att det förslag som har mest stöd vinner.

### IRV

Instant-Runoff Voting (IRV) är i princip [STV](#skotsk-stv) för val med en vinnare, och betydligt enklare att räkna ut. För att ett förslag ska vinna krävs att det kommer upp i mer än hälften av rösterna. Metoden är betydligt säkrare mot manipulation än relativ majoritet, så länge du inte upprepar den med samma röster för att få flera vinnare.

Om du saknar tillgång till digitala röstverktyg och [Schulze-metoden](#schulze-metoden-rekommenderas) är IRV en utmärkt röstmetod. Om Schulze är ett alternativ bör du använda den.

Även om den är svår att manipulera medvetet finns det en risk att en [Condorcet-vinnare](kriterier.md#condorcet), som skulle vinna i parvis jämförelse med alla andra förslag, utesluts tidigt.

## Metoder med flera vinnare

|                       | [Majoritetsvinst](kriterier.md#majoritetsvinst) | [Gemensam majoritet](kriterier.md#gemensam-majoritet) | [Klonsäker](kriterier.md#klonsäker) | [Condorcet](kriterier.md#condorcet) | [Proportionerligt resultat](kriterier.md#proportionerligt-resultat) |
|-----------------------|-----------------|--------------------|-----------|-----------|---------------------------|
| Dutt (Acceptröstning) | Möjligt         | *                  | Nej       | *         | Nej                       |
| STV                   | Nej             | *                  | Ja        | *         | Ja                        |
| Upprepad Schulze      | Nej             | Ja**               | Ja        | Ja**      | Nej                       |

\* Ej applicerbar  
\** I varje omgång  

### Skotsk STV

Skotsk STV är den röstmetod i VoteIT som rekommenderas för att utse flera vinnare (exempelvis styrelseval) med ett [proportionerligt resultat](kriterier.md#proportionerligt-resultat).

*STV*, eller *enkel överförbar röst* är en metod som lades fram som idé redan 1819. Metoden har använts i allmänna val på Malta och Irland sedan 1921, och i flera andra länder efter det. STV finns i flera variationer, men grunden är densamma. En röst ska rangordna kandidaterna med nummer (1,2,3,...), och antalet vinnare bestäms på förhand.

Resultatet räknas i korthet ut genom att räkna ut en kvot, som är det antal röster ett förslag behöver uppnå för att ha vunnit, och därefter genomförs ett antal valomgångar där antingen förslag som nått kvoten blir valda eller det förslag med minst antal röster utesluts. Hela de uteslutna kandidaternas röster, eller en fraktion som överstiger kvoten av rösternas värde för valda kandidater, överförs på dessa valsedlars nästa kandidat. Är det slut på kandidater på en valsedel anses den förbrukad. När antalet platser att fylla är lika många som antalet kvarstående kandidater anses resterande valda, oavsett om de uppnår kvoten eller ej.

STV har ett avancerat system för att lösa oavgjorda situationer, men trots det kan en situation uppstå där lottning behöver användas för att utesluta ett förslag, eller bestämma ordningen på vinnare. Det är inte alls säkert att lottad uteslutning av förslag påverkar slutresultatet. Det går att använda STV utan lottning, men kan då ge ett ofullständigt resultat.

### Upprepad Schulze

Upprepad Schulze är den röstmetod i VoteIT som rekommenderas för att utse flera vinnare (exempelvis styrelseval) med ett resultat som prioriterar majoristetsstöd.

Genom att låta VoteIT upprepa Schulze med den tidigare vinnaren utesluten flera vinnare utses eller rangordna förslagen i omröstningen. Resultatet prioriterar majoritetsstöd i varje individuellt val, i motsats till ett proportionellt resultat.

### Dutt (Acceptröstning)

Acceptröstning (Dutt i VoteIT), betyder att deltagarna kryssar för flera förslag på en lista. Ofta bestäms i förväg ett minsta och högsta antal kryss som ska sättas för att en valsedel ska vara giltig. Vinnare är vanligen ett förutbestämt antal förslag som fått flest kryss. Varianter kan vara att förslaget även måste ha över 50 % stöd, eller att alla förslag över 50 % anses ha vunnit.

Metoden är detsamma som relativ majoritet, och har många liknande problem, men flera vinnare utses. Den är känslig för manipulation, även oavsiktlig sådan.

Acceptröstning bör undvikas för omröstningar av betydelse, men kan användas till exempel för tidsbudgetar. [Skotsk STV](#skotsk-stv) är vanligtvis att föredra. Om ni vill prioritera majoritetsstöd framför [proportionerligt resultat](kriterier.md#proportionerligt-resultat) rekommenteras [Upprepad Schulze](#upprepad-schulze).

Omröstningar i VoteIT med metoden Dutt sätter inga förslag som bifallna eller avslagna. Det är upp till den som håller i mötet att tolka resultatet.
