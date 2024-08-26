
const delayColorChage = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
};

const waktu = 1000

async function changeColor() {
    await delayColorChage('#26355D', waktu);
    await delayColorChage('#AF47D2', waktu);
    await delayColorChage('#FF8F00', waktu);
    await delayColorChage('#FFDB00', waktu);

    return "semua berhasil";
}



const hasil = document.querySelector('#berhasil');



// changeColor()
//     .then((res) => alert(res))
//     .then(() => {
//         hasil.textContent = "berhasil kawan wkwkwkwk"
//     })


// or

async function printWarna(){
    await changeColor();
    hasil.textContent ="print semua berhasil"
}

printWarna();