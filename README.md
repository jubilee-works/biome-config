# Common Settings for TimeTree's Biome

## Installation Steps

### 1. Install the Configuration File

Refer to https://jsr.io/@timetree/biome-config for installation instructions.
For example, using pnpm: `pnpm dlx jsr add @timetree/biome-config`

### 2. Extend biome.json

In the biome.json file of each project, add the following:
```json
{
  "extends": [
      "./node_modules/@timetree/biome-config/biome.json"
  ],
  ...
}
```

### 3. Override Settings According to the Project

For information on how to set overrides, refer to:
https://biomejs.dev/ja/reference/configuration/#overrides

## List of Links

https://jsr.io/@timetree/biome-config
