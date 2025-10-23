<script setup>
import ProgressBar from './ProgressBar.vue'
</script>

# Könsstatistik och kvotering i talarlistor

**Utvecklingsprojekt för könsstatistik och automatisk könskvotering av talarlistor i VoteIT**

## Finansiering

Möjlighet att ange kön och kvotering av talarlistor genomfördes hösten 2025, finansierat av Miljöpartiet de gröna.
För att färdigställa den del som gäller könsstatistik för mötet behövs ytterligare 40 000 kr i utlovade medel. Faktureras i efterhand. Om utvecklingskonstnaderna överstiger den summan bärs överstigande kostnad av leverantören. Om projektet blir billigare att genomföra ges medverkande organisationer motsvarande procentuell rabatt vid fakturering.

<ProgressBar :value="0" :target="40_000" />

Kontakta [Robin Harms Oredsson](mailto:robin@betahaus.net) om er organisation vill vara med i samarbetet.

## Bakgrund

Könskvotering av talarlistor är ett vanligt sätt att sträva efter mer jämställda möten. Detta projekt syftar att skapa en ordningsmetod för talarlistor i VoteIT som tar hänsyn till användarens kön. För att åstadkomma detta behövs också en metod för användare att uppge kön eller pronomen.

Funktionen är inte fullständigt specificerad ännu. Det kommer att göras tillsammans med de organisationer som samarbetar kring projektet, då de exakta reglerna för könskvotering eventuellt kan skilja åt mellan organisationer.

## Kvar att göra

- Talartidsstatistiken ska kunna visa fördelning av antal talade gånger, talad tid och hur många unika talare av olika kön.
- Könsstatistiken ska även inkludera jämförelsetal för förväntat utfall utifrån könsfördelning bland alla mötets deltagare.

## Genomfört i steg 1

- Användare kan uppge kön eller pronomen per möte när de sätter upp sig på talarlistan.
- Talarlistor kan visa deltagarens angivna kön/pronomen, så att det är tydligt varför den satt aktuell ordning.
- En ny ordningsmetod för talarlistor, som kvoterar upp kvinnor och icke-binära.
- Den nya ordningsmetoden har även stöd för att prioritera talare som inte talat tidigare, och den prioriteringen går före könskvotering.
