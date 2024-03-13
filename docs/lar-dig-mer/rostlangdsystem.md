# Metoder för röstlängder

Röstlängder är centrala i VoteIT. För att en omröstning ska kunna göras måste den ha en röstlängd. Därför måste ni välja metod för att fastställa röstlängder i alla era möten. Här beskriver vi de vanligaste metoderna. Om du valt en mötesdialekt när du startat mötet har den dialekten vanligtvis en egen metod för att fastställa röstlängder. Dessa beskrivs inte här.

I samtliga metoder gäller att en deltagare måste ha rollen *Potentiell röstare* för att kunna få rösträtt.

När du väljer metod så finns ett antal saker att ta hänsyn till

* **Kan uppdateras fritt** - Moderatorn kan när som helst skapa en röstlängd bara genom att klicka på knappen *Fastställ röstlängd* på röstlängdssidan.
* **Viktade röster** - Användare kan ha flera röster med denna metod.
* **Fungerar med aktiva användare** - Om [Aktiva användare](narvaro-rostratt.md#aktiva-anvandare) är igång så får bara närvarande deltagare rösträtt.
* **Byter röstlängd på aktiva omröstningar** - Pågående omröstningar får ny röstlängd. Bra för processer med långa omröstningar där användare kommer sent,
men mindre bra för fysiska stämmor och dylikt.

# Vanliga metoder

Tillgängliga i möten utan en specifik [mötesdialekt](motesdialekt.md) .

## Alltid automatiskt

Detta är den enklaste metoden, och den bör sällan eller aldrig användas i stora möten. Den innebär att röstlängden alltid uppdateras efter vilka som har rollen *Potentiell röstare* och den byter automatiskt röstlängd i pågående omröstningar när rollerna förändras. Alltså kan vilka som får rösta i en omröstning förändras medan röstningen pågår. Det kan vara smidigt i ett exempelvis ett styrelsemöte, med få röstande.

Om ni valt den här metoden i ett möte visas inte rollen *Potentiell röstare* i deltagarlistan, eftersom det är samma sak som att finnas i nuvarande röstlängd.

* **Byter röstlängd på aktiva omröstningar**

## Automatiskt före omröstning

Med den här metoden fastställer VoteIT vid behov automatiskt en ny röstlängd när en omröstning startar. Kan användas ihop med komponenten [Aktiva användare](narvaro-rostratt.md#aktiva-anvandare) om ni vill ha någon form av närvarokontroll i mötet.

* **Fungerar med aktiva användare**
* **Kan uppdateras fritt**

## Manuellt skapad

Inga röstlängder skapas av sig själv, men du behöver inte välja användare manuellt utan kan klicka på *Fastställ röstlängd* på sidan röstlängder.

* **Fungerar med aktiva användare**
* **Kan uppdateras fritt**

##  Helt manuellt

Med den här metoden behöver ni manuellt skapa nya röstlängder genom att handplocka användare. När ni vill göra en förändring utgår ni från aktuell röstlängd.

* **Viktade röster**

# Metoder som kräver mötesdialekt

När ett möte skapas med en [mötesdialekt](motesdialekt.md) så kräver det ofta ett visst sätt att hantera röstlängden. Läs under mötesdialekter för att lära dig mer om dem.
Mötesdialekter kan ha helt skräddarsydda röstlängder, så här följer bara ett urval.

Mötesdialekternas metoder har några funktioner till som är bra att känna till:

* **Gruppröster** - Rösträtten kommer av att en deltagare är med i en grupp som har fått röster fördelade till sig.
Exempelvis kan det vara en lokalförening som har ett antal röster totalt på riksstämman i den organisationen.
* **Delegerade** - Grupper kan ge bort sina röster till andra, som då får rösta i deras ställe. Kallas ofta ombud.

## Ordinarie och ersättare

Varje grupp i mötet kan ha medlemmar med rollen ordinarie eller ersättare. Alla som har någon av de rollerna kan få rösträtt.
Gruppen har sen ett antal röster som fördelas på medlemmarna. Först får ordinarie rösträtt, sen ersättare om det finns röster kvar.
På så sätt kan man skapa ett helt automatiskt system med suppleanter, eftersom modellen också kikar på vilka som är närvarande.

* **Gruppröster**
* **Fungerar med aktiva användare**
* **Kan uppdateras fritt**

## Viktade gruppröster

Medlemmarna i gruppen fördelar själva rösterna mellan sig. Hur det ser ut beror på organisationen som använder.

* **Gruppröster**
* **Kan uppdateras fritt**

## Viktade gruppröster automatiskt fördelade

Grupperna får ett antal röster. Rösterna fördelas sen automatiskt mellan användare som är medlemmar i grupperna.
En grupp kan vara ombud för en annan grupp.

* **Gruppröster**
* **Viktade röster**
* **Delegerade**
* **Fungerar med aktiva användare**
