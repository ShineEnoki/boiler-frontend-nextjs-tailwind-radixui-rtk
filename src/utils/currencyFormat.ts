export function CurrencyFormat(num: number): string {
  const formattedNumber = num?.toFixed(2);
  return (
    formattedNumber?.endsWith('.00') ? formattedNumber.slice(0, -3) : formattedNumber
  ).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
