function checkNum (value) {
    return  typeof value === 'number' && !isNaN(value)  ? new Date : "Неверный тип данных"
}