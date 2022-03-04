const config = require("./config/meta.json");
const GM3Compat = config.GM3Compat ? true : false;
const commenter = (key: string, value: string) => {
  return `// @${key.trim().replace(/[\n\t\r]/g, "")} ${value
    .trim()
    .replace(/[\n\t\r]/g, "")}`;
};

export default function generateHeader() {
  let comment: string[] = [];
  comment.push("// ==UserScript==");

  for (const key of Object.keys(config)) {
    if (key === "GM3Compat") continue;

    let value = config[key];
    if (!value) continue;

    if (typeof value === "string") {
      comment.push(commenter(key, value));
    } else if (typeof value === "boolean") {
      comment.push(commenter(key, ""));
    } else if (Array.isArray(value)) {
      if (key === "grant") {
        for (const v of value) {
          if (v === "unsafeWindow") {
            comment.push(commenter("grant", "unsafeWindow"));
          } else {
            comment.push(commenter("grant", "GM." + v));
            if (GM3Compat) {
              comment.push(commenter("grant", "GM_" + v));
            }
          }
        }
      } else {
        for (const v of value) {
          comment.push(commenter(key, v));
        }
      }
    }
  }
  comment.push("// ==/UserScript==\n\n");
  return comment.join("\n")
}