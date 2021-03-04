/**
 *  Added for Typescript import warnings for other extensins
 *  .ts or .tsx
 */

declare module "*.json" {
  const foo: any;
  export default foo;
}

declare module "strings.json" {
  const stringDBRecord: Record<string, string | undefined>;
  export default stringDBRecord;
}

declare module "*.css" {
  const foo: any;
  export default foo;
}

declare module "*.svg" {
  const image: string;
  export default image;
}

declare module "*.png" {
  const image: string;
  export default image;
}

declare module "*.jpg" {
  const image: string;
  export default image;
}

declare module "*.jpeg" {
  const image: string;
  export default image;
}
