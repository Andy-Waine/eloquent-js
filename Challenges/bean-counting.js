const countB = (str) => {
    let counted = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "B") {
            counted += 1;
        }
    }
    return counted;
}

console.log(countB("BabaBooey"));