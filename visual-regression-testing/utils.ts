import path from "path";

export const dirname = import.meta.dirname;

export const resolve = (p: string) => path.resolve(dirname, p);
