# Verifica angular 4Ci 17 aprile 2023

## Istruzioni

1. Modificare il file cliente.ts aggiungendo i seguenti metodi e gli oggetti necessari al funzionamento del codice:

  - `get form(): FormGroup {  
    ...  
  }`

  - `set update(newData: any) {  
    ...  
  }`

  > **NB: I campi della nome e cognome della form devono essere required (obbligatori)**

  2. Creare i seguenti componenti:
  - **home**: scrivere nel componente il proprio nome e cognome e la data di oggi in H2 e il titolo *"Gestione clienti"* in **H1**
  - **elenco-clienti**: visualizzare una tabella con l'elenco dei clienti e un titolo in **H1** con scritto *"Elenco clienti"*
  - **nuovo-cliente**: visualizzare un titolo in **H1** con scritto *"Nuovo cliente"*, una form che consenta di inserire nome e cognome del cliente e un pulsante *"Salva"*.  
    + Il pulsante *"Salva"* si deve attivare solo se tutti i campi della forma sono validi.  
    + Per il controllo di validità e la visualizzazione dei messaggi  di errore è possibile usare il codice visto nelle lezioni precedenti. 

  > **NB: per la gestione dei dati utilizzare il servizio *clienti.service.ts* presente nella cartella common. Il funzionamento dei metodi è presente nei commenti.**

3. Modificare il menù presente nel file *app.component.html* in modo che vengano caricati i componenti creati.

4. Modificare il file *app.component.html* in modo che sotto il menù vengano visualizzati i componenti creati (in base a quanto selezionato nel menù).