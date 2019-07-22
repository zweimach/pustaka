/**
 * Library Testing
 */
const KalenderJawaLib = require('../../lib/kalenderjawa-2d6051b7fb0da7107ecc-bundle.js')

const _TESTOBJ = {
  taun: { taun: 'wawu', neptu: 6, urutan: 7 },
  kurup: {
    taun: 'alip',
    dinten: { dino: 'selasa', urutan: 2 },
    pasaran: { pasaran: 'pon', neptu: 7, urutan: 3 }
  },
  awal: [
    1873, 1881, 1889,
    1897, 1905, 1913,
    1921, 1929, 1937,
    1953, 1961, 1969,
    1977, 1985
  ]
}

describe("Library Testing", () => {
  test("cariTaunSengkala", async () => {
    await expect(KalenderJawaLib.cariTaunSengkala(1881)).resolves.toMatchObject(_TESTOBJ)
  })
})