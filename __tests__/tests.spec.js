/* PRIMERA PARTE: En esta sección deberéis crear las variables necesarias para hacer pasar los tests. 
Fíjate en el "expect": son las expectativas de nuestro test, es decir, lo que nuestro test busca para poder pasar. 
Para lanzar los tests, colócate en la carpeta "__tests__" desde el terminal, y ejecuta el comando "npm test". */

describe("Variables en JavaScript", () => {
    test("Pueden contener strings", () => {
        // Escribe aquí tu código para hacer pasar el "expect" del test
        let a = "Hello!";
        let b = "Estamos en Femtech";
        expect(a).toEqual("Hello!");
        expect(b).toEqual("Estamos en Femtech");
    })

    test("Pueden contener números", () => {
        // Escribe aquí tu código
        let c = 2;
        let d = 1498;
        expect(c).toEqual(2);
        expect(d).toEqual(1498);
    })

    test("Pueden contener booleanos", () => {
        // Escribe aquí tu código
        let e = true;
        let f = false;
        expect(e).toEqual(true);
        expect(f).toEqual(false);
    })

    test("Pueden contener decimales", () => {
        // Escribe aquí tu código
        let g = 1.45;
        let h = 45.99999;
        expect(g).toEqual(1.45);
        expect(h).toEqual(45.99999);
    })
})


// SEGUNDA PARTE: En esta sección deberéis crear dos variables por cada test para hacer pasar los tests.

describe("Operaciones aritméticas en JavaScript", () => {
    test("Suma", () => {
        // Escribe aquí tu código
        let i = 40;
        let j = 60;
        console.log(i+j);
        expect(i+j).toEqual(100);
    })

    test("Resta", () => {
        // Escribe aquí tu código
        let k = 11;
        let l = 1;
        console.log(k-l);
        expect(k-l).toEqual(10);
    })

    test("Multiplicación", () => {
        // Escribe aquí tu código
        let m = 6;
        let n = 1;
        console.log(m*n);
        expect(m*n).toEqual(6);
    })

    test("División", () => {
        // Escribe aquí tu código
        let o = 6;
        let p = 2;
        console.log(o/p);
        expect(o/p).toEqual(3);
    })

    test("Módulo: Investiga qué es el operador módulo (%) en JavaScript para resolver este test", () => {
        // Escribe aquí tu código
        let q = 8;
        let r = 2;
        let s = 9;
        console.log(q%r);
        console.log(s%r);
        expect(q % r).toEqual(0);
        expect(s % r).toEqual(1);
    })
})


// TERCERA PARTE: A partir de aquí, se nos complica un poco la tarea. Analiza bien qué pide cada test para saber qué variables debes crear y cómo.

describe("Comparaciones en JavaScript", () => {
    test("Usando el comparador de igualdad ===", () => {
        const number = 20;
        // Escribe aquí tu código
        let expression = number === 8;
        expect(expression).toEqual(false);
    })

    test("Usando el comparador de diferencia !==", () => {
        const language = "JavaScript";
        // Escribe aquí tu código
        let expression = language !== "JavaScript";
        expect(expression).toEqual(false);
    })
})

describe("Álgebra booleana", () => {
    test("Usando el operador AND (&&)", () => {
        // Escribe aquí tu código
        let a = true;
        let b = true;
        const expression = a && b;
    
        expect(expression).toEqual(true);
    })

    test("Usando el operador OR (||)", () => {
        // Escribe aquí tu código
        let c = false;
        let d = false;
        const expression = c || d;

        expect(expression).toEqual(false);
    })
})


// CUARTA PARTE: Pongamos en práctica todo lo aprendido hasta ahora

describe("Operaciones con JavaScript", () => {
    test("Completa las variables que faltan para pasar los tests, ¡toca darle al coco!", () => {
        // Escribe aquí tu código
        let a = 6;
        let b = 5;
        let c = 2;
        console.log(a+b);
        console.log(b+c);
        console.log(a*c);
        expect(a+b).toEqual(11);
        expect(b+c).toEqual(7);
        expect(a*c).toEqual(12);
    })

    test("Completa las variables que faltan para pasar los tests", () => {
        // Escribe aquí tu código
        let d = 11;
        let e = 2;
        let f = 20;
        console.log(d*e);
        console.log(e*f);
        expect(d*e).toEqual(22);
        expect(e*f).toEqual(40);
    })

    test("Completa las variables que faltan para pasar los tests", () => {
        // Escribe aquí tu código
        let a = 10;
        let b = 100;
        let c = undefined;
        let d = "Hello";
        let e = "Elena";
        expect(a > 9).toBe(true);
        expect(a < 11).toBe(true);
        expect(b === 100).toBe(true);
        expect(c !== undefined).toBe(false);
        expect(d !== "Hello").toBe(false);
        expect(e.startsWith("E")).toBe(true);
    })
})