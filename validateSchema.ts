import Ajv from "https://esm.sh/ajv@8.16.0";
import addFormats from "https://esm.sh/ajv-formats@3.0.1";
import data from "./biome.json" with { type: "json" };

const response = await fetch(data.$schema);
const schema = await response.json();

const ajv = new Ajv({ strict: false });
addFormats(ajv);

ajv.addFormat("uint8", {
  type: "integer",
  validate: (data: unknown) =>
    typeof data === "number" &&
    Number.isInteger(data) &&
    data >= 0 &&
    data <= 255,
});

ajv.addFormat("uint16", {
  type: "number",
  validate: (data: unknown) =>
    typeof data === "number" &&
    Number.isInteger(data) &&
    data >= 0 &&
    data <= 65535,
});

ajv.addFormat("uint64", {
  type: "number",
  validate: (data: unknown) =>
    typeof data === "number" &&
    Number.isInteger(data) &&
    data >= 0 &&
    data <= 18446744073709551615n,
});

const validate = ajv.compile(schema);

const valid = validate(data);

if (valid) {
  console.info("Data is valid!");
} else {
  console.error("Data is invalid:", validate.errors);
}
