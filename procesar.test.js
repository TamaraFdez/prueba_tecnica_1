import { equal, ifError } from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import { unlinkSync, writeFileSync } from "node:fs";
import { procesarArchivo, procesarArchivoPromise } from "./index.js";
import { readFile } from "node:fs/promises";

describe("3. procesarArchivoPromise", () => {
  afterEach(() => {
    try {
      unlinkSync("output.txt");
    } catch {}
  });

  it("3.1 procesarArchivo", (t, done) => {
    writeFileSync("input.txt", "gogogo");
    procesarArchivo((err) => {
      ifError(err);
      readFile("output.txt", "utf8").then((contenido) => {
        equal(contenido, "GOGOGO");
        done();
      });
    });
  });

  it('3.1 procesarArchivoPromise', async () => { 
    writeFileSync('input.txt', 'hola')
    await procesarArchivoPromise()
    const contenido = await readFile('output.txt', 'utf8')
    equal(contenido, 'HOLA')
  });
});
