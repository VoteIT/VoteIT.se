# Reaktionsknappar som flaggor

_Pågående utveckling, färdigt oktober 2023_

__En utveckling av reaktionsknapparna i VoteIT. Det blir möjligt att skapa reaktionsknappar i flaggläge, vilket innebär att mötets moderatorer kan slå på eller av reaktionen, exempelvis för att markera att styrelsen ställer sig bakom ett visst förslag. Dessutom uppdateras röstnings- och plenumvyn. Projektet genomförs i samarbete med fackförbundet Vision.__

## Bakgrund

Det går sedan tidigare att skapa reaktionsknappar i VoteIT som kan visas på förslag och diskussionsinlägg. Reaktionsknapparna kan användas till olika saker, från en enkel gilla-knapp till en stöd-knapp med ett tröskelvärde för hur många ombud som ska stödja ett förslag för att det ska komma upp till omröstning.

Reaktionsknapparna är tyvärr fram till nu svåra att använda för att flagga innehåll med någon särskild egenskap, exempelvis förslag som en valberedning eller styrelse ställt sig bakom. Om ett möte har flera moderatorer (vilket de oftast har), kan en moderator inte ta bort att en annan moderator aktiverat en reaktion. För det behövs en ny typ av reaktionsknapp - en flagga.

För att funktionen ska bli mer universellt användbar lägger vi också till möjligheten att visa flaggreaktioner i omröstningar och plenumvy.

## Vad är nytt?

- Det blir möjligt att lägga till en reaktionsknapp i flagg-läge, som endast kan styras av mötets moderatorer.
- Flagg-knappar kan bara vara på eller av.
- För vanliga deltagare syns de bara när de är påslagna för ett visst innehåll.
- Alla reaktionsknappar kan ställas in för att visas i omröstningar och i plenumvyn (separat).
- I vissa omröstningsmetoder kan de röstande välja förslag utifrån en tillgänglig flagga (ex valberedningens förslag).
- Det blir möjligt att ändra visningsordning för reaktionsknappar.
