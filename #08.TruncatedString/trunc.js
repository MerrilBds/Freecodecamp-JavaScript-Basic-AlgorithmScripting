/*
Truncate a String

Truncate a string (first argument) if it is longer 
than the given maximum string length (second argument).
 Return the truncated string with a ... ending.
*/
function truncateString(str, num) {
    let truncatedString = "";

    if (str.length <= num) {
        return str;
    }

    for (let i = 0; i < num; i++) {
        truncatedString += str[i];
    }

    truncatedString += "...";

    return truncatedString;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);