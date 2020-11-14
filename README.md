# Portfolio
[Till portfolion](https://www.webb01.se/webb01_projekt/portfolio/index.html)
## Automatiseringsprocess:
Portfolion innehåller förrutom webbplatser jag byggt data över 
utbildning och CV. Den konsumerar en webbtjänst där datan ligger.

## Paket
**NPM-paket som används:**

* **Gulp-Concat**  
Slår samman filer. Perfekt att exempelvis slå samman alla JavaScript-filer man har i utvecklingsläget till en JavaScript-fil som används för den puplika versionen. 
* **Gulp uglify**  
Minifierar JavaScript filer, tar bort kommentarer och alla radbrytningar osv och gör filen så liten som möjligt. 
* **Autoprefixers**  
Adderar eller tar bort vendor prefixes som -webkit eller -moz. Det gör den genom att kontrollera support för olika css-funktioner för de olika webbläsarna på caniuse.com. Caniuse.com har den mest uppdaterade datan över detta. 
* **Gulp sourcemap**  
Gör det möjligt att för de sammanslagna filerna ändå se fårn vilken urspiurngsfil en viss del av koden härstammar från.
* **Gulp cleanCSS**  
Minifierar CSS-filer
* **BrowserSync**  
Synkroniserar ändringar man gör så att webbläsaren ser dem utan att man behöver uppdatera i exempelvis kommandocentralen och uppdatera webbläsaren.
* **Gulp imagemin**  
Minifierar gif, jpg, png och svg bilder genom komprimering.
* **Gulp htmlmin**  
Minifierar html-filer. Jag har ställt så den plockar bort kommentarer, men låter resten vara.
* **Gulp Sass**  
Kompilerar sasskod till css, samt minifierar kod.
* **npm Sass**  
Biblotek som behövs för att automatiskt kunna kompila kod sasskod till css.
* **"@babel/core**  
Transpilerar kod från ES6 -> ES5.

