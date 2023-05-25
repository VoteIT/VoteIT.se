# Metoder för röstlängder

Röstlängder är centrala i VoteIT. För att en omröstning ska kunna göras måste den ha en röstlängd. Därför måste ni välja metod för att fastställa röstlängder i alla era möten. Här beskriver vi de vanligaste metoderna. Om du valt en mötesdialekt när du startat mötet har den dialekten vanligtvis en egen metod för att fastställa röstlängder. Dessa beskrivs inte här.

I samtliga metoder gäller att en deltagare måste ha rollen *Potentiell röstare* för att kunna få rösträtt.

## Alltid automatiskt

Detta är den enklaste metoden, och den bör sällan eller aldrig användas i stora möten. Den innebär att röstlängden alltid uppdateras efter vilka som har rollen *Potentiell röstare* och den byter automatiskt röstlängd i pågående omröstningar när rollerna förändras. Alltså kan vilka som får rösta i en omröstning förändras medan röstningen pågår. Det kan vara smidigt i ett exempelvis ett styrelsemöte, med få röstande.

Om ni valt den här metoden i ett möte visas inte rollen *Potentiell röstare* i deltagarlistan, eftersom det är samma sak som att finnas i nuvarande röstlängd.

## Automatiskt före omröstning

Med den här metoden fastställer VoteIT vid behov automatiskt en ny röstlängd när en omröstning startar. Kan användas ihop med komponenten [Aktiva användare](narvaro-rostratt.md#aktiva-anvandare) om ni vill ha någon form av närvarokontroll i mötet.

## Bara manuellt

Med den här metoden behöver ni manuellt skapa nya röstlängder. När ni vill göra en förändring utgår ni från aktuell röstlängd. Det är möjligt att ange röstvikt för varje röstande.

## Närvarokontroll

Med den här metoden fastställer ni röstlängd genom att genomföra en närvarokontroll. När ni avslutar närvarokontrollen får alla som markerat sig närvarande och har rollen *Potentiell röstande* rösträtt. Det är även möjligt att manuellt skapa en ny röstlängd utifrån den senaste, om någon till exempel missat att svara på närvarokontrollen.

Den här metoden rekommenderas inte, men finns kvar i VoteIT för att vissa organisationer har arbetsordningar eller stagdar som kräver metoden. Om det inte är ett absolut måste rekommenderar vi att undvika närvarokontroller, eller att använda [Automatiskt före omröstning](#automatiskt-fore-omrostning) ihop med funktionen [Aktiva användare](narvaro-rostratt.md#aktiva-anvandare).
