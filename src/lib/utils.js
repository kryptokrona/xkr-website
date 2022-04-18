export function numberWithCommas(numbers) {
    return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}