import { equal, ifError } from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import { unlinkSync, writeFileSync } from "node:fs";
import { leerArchivos } from "./index.js";
import { readFile } from "node:fs/promises";

describe('4. leerArchivos', () => {
    it('4.1 leerArchivos', async () => {
        const mensaje = await leerArchivos()
        equal(mensaje, 'hola que tal')
    })
} )