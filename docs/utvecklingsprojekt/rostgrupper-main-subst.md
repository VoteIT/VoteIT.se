# Röstgrupper med överföring av rösträtt

**Utvecklingsprojekt för avancerade röstgrupper i VoteIT, där gruppernas medlemmar själva kan styra över vem som ska ha rösträtt i mötet.**

## Finansiering

Kontakta [Robin Harms Oredsson](mailto:robin@betahaus.net) om er organisation vill vara med i samarbetet.

## Bakgrund

VoteIT har redan många olika metoder för att styra över vem som ska ha rösträtt i ett möte. Det går även att bjuda in med specifika roller direkt till en grupp. Däremot saknas möjlighet för deltagarna i gruppen att detaljstyra vilka som ska ha rösträtt just nu. I det här projektet bygger vi ett system med ordinarie och ersättare, där ordinarie ombud själva kan föra över eller ta tillbaka sin rösträtt inom gruppen.

Funktionen är inte fullständigt specificerad ännu. Det kommer att göras tillsammans med de organisationer som samarbetar kring projektet.

## Vad är nytt

- En ny mötesdialekt tas fram, liknande "Ordinarie och ersättare", men där deltagare ska kunna detaljstyra vem som har rösträtt i gruppen.
- Ordinarie ledamöter ska kunna flytta över sin rösträtt till en ersättare i gruppen som inte redan har rösträtt.
- Ordinarie ledamöter som inte har rösträtt ska kunna ta ta över rösträtten från valfri ersättare i gruppen, om denna har rösträtt från samma grupp.
- Deltagare ska kunna vara ersättare i mer än en grupp, och dess rösträtt ska då gå att spåra till den grupp de har rösträtt från.
- Alternativ lösning: Ersättare i grupper har en intern ordning (första ersättare, etc), och används ihop med systemet "Aktiva användare".
