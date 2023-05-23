export const getFullYear() {
	  const currentDate = new Date();
	  return currentDate.getFullYear();
}

export const getFooterCopy(isIndex) {
	if (isIndex == true) {
		return "Holberton School";
	}
	else if (isIndex == false) {
		return "Holberton School main dashboard";
	}
}
