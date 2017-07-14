/**
 * Created by emanuel on 7/10/17.
 */
rootNames = ["A", "A#", "Bb", "B", "Cb", "B#", "C", "C#", "Db", "D", "D#", "Eb", "E", "Fb", "E#", "F", "F#", "Gb", "G",
             "G#", "Ab"];

chordQualities = ["Maj", "min", "sus2", "sus4", "aug", "dim"];

function generateChord() {

    $('#name').html(rootNames[Math.floor(Math.random() * rootNames.length)] + " " +
    chordQualities[Math.floor(Math.random() * chordQualities.length)]);
}

