function decode(message) {
	// Empezamos buscando el último paréntesis del String
  const openingParenthesisIndex = message.lastIndexOf('(');
  if (openingParenthesisIndex === -1) {
  	// Condición de parada, ya no quedan paréntesis
  	return message;
  } else {
  	// Buscamos el cierre paréntesis que case con el que encontramos antes
    const closingParenthesisIndex = message.substring(openingParenthesisIndex).indexOf(')') + openingParenthesisIndex;
    const messageArr = [... message];
    // Revertimos lo que hay entre los paréntesis
    const reversedSubstring = messageArr.slice(openingParenthesisIndex + 1, closingParenthesisIndex).reverse().join('');
    messageArr.splice(openingParenthesisIndex + 1, reversedSubstring.length, reversedSubstring);
    // Eliminamos los paréntesis de la subcadena
    messageArr.splice(messageArr.slice(messageArr.lastIndexOf('(')).indexOf(')') + messageArr.lastIndexOf('('), 1);
    messageArr.splice(messageArr.lastIndexOf('('), 1);
    message = messageArr.join('');
    return decode(message);
  }
}