function manufacture(gifts, materials) {
  return gifts.filter(gift => {
    let valid = true;
    for (const char of gift) {
      if (!materials.includes(char)) {
        valid = false;
        break;
      }
    }
    return valid;
  });
}