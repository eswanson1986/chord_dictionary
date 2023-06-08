class Keyboard {
    constructor(HTML_ELEMENT) {
        this.screen = document.querySelector(HTML_ELEMENT);
        this.screen.innerHTML = `
        <div class = "keyboard">
            <div class = "white"></div>
            <div class = "black"></div>
            <div class = "white" id="G Abb F##"></div>
            <div class = "black" id="Ab G#"></div>
            <div class = "white" id="A Bbb G##"></div>
            <div class = "black" id="Bb A#"></div>
            <div class = "white" id="B Cb A##"></div>
            <div class ="white"  id="C B# Dbb"></div>
            <div class = "black" id="C# Db"></div>
            <div class = "white" id="D C## Ebb"></div>
            <div class = "black" id="Eb D#"></div>
            <div class = "white" id="E Fb D##" ></div>
            <div class = "white" id="F Gbb E#"></div>
            <div class = "black" id="F# Gb"></div>
            <div class = "white"></div>
            <div class = "black"></div>
            <div class = "white"></div>
            <div class = "black"></div>
            <div class = "white"></div>
        </div>`
    }



    paintKeys(chord) {
        const keys = document.querySelector('.keyboard').children;
        // const keysArr = Array.from(keys);
        if (chord.length === 5){
            chord.splice(0,1)
        }

        if (chord.length === 6){
            chord.splice(0,1)
            chord.splice(1,1)
        }



        for (let j = 0; j < keys.length; j++){
            let notes = keys[j].id.split(" ");

            for (let k =0; k < notes.length; k++) {
                if (chord.includes(notes[k])) {
                keys[j].classList.toggle("chordTone");
                break;
}
            }
        }
    }

    clearKeys() {

        const keys = document.querySelector('.keyboard').children;

        for (let j = 0; j < keys.length; j++){
            let classes = keys[j].classList;
            let classesArr = Array.from(classes);
            if (classesArr.includes('chordTone')) {
                classes.toggle('chordTone');
            }

        }

    }

}