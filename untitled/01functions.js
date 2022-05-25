function howMuchILoveYou(nbPetals) {
    // your code
    function howMuchILoveYou(nbPetals) {
        let phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']

        return (nbPetals % 6) === 0 ? phrases[5] : phrases[(nbPetals % 6) - 1]
        // your code
    }
}

function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    return i;
}