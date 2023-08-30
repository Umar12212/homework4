do{
    var a = +prompt('Введите число')
}while (isNaN(a) || a < 1)
do{
    var b = +prompt('Введите степень')
}while (isNaN(b) || b < 1) {
    alert((a ** b))
}
