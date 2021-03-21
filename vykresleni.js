document.write("<div>")
for (let i = 0; i < 4; i++) {
    for (let l = 0; l < 8; l++) {
        if (l % 2 === 0) {
            document.write("<img src='whitesquare.png' width='96' height='96'>")
        } else {
            document.write("<img src='blacksquare.png' width='96' height='96'>")
        }
    }
    document.write("<br>")
    for (let l = 0; l < 8; l++) {
        if (l % 2 === 0) {
            document.write("<img src='blacksquare.png' width='96' height='96'>")
        } else {
            document.write("<img src='whitesquare.png' width='96' height='96'>")
        }
    }
    document.write("<br>")
}
document.write("</div>")