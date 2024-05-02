export const capitalizeFirstLetter = (string: string): String => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const preparePokemonIdForDisplay = (identifier: string): String => {
  const idAsNumber = parseInt(identifier);

  if (typeof idAsNumber !== "number") {
    throw new Error(
      "Pokemon ID must be number or can be convertable to number"
    );
  }
  return ["#", "0".repeat(4 - identifier.length), identifier].join("");
};

export const stripIdentifierFromUrl = (url: string): string => {
  return url.split("/")[url.split("/").length - 2];
};
