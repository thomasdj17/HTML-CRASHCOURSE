const input = document.getElementById("input");

function reversedString(str) {
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value
    const reverse = reversedString(value)

    if (reverse === value) {
        alert("This is a palindrome")
    } else {
        alert("This is not a palindrome")
    }

    input.value = ""
}
