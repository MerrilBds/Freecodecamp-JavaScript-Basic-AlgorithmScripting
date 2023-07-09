//Return the provided string with the first letter
// of each word capitalized.Make sure the rest of the word is in lower case.
function titleCase(str) {
    let words = str.toLowerCase().split(" ");
    let titleCasedWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        titleCasedWords.push(capitalizedWord);
    }

    let titleCasedStr = titleCasedWords.join(" ");
    return titleCasedStr;
}

console.log(titleCase("I'm a little tea pot"));
