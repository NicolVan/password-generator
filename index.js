let display = document.getElementById('passw');

function pass() {
    let input = parseInt(document.querySelector("input").value);

    function createpassword(length, caseLowerAlphabet, caseUpAlphabet, caseNumber, caseSymbol) {
        const lowerAlphabetChar = 'abcdefghijklmnopqrstuvwxyz';
        const upAlphabetChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChar = '0123456789';
        const symbolChar = '*@()/&-?!:*~%';

        var allChar = "";
        var password = "";

        allChar += caseLowerAlphabet ? lowerAlphabetChar : "";
        allChar += caseUpAlphabet ? upAlphabetChar : "";
        allChar += caseNumber ? numberChar : "";
        allChar += caseSymbol ? symbolChar : "";

        if (length <= 0) {
            return "(password length must be at least 1)";
        }
        if (allChar.length === 0) {
            return "(At least 1 set of characters needs to be selected)";
        }

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allChar.length);
            password += allChar[randomIndex];
        }
        return password;
    }

    const caseLowerAlphabet = true;
    const caseUpAlphabet = true;
    const caseNumber = true;
    const caseSymbol = true;

    const password = createpassword(input, caseLowerAlphabet, caseUpAlphabet, caseNumber, caseSymbol);
    display.value = password;
}

function copymethod() {
    const password = document.getElementById("passw").value;
    navigator.clipboard.writeText(password)
        .then(() => {
            console.log('Password copied to clipboard');
        })
        .catch(err => {
            console.error('Failed to copy password: ', err);
        });
}
