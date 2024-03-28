import { Clipboard, showHUD } from "@raycast/api";
import { generateBirthNumber } from "./generate-birth-number";

const randomBoolean = () => Math.random() < 0.5;

export default async function main() {
  const { birthNumber } = generateBirthNumber({ isFemale: randomBoolean() });
  await Clipboard.copy(birthNumber);
  await showHUD(`Birth number ${birthNumber} copied to clipboard`);
}
