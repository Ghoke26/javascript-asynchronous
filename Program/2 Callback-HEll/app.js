
// ===========================================================================
// setTimeout(function(){
//     document.body.style.backgroundColor = 'red';
// },2000)

// setTimeout(function(){
//     document.body.style.backgroundColor = 'yellow';
// },4000)

// setTimeout(function(){
//     document.body.style.backgroundColor = 'green';
// },6000)

// seperti iin bisa merubah backgroudn tetapi tidak pada waktu yang sama karena akan mereplace 
// function terakhir dengan waktu yang sama 
// contoh red  dengan waktu 2 detik dan selanjutnya yellow dengan waktu yang sama yang muncul di brower adalah 
// kuning karena waktu yang di set sama 

// lalu bagaimana caranya supaya bisa menghitung waktu yang sama setelah waktu yang sebelumnya di jalankan 
// ===============================================================================

// bisa menggunakan neasted 
// walaupun waktu sama tetapi dia di dalam setTimeout lagi

// ini adalah callback hell yang dimana ada 1 function didalam function lalu ada lagi function lagi

//  cuma gara gara ingin menjalanakan 1 function jika berhasil maka lanjut lagi menjaalankan function lagi 

setTimeout(function(){
    document.body.style.backgroundColor = 'red';
        setTimeout(function(){
            document.body.style.backgroundColor = 'yellow';
            setTimeout(function(){
                document.body.style.backgroundColor = 'green';
                    setTimeout(function(){
                        document.body.style.backgroundColor = 'aqua';
                    },2000)
            },2000)
            
        },2000);
},2000);



// contoh meminta data ke server
// call back hell 

// sebenarnya didalam javascript ada yang lebih mudah lagi memanggil function di dalam function
// disebut sebagai 'promise'


searchMovieApi('naruto', function(movies){
    saveToMyDb(movies, function(){
        // kalau berhasil kita letak (simpan)
    },
        ()=>{
            // kalau gagal dicoba lagi
        })
}, ()=>{
    // kalau misal server error coba lagi
})