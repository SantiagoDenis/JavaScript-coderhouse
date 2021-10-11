// Practicando el localstorage
const inpKey = document.querySelector("#inpKey")
const inpValue = document.querySelector("#inpValue")
const btnInsert = document.querySelector("#btnInsert")
const isOutput = document.querySelector("#isOutput")

btnInsert.onclick = function() {
    const key = inpKey.value;
    const value = inpValue.value

    if (key && value) {
        localStorage.setItem(key, value);
    }

}

for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    let display = isOutput.innerHTML += `
    ${key}: ${value} <br/>
    `;

    isOutput.appendChild(display);
}




