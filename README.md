README:
************INSTRUKSJONER FOR OPPSTART************

1: ANSATTE SIDER: åpne Timeplan.html under webHtml mappen.

2: MOBILSIDER FOR KUNDER: åpne frontpage.html under mobileHtml mappen.


* Dette er et prosjekt hvor vi skal utvikle en booking-løsning for studentklinikken ved Høgskolen Kristiania, løsningen skal være utviklet for mobil. Det skal også være en Desktop-basert løsning for ansatte, der de kan gå inn å få oversikt over, redigere, tildele bookingavtaler. Hovedfokuset er egentlig på design, brukervennlighet og universell utforming, men vi kommer også til å utvikle funksjonaliteten så godt det lar seg gjøre.

* Link til github repo: https://github.com/Danieljohansen97/grensesnitt2019eksamen.git


Github kommandoer:
--(Dette er en huskeliste for oss på gruppa)--

- 1: git status
        Sjekker hvilke filer det er gjort endringer i, og om de er addet, eller commitet. 
        Røde filer = filene er ikke addet. 
        Grønne filer = filene er ikke committet.

- 2: git pull
        Henter filer fra github og lagrer dem lokalt på maskinen.

- 3.a: git add --a
        Adder alle filer som er endret lokalt og gjør dem klare for å committes.

- 3.b: git add "navn på fil"
        Adder en enkelt fil f.eks [git add "index.html"], og gjør den klar til commit

- 4: git commit -m"Din commit melding"
        Committer alle filene som er staget til å committes gjennom git add.
        -m"melding" legger til en commit message til committen.

- 5: git pull
        Skriver den igjen, fordi det er viktig å pulle før du pusher til git.

- 6: git push
        Sender filene som er committet opp til github, dette er det siste steget for å laste opp filer til github.

- 7: git log
        Viser en liste over tidligere committs til github repo.
        Når du bruker denne kommandoen kommer du inn i VIM, for å lukke dette terminalvinduet skriver du :q! og trykker enter.

- 8: git log --graph
        Viser en litt penere liste over tidligere pusher til github repo.
        Denne viser listen med "togskinner" ved siden av committs.
        Når du bruker denne kommandoen kommer du inn i VIM, for å lukke dette terminalvinduet skriver du :q! og trykker enter.

- 9: git clone https://github.com/Danieljohansen97/grensesnitt2019eksamen.git
        Kloner github repository, kopier linken fra github repo.

Generelle terminal kommandoer for mac:

- 1: cd 
        kommando for å navigere gjennom mapper i terminalvinduet.
        cd.. går ut av mappen.
        cd dittMappeNavn går inn i en mappe, eks cd Desktop for å navigere til skrivebord.
        Du kan også navigere flere mapper samtidig ved å gjøre feks: cd mappenavn/mappenavn/
        Du kan også autocomplete kommandoer, eller se muligheter ved å trykke TAB i noen tilfeller.

- 2: ls
        Lister alle mapper og filer i mappen du er i.

Hvis det ser ut som terminalen henger seg opp eller ikke responderer, så kan du prøve å trykke ctrl+z/ctrl+x/ctrl+c.
Husker ikke hva de betydde, men de stopper hvertfall prosesser som kjører i terminalen.

