// menu.js
import { kalkulator } from './rumus.js';
import readline from 'readline';

const inputUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tanya(pertanyaan) {
    return new Promise((resolve) => inputUser.question(pertanyaan, resolve));
}

async function main() {
    console.log("=============================");
    console.log("    KALKULATOR SEDERHANA     ");
    console.log("=============================");

    const angka1 = parseFloat(await tanya("Masukkan angka pertama : "));
    const operator = await tanya("Masukkan operator (+, -, *, /): ");
    const angka2 = parseFloat(await tanya("Masukkan angka kedua   : "));

    const hasil = kalkulator(angka1, angka2, operator);

    console.log("-----------------------------");
    console.log(`  ${angka1} ${operator} ${angka2} = ${hasil}`);
    console.log("=============================");

    inputUser.close();
}

main();
