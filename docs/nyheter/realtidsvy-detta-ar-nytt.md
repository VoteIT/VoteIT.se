# VoteIT realtidsvy – detta är nytt

_Släpps den 12 februari 2024_

## Vad är vad?

**Sändarvy** – Detta är den vy som används av mötesordföranden och av den som sköter talarlistor. Den har två undervyer – Talarlista och Beslut, som motsvarar de tidigare talarhanterings- respektive plenumvyn. Härifrån styrs vad som ska visas i Realtidsvyn. Plenumvyn, som inte finns kvar i VoteIT, har tidigare ofta visats på projektor i möteslokaler. Nu rekommenderar vi istället att använda realtidsvyn för den visningen.

**Realtidsvy** – Denna vy är i dagsläget en ren mottagarvy som visar innehåll från Sändarvyn. Den har ett avskalat utseende och lämpar sig väl för att visa på en projektor, men kan också användas av deltagare som vill följa mötet på en egen skärm.

**Mötesrum** – För att aktivera realtidsvyn behöver du skapa minst ett mötesrum. Om du har behov av att kunna ha flera samtidigt pågående talarlistor och beslutsprocesser, exempelvis om ditt möte har parallellt pågående utskott, kan du skapa flera rum. Varje mötesrum har sina egna inställningar för talarlistor.

**Mötesrum och talarlistor**
För att kunna använda realtidsvy och talarlistor kommer ni nu behöva ställa in mötesrum i ert möte. Vid skapande av nya möten går du nu igenom en guide där du får hjälp att ställa in mötesrum och talarlistor. Om du vill skapa mötesrum senare, eller vill lägga till flera rum, exempelvis för utskott, kan du göra det i mötets kontrollpanel.

Om du har gamla möten med konfigurerade talarsystem skapas det automatiskt mötesrum för dessa.

## Talarhantering och plenumvy slås ihop till sändarvy

Sändarvyn i VoteIT är nu hem för hantering av både talarlista och beslut. Den har dessutom fått ett antal nya kontroller för sändning, utöver det som funnits tidigare. Under fliken _Beslut_ kan en moderator åt gången styra vilka förslag som sänds ut till realtidsvyn. När ni byter ordförande kan hen med ett enkelt klick ta över sändningen. Det innebär att en ordförande som inte sänder just nu har möjlighet att använda plenumvyn utan att störa sändningen.

Under fliken _Talarlista_ finns ingen kontroll av vem som styr talarlistorna. Det är såklart fortfarande klokt att endast en person sköter talarlistorna.

## Dela realtidsvyn, inte sändarvyn

![Realtidsvyn kopplas till projektorn för visning av både talarlista och förslag](../utvecklingsprojekt/realtidsvy-delprojekt-1.png)

Vi rekommenderar alltså inte längre att visa ordförandens skärm på projektor. Öppna istället upp realtidsvyn, antingen på en dedikerad dator eller på en separat skärm, och visa detta. Det finns flera fördelar med den lösningen:

- Det är nu möjligt att visa aktiv talarlista och förslag samtidigt, i samma vy. Realtidsvyn kan också ställas in för att bara visa det ena eller det andra.
- Ordföranden behöver inte oroa sig över att deltagare ser allt hen gör på sin skärm, inklusive att gissa beslut och låta muspekaren flyta över bifall eller avslag innan deltagarna röstat klart.
- Realtidsvyn kan ha en mer avskalad design än den tidigare plenumvyn, vilket innebär mindre distraktioner för deltagarna.
- Det blir möjligt att använda annan textstorlek på skärmen som visas för alla än på den skärm ordföranden använder.

## Realtidsvyn – följ mötet på egen skärm

Realtidsvyn kommer framöver att bli ännu med användbar. I delprojekt 2 gör vi realtidsvyn mer interaktiv, så att deltagare kan rösta i omröstningar och sätta upp sig på talarlistan. Fram tills dess fyller vyn fortfarande en funktion för deltagare som föredrar den egna skärmen framför projektorn.
