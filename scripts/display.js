class Display {

    static chordType;
    static tone;

    static addTitle(HTML_ELEMENT_ID) {
        // adds title to display
        let screen = document.getElementById(HTML_ELEMENT_ID);
        let classnames = 'col-12 text-center mt-4'
        let title = document.createElement('h1')
        title.innerText = 'Chord Reference Dictionary'
        title.className = classnames
        screen.appendChild(title)


    }

    static siteTag(HTML_ELEMENT_ID) {
        // adds website tag to screen
        
        let screen = document.getElementById(HTML_ELEMENT_ID);
        let website = document.createElement('a')
        website.innerText = 'tonalityofe.com'
        website.href = 'https://www.tonalityofe.com/'
        screen.appendChild(website)
    }
    

    static noteScreen(HTML_ELEMENT_ID) {
        let screen = document.getElementById(HTML_ELEMENT_ID);
        let classNames ='col-12 col-sm-5 col-md-2 btn btn-dark m-1';
        screen.innerHTML = ``
        Display.addTitle(HTML_ELEMENT_ID)

        screen.innerHTML += `
        <button type='button' class='${classNames}' id="C">C</button>
        <button type='button' class='${classNames}' id="C#">C#</button>
        <button type='button' class='${classNames}' id="Db">Db</button>
        <button type='button' class='${classNames}' id="D">D</button>
        <button type='button' class='${classNames}' id="Eb">Eb</button>
        <button type='button' class='${classNames}' id="E">E</button>
        <button type='button' class='${classNames}' id="F">F</button>
        <button type='button' class='${classNames}' id="F#">F#</button>
        <button type='button' class='${classNames}' id="G">G</button>
        <button type='button' class='${classNames}' id="Gb">Gb</button>
        <button type='button' class='${classNames}' id="Ab">Ab</button>
        <button type='button' class='${classNames}' id="A">A</button>
        <button type='button' class='${classNames}' id="Bb">Bb</button>
        <button type='button' class='${classNames}' id="B">B</button>
        `


        let buttons = screen.children;
        let buttonsArr = Array.from(buttons);
        for (let i =0; i < buttonsArr.length; i++) {
            buttonsArr[i].addEventListener('click', () => {

                let noteName = buttonsArr[i].id

                Display.tone = Tone.toneList[noteName]

                Display.chordScreen(HTML_ELEMENT_ID)
            })

        }
        Display.siteTag(HTML_ELEMENT_ID)
        

    }

    static chordScreen(HTML_ELEMENT_ID) {
        let screen = document.getElementById(HTML_ELEMENT_ID);
        let classNames ='col-12 col-sm-5 btn btn-dark m-1';
        screen.innerHTML =``
        Display.addTitle(HTML_ELEMENT_ID)
        screen.innerHTML += `
        <button type='button' class='${classNames}' id="Major">Major</button>
        <button type='button' class='${classNames}' id="Minor">Minor</button>
        <button type='button' class='${classNames}' id="Augmented">Augmented</button>
        <button type='button' class='${classNames}' id="Diminished">Diminished</button>
        <button type='button' class='${classNames}' id="Dominant 7th">Dominant 7th</button>
        <button type='button' class='${classNames}' id="Major 7th">Major 7th</button>
        <button type='button' class='${classNames}' id="Minor 7th">Minor 7th</button>
        <button type='button' class='${classNames}' id="Half Diminished 7th">Half Diminished 7th</button>
        <button type='button' class='${classNames}' id="Diminished 7th">Diminished 7th</button>
        <button type='button' class='${classNames}' id="Augmented 7th">Augmented 7th</button>
        <button type='button' class='${classNames}' id="Sus 2">Sus 2</button>
        <button type='button' class='${classNames}' id="Sus 4">Sus 4</button>
        <button type='button' class='${classNames}' id="Minor-Major 7th">Minor-Major 7th</button>
        <button type='button' class='${classNames}' id="Ninth">Ninth</button>
        <button type='button' class='${classNames}' id="Minor Ninth">Minor Ninth</button>
        <button type='button' class='${classNames}' id="Major Ninth">Major Ninth</button>
        <button type='button' class='${classNames}' id="11th">11th</button>
        <button type='button' class='${classNames}' id="Major 11th">Major 11th</button>
        <button type='button' class='${classNames}' id="Minor 11th">Minor 11th</button>
        <button type='button' class='${classNames}' id="13th">13th</button>
        <button type='button' class='${classNames}' id="Dominant 7th flat 9">Dominant 7th flat 9</button>
        <button type='button' class='${classNames}' id="Dominant 7th #9">Dominant 7th #9</button>
        <button type='button' class='${classNames}' id="13th flat 9">13th flat 9</button>
        <button type='button' class='${classNames}' id="13th #9">13th #9</button>
        `
        let buttons = screen.children;
        let buttonsArr = Array.from(buttons);
        for (let i =0; i < buttonsArr.length; i++) {
            buttonsArr[i].addEventListener('click', () => {
            Display.chordType = buttonsArr[i].id
            Display.infoScreen(HTML_ELEMENT_ID)
        })}
        Display.siteTag(HTML_ELEMENT_ID)


    }

    static homeButton(HTML_ELEMENT_ID) {

        // adds home button to display that goes back to note name screen

        let screen = document.getElementById(HTML_ELEMENT_ID);
        let classnames = 'col-12 col-sm-5 btn btn-dark m-1'
        let homeButton = document.createElement('button')
        homeButton.innerText = 'Home'
        homeButton.className = classnames
        homeButton.addEventListener('click', () => {
            Display.noteScreen(HTML_ELEMENT_ID);
        })

        screen.appendChild(homeButton)

    }

    static infoButton(HTML_ELEMENT_ID) {
        // adds info button that goes to chordinfo screen
        let screen = document.getElementById(HTML_ELEMENT_ID);
        let classnames = 'col-12 col-sm-5 btn btn-dark m-1'

        let infoButton = document.createElement('button')
        infoButton.innerText = '?'
        infoButton.className = classnames
        infoButton.addEventListener('click', () =>{
            Display.chordInfoScreen(HTML_ELEMENT_ID)
        })
        screen.appendChild(infoButton)
        

    }

    static chordInfoScreen(HTML_ELEMENT_ID) {
        let screen = document.getElementById(HTML_ELEMENT_ID);
        screen.innerHTML =``
        Display.addTitle(HTML_ELEMENT_ID)

        screen.innerHTML +=`
        <h3>Info</h3>
        <p>The chord reference dictionary was created to easily return information about any chord with two clicks</p>
        <p>Simply choose the note and type of chord and the Chord Dictionary will return the notes, interval names and a visual of how to play the chord in 'closed-voicing' on a keyboard</p>
        <h5>Rules for 'closed-voicing' chords:</h5>
        <p>Chords are played with one hand</p>
        <p>Free hand is either playing melody(if RH free) or Bass line (if RH free)</p>
        <p>Re-arrange notes to center the palm of hand on middle C</p>
        <p>'Closed-Voicing' cords have 3 or 4 notes</p>
        <p>If the chord has 5 notes drop the Root note from the voicing</p>
        <p>If the chord has 6 notes drop the Root note and 5th from the voicing</p>
       
        
        `
        Display.homeButton(HTML_ELEMENT_ID)
        Display.siteTag(HTML_ELEMENT_ID)
    }

    static infoScreen(HTML_ELEMENT_ID){
        let screen = document.getElementById(HTML_ELEMENT_ID);

        let chord = new Chord(Display.tone, Display.chordType)
        let intervalKeys = Object.keys(chord.intervals);
        screen.innerHTML =``
        Display.addTitle(HTML_ELEMENT_ID)

        screen.innerHTML +=`

        <h3 class='text-center'>${chord.name}</h3>
        `
        let chordInfoScreen = document.createElement('p')
        chordInfoScreen.className = 'text-center'
        screen.appendChild(chordInfoScreen)

        for (let i = 0; i< intervalKeys.length; i++) {

            chordInfoScreen.innerText += `${intervalKeys[i]} : ${chord.intervals[intervalKeys[i]]}\n`
        }


        screen.innerHTML += `
        <div id='keyboardImg'></div>
        `

        let keyboard = new Keyboard('#keyboardImg');
        keyboard.paintKeys(chord.notes)

        Display.homeButton(HTML_ELEMENT_ID)
        Display.infoButton(HTML_ELEMENT_ID)
        Display.siteTag(HTML_ELEMENT_ID)

    }
}