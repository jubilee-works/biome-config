# Common Settings for TimeTree's Biome

[![JSR](https://jsr.io/badges/@timetree/biome-config)](https://jsr.io/@timetree/biome-config)

## Installation Steps

### 1. Install the Configuration File

Refer to https://jsr.io/@timetree/biome-config for installation instructions.
For example:

- pnpm: `pnpm add jsr:@timetree/biome-config`
- yarn: `yarn add jsr:@timetree/biome-config`
- npm: `npx jsr add @timetree/biome-config`

### 2. Extend biome.json

In the biome.json file of each project, add the following:
```json
{
  "extends": [
    "@timetree/biome-config"
  ],
  ...
}
```

### 3. Override Settings According to the Project

For information on how to set overrides, refer to:
https://biomejs.dev/ja/reference/configuration/#overrides
