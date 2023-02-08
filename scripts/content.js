// Uzantılar, bir sayfanın içeriğini okuyan
// ve değiştiren komut dosyalarını çalıştırabilir.
// Bunlara içerik komut dosyaları denir .
// Yalıtılmış bir dünyada yaşarlar , yani ana sayfalarıyla veya
// diğer uzantıların içerik komut dosyalarıyla çakışmadan
// JavaScript ortamlarında değişiklik yapabilirler

// Alan "matches", bir veya daha fazla eşleşme modeline sahip olabilir . Bunlar, tarayıcının içerik komut dosyalarını hangi sitelere enjekte edeceğini belirlemesine olanak tanır. Maç kalıpları üç bölümden oluşur <scheme>://<host><path>. *' ' karakterleri içerebilirler .

// const article = document.querySelector("article");

// // `document.querySelector` may return null if the selector doesn't match anything.
// if (article) {
//   const text = article.textContent;
//   const wordMatchRegExp = /[^\s]+/g; // Regular expression
//   const words = text.matchAll(wordMatchRegExp);
//   // matchAll returns an iterator, convert to array to get word count
//   const wordCount = [...words].length;
//   const readingTime = Math.round(wordCount / 200);
//   const badge = document.createElement("p");
//   // Use the same styling as the publish information in an article's header
//   badge.classList.add("color-secondary-text", "type--caption");
//   badge.textContent = `⏱️ ${readingTime} min read`;

//   // Support for API reference docs
//   const heading = article.querySelector("h1");
//   // Support for article docs with date
//   const date = article.querySelector("time")?.parentNode;

//   (date ?? heading).insertAdjacentElement("afterend", badge);
// }




console.log("KOLPA ONDER")


var makale = document.getElementById("post-body-2757575480714868227").innerText


var kelimeler = [];

kelimeler=makale.split(" ");



var kelimeSayisi=kelimeler.length
console.log(kelimeSayisi)



var element= document.createElement("h2")
element.innerText= "⏱️BU SAYFAYI OKUMA SÜRESİ "+(kelimeSayisi*0.3)
document.body.appendChild(element);
