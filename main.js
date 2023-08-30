do{
    let firstNUM = +prompt('Введите число')
}while (isNaN(firstNUM) || firstNUM < 1)
do{
    let secondNUM = +prompt('Введите степень')
}while (isNaN(secondNUM) || secondNUM < 1) {
    alert((firstNUM ** secondNUM))
}
