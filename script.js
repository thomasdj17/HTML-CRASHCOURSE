var mp = new Map()
var str = "Welcome to the class students"

for (var letter of str) {
    if (mp.has(letter)) {
        mp.set(letter, mp.get(letter) + 1)
    } else {
        mp.set(letter, 1)
    }
}
console.log(mp);