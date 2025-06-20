//DRY = Don't Repeat Yourself

// let count = 1;
// console.log(count);
// count = count + 1;
// console.log(count);count = count + 1;

// let count = 1;

// while (count <= 100) {
//   console.log(count);
//   count = count + 1;
// }

// for (let i = 0; i <= 20; i++) {
//   let FE = i % 3;
//   let sim = i % 5;
//   if (FE == 0) {
//     console.log("Frontend");
//   }
//   if (sim == 0) {
//     console.log("Simplified");
//   }
//   if (FE==0 && sim==0) {
//     console.log("Frontend Simplified")
//   }
//   if (FE==0 || sim==0) {
//     console.log(i)
//   }
//   console.log(i);
// }
// let f = "Frontend"
// let s = "Simplified"
// for (let i = 1; i <= 20; ++i) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(`${i} -> ${f} ${s}`);
//   }
//   else if (i % 3 == 0) {
//     console.log(`${i} -> ${f}`);
//   } else if (i % 5 == 0) {
//     console.log(`${i} -> ${s}`);
//   } else {
//     console.log(`${i} -> ${i}`);
//   }
// }

let str = "Frontend Simplified"
// console.log(str[1])
// console.log(str.length)

for (let i=0; i<str.length; ++i) {
    console.log(str[i])
}