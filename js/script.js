/*
Ciao ragazzi,
    Esercizio di oggi: Vue To Do List
nome repo: vue - todolist
Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni task sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del task
    - done, un booleano(true / false) che indica se il task è stato fatto oppure no
Create almeno un task con done: true
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni task.
Se la proprietà done è uguale a true, visualizzare il testo del task sbarrato.
    MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il task viene rimosso dalla lista.
    MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo task, che quindi viene aggiunto alla lista dei todo esistenti.
    Bonus:
1 - oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il task alla lista
2 - cliccando sul testo dell'item, invertire il valore della proprietà done del task corrispondente (se done era uguale a false, impostare true e viceversa)
Allego screen di riferimento, ma sulla grafica siete liberi di fare come preferite: faccia_leggermente_sorridente:
*/

const lists = [
    {
        text: 'comprare il latte',
        done: 'false',

    },
    {
        text: 'studiare',
        done: 'true',

    },
    {
        text: 'viaggiare',
        done: 'false',

    },
    {
        text: 'andare al cinema',
        done: 'false',

    },
    {
        text: 'cambiare nome',
        done: 'false',

    },
    {
        text: 'portare la macchina dal dottore',
        done: 'false',

    },
    {
        text: 'diventare il dottore',
        done: 'false',

    },

]