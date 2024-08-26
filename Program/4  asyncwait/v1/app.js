

// async function hello() { console.log('HALooo') }

// ketika ada function async maka otomatis akan menjadi Promise

let iscorrect = true


const hello = async ()=>{
    
    // return "hai dunia programing"
    throw "maaf ngak kenal  "
};




hello().then((res)=>{
    console.log('responya', res);
}).catch((err)=>{
    console.log('error', err);
})


// ===========================================================================



const getData = Math.floor(Math.random() * 10) + 5

// function biasa
function setTime(data) {
    const timeSet = Math.floor(Math.random() * 4500) + 500
    setTimeout(() => {
        try {
            if(data > 10){
                throw "error"
            }else{
                console.log('success!')
            }
        } catch (err) {
            console.log(err)
        }
    }, timeSet);
}

// asyncrhonus
async function ascSetTime(data) {
    if(data > 10){
        throw "error"
    }else{
        console.log('success!')
    }
}


ascSetTime(getData).catch(e => console.log(e))
setTime(getData)