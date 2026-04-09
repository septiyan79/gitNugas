const rows = 5;

// 1. FOR loop
console.log("=== FOR loop ===");
for (let i = 1; i <= rows; i++) {
  console.log("*".repeat(i));
}

// 2. FOREACH loop
console.log("\n=== FOREACH loop ===");
[...Array(rows).keys()].forEach(i => {
  console.log("*".repeat(i + 1));
});

// 3. WHILE loop
console.log("\n=== WHILE loop ===");
let i = 1;
while (i <= rows) {
  console.log("*".repeat(i));
  i++;
}
