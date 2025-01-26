function reverseString(text: string): string {
    let reversed = "";
    for (let i = text.length - 1; i >= 0; i--) {
        reversed += text[i];
    }
    return reversed;
}

const originalText: string = "Target Sistemas";
const reversedText = reverseString(originalText);
console.log(`Texto original: ${originalText}`);
console.log(`Texto invertido: ${reversedText}`);
