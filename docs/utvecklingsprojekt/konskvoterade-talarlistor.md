<script setup>
import ProgressBar from './ProgressBar.vue'
</script>

# Könsstatistik och kvotering i talarlistor

**Utvecklingsprojekt för könsstatistik och automatisk könskvotering av talarlistor i VoteIT**

## Finansiering

Detta projekt behöver 80 000 kr i utlovade medel för att starta och faktureras i efterhand. Om utvecklingskonstnaderna överstiger den summan bärs överstigande kostnad av leverantören. Om projektet blir billigare att genomföra ges medverkande organisationer motsvarande procentuell rabatt vid fakturering.

<ProgressBar :value="0" :target="80_000" />

Kontakta [Robin Harms Oredsson](mailto:robin@betahaus.net) om er organisation vill vara med i samarbetet.

## Bakgrund

Könskvotering av talarlistor är ett vanligt sätt att sträva efter mer jämställda möten. Detta projekt syftar att skapa en ordningsmetod för talarlistor i VoteIT som tar hänsyn till användarens kön. För att åstadkomma detta behövs också en metod för användare att uppge kön eller pronomen.

Funktionen är inte fullständigt specificerad ännu. Det kommer att göras tillsammans med de organisationer som samarbetar kring projektet, då de exakta reglerna för könskvotering eventuellt kan skilja åt mellan organisationer.

## Vad är nytt

- Användare ska kunna uppge kön eller pronomen per möte när de går med i mötet eller sätter upp sig på talarlistan.
- Talartidsstatistiken ska kunna visa fördelning av antal talade gånger, talad tid och hur många unika talare av olika kön.
- Könsstatistiken ska även inkludera jämförelsetal för förväntat utfall utifrån könsfördelning bland alla mötets deltagare.
- Talarlistor ska kunna visa deltagarens angivna kön/pronomen, för att det ska vara tydligt varför den satt aktuell ordning.
- En ny ordningsmetod för talarlistor tillkommer, som kvoterar upp kvinnor och icke-binära.
- Den nya ordningsmetoden ska även ha stöd för att prioritera talare som inte talat tidigare, och den prioriteringen ska gå före könskvotering.
