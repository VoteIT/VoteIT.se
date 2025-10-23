<script setup>
import ProgressBar from './ProgressBar.vue'
</script>

# Röstgrupper med överföring av rösträtt

**Utvecklingsprojekt för avancerade röstgrupper i VoteIT, där gruppernas medlemmar själva kan styra över vem som ska ha rösträtt i mötet.**

## Finansiering

Projektet genomfördes hösten 2025, finansierat av Miljöpartiet de gröna.

## Bakgrund

VoteIT har redan många olika metoder för att styra över vem som ska ha rösträtt i ett möte. Det går även att bjuda in med specifika roller direkt till en grupp. Däremot saknas möjlighet för deltagarna i gruppen att detaljstyra vilka som ska ha rösträtt just nu. I det här projektet bygger vi ett system med ordinarie och ersättare, där ordinarie ombud själva kan föra över eller ta tillbaka sin rösträtt inom gruppen.

Flytten av rösträtt inom grupperna kan liknas vid hur en röstsedel lämnas över från en person till en annan i gruppen.

## Vad är nytt

- En ny mötesdialekt togs fram, liknande "Ordinarie och ersättare", men där deltagare kan detaljstyra vem som har rösträtt i gruppen.
- Ordinarie ledamöter kan flytta över sin rösträtt till en ersättare i gruppen som inte redan har rösträtt.
- Ordinarie ledamöter kan ta tillbaka sin rösträtt från den som för tillfället har just den personens rösträtt.
- Ersättare i gruppen kan lämna tillbara rösträtt till ordinarie eller flytta vidare rösträtt till en annan ersättare i gruppen som inte redan har rösträtt.
- Deltagare kan vara ersättare i mer än en grupp, och dess rösträtt går gå att spåra till den grupp de har rösträtt från.
