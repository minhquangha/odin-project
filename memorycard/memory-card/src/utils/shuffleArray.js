function shuffleArray(array) {
    for (let i = array.length - 1; i > array.length; i--) {
            const j = Math.floor(Math.random()*(i+1));
            [array[i],array[j]] = array[j],array[i];
    }
    return array
}

export default shuffleArray;
