// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/

function dosyaAdiniBul(path) {
  let lastIndexOfSlash = path.lastIndexOf('/');
  return path.slice(lastIndexOfSlash+1);

  let splittedPath = path.pslit('/');
  return splittedPath.at(-1) // gets last index of an array // cozum 1
}

/*
function dosyaAdiniBul(path) {
  //return path.slice(path.lastIndexOf('/')+1);           // cozum 2
  return path.split('/')[path.split('/').length -1 ];     // cozum 3
}
*/


/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104
*/

function ortalamaBul(arr) {
  let total = 0;
  let result = 0;
  if (arr.length == 0){
    return null;
  }
  total = arr.reduce((acc,x) => {
    acc = acc + x;
    return acc; 
  }, 0);
  result = total / arr.length;
  console.log(result);
  return result;
}
console.log(ortalamaBul([50, -26, 153, 7]));      // 33:22'de kaldım

/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/

function ortalamadanBuyukleriBul(arr, cb) {
  let ortalama = cb(arr);
  let result = [];
  if (arr.length == 0){
    return null;
  }
  /*
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= ortalama) {
      result.push(arr[i]);
    }
  }
  return result;
*/
return arr.filter(x => x >= ortalama);    // tek satır olarak bu şekilde yazılabilir ancak .filter() yavaş çalışır. Comment içerisindeki code daha performanslı çalışır. 
}

/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
