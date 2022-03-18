/**
 * 숫자 가격 표시 (천단위 콤마)
 * @param  priceToString(number)
 */
export function priceToString(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
