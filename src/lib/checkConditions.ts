import {
  noSpace,
  useSmallWords,
  minimumTwoWords,
  onlyOneWord,
} from "../utils/conditions";
import { Message } from "discord.js";

export function checkConditions(msg: Message, message: string) {
  const dash: RegExp = new RegExp("_", "g");
  const msgCount: number = (message.match(dash) || []).length;
  const space: boolean = message.includes(" ");

  switch (true) {
    case space:
      noSpace(msg);
      return false;

    case message.length > 10:
      useSmallWords(msg);
      return false;

    case message.length < 2:
      minimumTwoWords(msg);
      return false;

    case msgCount > 1:
      onlyOneWord(msg);
      return false;

    default:
      break;
  }
  return true;
}
