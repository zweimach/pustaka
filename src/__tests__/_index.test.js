/**
 * Testing Jest Yes!
 */
import * as DAT from './_data.js'
import * as KalenderJawa from '../index.js'
import { ANENHING } from '../kurup.js'

describe('Testing cariKurupTahunJawa', () => {
  test('cariKurupTahunJawa', () => {
    return KalenderJawa.cariKurupTahunJawa(1994).then(r => {
      expect(r.taun.taun).toBe('jimakir')
      expect(r.kurup.pasaran).toBe(ANENHING.pasaran)
    }, e => {
      expect(e).toMatch('error')
    })
  })
})

describe('Testing cariRumusAbadiAwalBulanTahunJawa', () => {
  test('cariRumusAbadi Romadon, 1952 ', () => {
    return KalenderJawa.cariRumusAbadiAwalBulanTahunJawa('romadon', 1952).then(d => {
      expect(d.rumus.pasaran).toBe(4)
    })
  })

  test('Test Jumlah Hari di Dulkijah (29), 1952 (Tahun Be)', () => {
    return KalenderJawa.cariRumusAbadiAwalBulanTahunJawa('dulkijah', 1952).then(d => {
      expect(d.wulan.cacah).toStrictEqual([29])
    })
  })

  test('cariRumusAbadi Mukarom, 1953', () => {
    return KalenderJawa.cariRumusAbadiAwalBulanTahunJawa('mukarom', 1953).then(d => {
      expect(d.rumus.dino).toBe(6)
    })
  })

  test('Test Jumlah Hari Dulkijah (30), 1911 (Tahun Dal)', () => {
    return KalenderJawa.cariRumusAbadiAwalBulanTahunJawa('dulkijah', 1911).then(d => {
      expect(d.wulan.cacah).toStrictEqual([30])
    })
  })
})

describe('Testing cariHariPasaranAwalBulanTahunJawa', () => {
  test('cariHariPasaranAwalBulan', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('romadon', 1952)).resolves.toStrictEqual(DAT.TESTDAT2)
  })

  test('cariHariPasaranAwalBulan', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('dulkodah', 1881)).resolves.toStrictEqual(DAT.TESTDAT3)
  })

  test('cariHariPasaranAwalBulan', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('dulkijah', 1981)).resolves.toStrictEqual(DAT.TESTDAT4)
  })
})
