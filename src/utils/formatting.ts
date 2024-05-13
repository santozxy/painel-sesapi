export function formatProcessNumber(input: string) {
  // Formatar o número parcialmente conforme o usuário digita
  const numericValue = input.replace(/[\D\s]/g, "");
  let formattedValue = "";
  if (numericValue.length >= 5) {
    formattedValue += numericValue.slice(0, 5) + ".";
  }
  if (numericValue.length >= 11) {
    formattedValue += numericValue.slice(5, 11) + "/";
  }
  if (numericValue.length >= 15) {
    formattedValue += numericValue.slice(11, 15) + "-";
  }
  if (numericValue.length >= 17) {
    formattedValue += numericValue.slice(15, 17);
  }
  return formattedValue;
}
