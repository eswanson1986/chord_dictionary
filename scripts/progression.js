class Progression {
    constructor(tonic, numerals){
        this.tonic = tonic
        this.numerals = numerals
    }

    chords() {
        let chordProgression = [];
        for (let i =0; i < this.numerals.length; i++) {
            let rootNote;
            let chordName;

            switch (this.numerals[i]) {
                case ('i') :
                    rootNote = this.tonic.root
                    chordName = `${rootNote} Minor`
                    chordProgression.push(chordList[chordName]);
                    break;
                case ('I') :
                    rootNote = this.tonic.root
                    chordName = `${rootNote} Major`
                    chordProgression.push(chordList[chordName]);
                    break;
                case ('ii') :
                    rootNote = this.tonic.maj2nd;
                    chordName = `${rootNote} Minor`
                    chordProgression.push(chordList[chordName]);
                    break;
                case ('II') :
                    rootNote = this.tonic.maj2nd;
                    chordName = `${rootNote} Major`
                    chordProgression.push(chordList[chordName]);
                    break;
                case ('iii') :
                    rootNote = this.tonic.maj3rd;
                    chordName = `${rootNote} Minor`
                    chordProgression.push(chordList[chordName]);
                    break;
                case ('III') :
                    rootNote = this.tonic.maj3rd;
                    chordName = `${rootNote} Major`
                    chordProgression.push(chordList[chordName]);
                    break;
                case ('iv') :
                    rootNote = this.tonic.p4th;
                    chordName = `${rootNote} Minor`
                    chordProgression.push(chordList[chordName]);
                    break;
                case ('IV') :
                    rootNote = this.tonic.p4th;
                    chordName = `${rootNote} Major`
                    chordProgression.push(chordList[chordName]);
                    break;
                case ('v') :
                    rootNote = this.tonic.p5th;
                    chordName = `${rootNote} Minor`
                    chordProgression.push(chordList[chordName]);
                    break;
                case ('V') :
                    rootNote = this.tonic.p5th;
                    chordName = `${rootNote} Major`
                    chordProgression.push(chordList[chordName]);
                    break;
                case ('vi') :
                    rootNote = this.tonic.maj6th;
                    chordName = `${rootNote} Minor`
                    chordProgression.push(chordList[chordName]);
                    break;
                case ('VI') :
                    rootNote = this.tonic.maj6th;
                    chordName = `${rootNote} Major`
                    chordProgression.push(chordList[chordName]);
                    break;
                case ('vii') :
                    rootNote = this.tonic.maj7th;
                    chordName = `${rootNote} Minor`
                    chordProgression.push(chordList[chordName]);
                    break;
                case ('VII') :
                    rootNote = this.tonic.maj7th;
                    chordName = `${rootNote} Major`
                    chordProgression.push(chordList[chordName]);
                    break;
            }

        }
        return chordProgression
    }

    transpose(tone) {
        this.tonic = tone;

    }
}