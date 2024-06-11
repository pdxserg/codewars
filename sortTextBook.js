const sorter = function(textbooks) {
    const lowerCaseTextbooks = textbooks.map(textbook => textbook.toLowerCase());
    const sortedTextbooks = lowerCaseTextbooks.sort();
    const originalTextbooks = sortedTextbooks.map((textbook, index) => {
        return textbooks[textbooks.findIndex(t => t.toLowerCase() === textbook)];
    });
    return originalTextbooks;
}
console.log(sorter(["Uuu","ber","Addd",'fer']))