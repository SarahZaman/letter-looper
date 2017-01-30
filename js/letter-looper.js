var letter;
var i;
var k;

while (!letter) {
    var letter = prompt("Enter a character.");
    
    for (i = 0; i < 10; i += 1) {
        for (k = 0; k < i; k += 1) {
        document.write(letter);    
        }
        
        document.write("<br>");
    }
}

