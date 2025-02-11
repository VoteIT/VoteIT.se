<script setup>
import ProgressBar from './ProgressBar.vue'
</script>

# Röstgrupper med överföring av rösträtt

**Utvecklingsprojekt för avancerade röstgrupper i VoteIT, där gruppernas medlemmar själva kan styra över vem som ska ha rösträtt i mötet.**

## Finansiering

Detta projekt behöver 40 000 kr i utlovade medel för att starta och faktureras i efterhand. Om utvecklingskonstnaderna överstiger den summan bärs överstigande kostnad av leverantören. Om projektet blir billigare att genomföra ges medverkande organisationer motsvarande procentuell rabatt vid fakturering.

<ProgressBar :value="20_000" :target="40_000" />

Kontakta [Robin Harms Oredsson](mailto:robin@betahaus.net) om er organisation vill vara med i samarbetet.

## Bakgrund

VoteIT har redan många olika metoder för att styra över vem som ska ha rösträtt i ett möte. Det går även att bjuda in med specifika roller direkt till en grupp. Däremot saknas möjlighet för deltagarna i gruppen att detaljstyra vilka som ska ha rösträtt just nu. I det här projektet bygger vi ett system med ordinarie och ersättare, där ordinarie ombud själva kan föra över eller ta tillbaka sin rösträtt inom gruppen.

Flytten av rösträtt inom grupperna kan liknas vid hur en röstsedel lämnas över från en person till en annan i gruppen.

## Vad är nytt

- En ny mötesdialekt tas fram, liknande "Ordinarie och ersättare", men där deltagare ska kunna detaljstyra vem som har rösträtt i gruppen.
- Ordinarie ledamöter ska kunna flytta över sin rösträtt till en ersättare i gruppen som inte redan har rösträtt.
- Ordinarie ledamöter ska kunna ta tillbaka sin rösträtt från den som för tillfället har just den personens rösträtt.
- Ersättare i gruppen ska kunna lämna tillbara rösträtt till ordinarie eller flytta vidare rösträtt till en annan ersättare i gruppen som inte redan har rösträtt.
- Deltagare ska kunna vara ersättare i mer än en grupp, och dess rösträtt ska då gå att spåra till den grupp de har rösträtt från.
