import Ajv from "https://esm.sh/ajv@8.12.0";
import addFormats from "https://esm.sh/ajv-formats@3.0.1";
import data from "./biome.json" with { type: "json" };

const response = await fetch(data.$schema);
const schema = await response.json();

const ajv = new Ajv({ strict: false });
addFormats(ajv);

const isUint8 = (data: unknown): boolean => {
  return (
    typeof data === "number" &&
    Number.isSafeInteger(data) &&
    data >= 0 &&
    data <= 255
  );
};
const isUint16 = (data: unknown): boolean =>
  typeof data === "number" &&
  Number.isSafeInteger(data) &&
  data >= 0 &&
  data <= 65535;

ajv.addFormat("uint8", {
  type: "number",
  validate: isUint8,
});
ajv.addFormat("uint16", {
  type: "number",
  validate: isUint16,
});

const validate = ajv.compile(schema);

const valid = validate(data);

if (valid) {
  console.info("Data is valid!");
} else {
  console.error("Data is invalid:", validate.errors);
  Deno.exit(1);
}
