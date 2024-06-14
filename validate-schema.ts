import addFormats from "https://esm.sh/ajv-formats@3.0.1";
import Ajv from "https://esm.sh/ajv@8.12.0";
import data from "./biome.json" with { type: "json" };

const response = await fetch(data.$schema);
const schema = await response.json();

const ajv = new Ajv({ strict: false });
addFormats(ajv);

const isUintN = (n: number) => (data: unknown) =>
  typeof data === "number" &&
  Number.isSafeInteger(data) &&
  0 <= data &&
  data < 2 ** n;

ajv.addFormat("uint8", { type: "number", validate: isUintN(8) });
ajv.addFormat("uint16", { type: "number", validate: isUintN(16) });
// Ignore uint64 (for files.maxSize rule)
ajv.addFormat("uint64", { type: "number", validate: () => true });

const validate = ajv.compile(schema);

const valid = validate(data);

if (valid) {
  console.info("Data is valid!");
} else {
  console.error("Data is invalid:", validate.errors);
  Deno.exit(1);
}
