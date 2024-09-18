export const cpfMask = (value: string) => {
    return value
      .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  };
  
  export const processMask = (value: string) => {
    return value
      .replace(/\D/g, "") // Substitui qualquer caracter que não seja número por nada
      .replace(/(\d{5})(\d)/, "$1.$2") // Captura dois grupos de números, o primeiro de 5 e o segundo de 1, adiciona um ponto antes do segundo grupo
      .replace(/(\d{5}\.\d{5})(\d{4})(\d)/, "$1/$2-$3") // Adiciona a barra e o traço no formato correto
      .replace(/(-\d{2})\d+?$/, "$1"); // Captura 2 números seguidos de um traço e não deixa ser digitado mais nada
  };