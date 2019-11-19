README:

* Description of project


Github kommandoer:

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


