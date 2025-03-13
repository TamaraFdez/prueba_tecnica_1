import { obtenerDatosPromesa } from "./index.js";
import { equal, ifError } from "node:assert/strict";
import { describe, it } from "node:test";

describe('2. obtenerDatosPromesa', ()=>{
    it('2.1. obtenerDatosPromesa', async ()=>{
        const { data } = await obtenerDatosPromesa({ time: 1 })
        equal(data, 'datos importantes')
    })
})
