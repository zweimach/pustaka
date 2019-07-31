/**
 * Testing with Jest
 */
import * as KalenderJawa from '../index.js'
import * as Romadon from '../rumus_apalan_awal_bulan_romadon_abadi.js'
import * as Sawal from '../rumus_apalan_awal_bulan_sawal_abadi.js'
import { SengkalaMap } from '../rupa_ati.js'
import { ANENHING } from '../kurup.js'

const _TESTDAT = {
  wulan: { wulan: 'romadon', celukan: 'don', urutan: 9 },
  taun: { taun: 'be', neptu: 2, urutan: 6 },
  rumus: {
    wulan: { wulan: 'romadon', celukan: 'don', urutan: 9 },
    dino: 7,
    pasaran: 4
  }
}

const _TESTDAT_2 = { i: { kurup: 'alip selasa pon', taun: 'be' }, kH: { dino: 'senen', urutan: 1 }, kP: { neptu: 5, pasaran: 'legi', urutan: 1 }, t: 1952, w: 'romadon' }

describe('Testing', () => {
  test('cariWulanRegistry', () => {
    expect((KalenderJawa.cariWulanRegistry('romadon')).celukan).toBe('don')
    expect(KalenderJawa.cariWulanRegistry('januari')).toBeNull()
  })

  test('cariTaunRegistry', () => {
    expect((KalenderJawa.cariTaunRegistry('be')).urutan).toBe(6)
    expect(KalenderJawa.cariTaunRegistry('kabisat')).toBeNull()
  })

  test('cariKurupTahunJawa', () => {
    return KalenderJawa.cariKurupTahunJawa(1994).then(r => {
      expect(r.taun.taun).toBe('jimakir')
      expect(r.kurup.pasaran).toBe(ANENHING.pasaran)
    }, e => {
      expect(e).toMatch('error')
    })
  })

  test('cariRumusWulanTaun', () => {
    expect(KalenderJawa.cariRumusWulanTaun('don_be').rumus.dino).toBe(7)
    expect(KalenderJawa.cariRumusWulanTaun('ora_ono')).toBeNull()
  })

  test('cariRumusAbadi', () => {
    return KalenderJawa.cariRumusAbadi('romadon', 1952).then(d => {
      expect(d.rumus.pasaran).toBe(4)
    })
  })

  test('konversiHariPasaran', async () => {
    const rumus = { dino: 2, pasaran: 3 }
    const { h, p } = await KalenderJawa.konversiHariPasaran(7, 4, rumus)
    expect(h.dino).toBe('senen')
    expect(p.pasaran).toBe('legi')
  })

  test('Rumus Map', () => {
    expect(SengkalaMap.get(Romadon._DON_ALIP).wulan.wulan).toBe('romadon')
  })

  test('cariHariAwalBulan', async () => {
    const x = await KalenderJawa.cariHariAwalBulan('romadon', 1952)
    expect(x.kH).toEqual({ dino: 'senen', urutan: 1 })
    expect(x.kP).toEqual({ pasaran: 'legi', neptu: 5, urutan: 1 })
  })

  test('cariHariPasaranAwalBulan', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('romadon', 1952)).resolves.toStrictEqual(_TESTDAT_2)
  })

  test('cariHariPasaranAwalBulan', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('dulkodah', 1881)).resolves.toStrictEqual(_TESTDAT_2)
  })

  test('cariHariPasaranAwalBulan', async () => {
    await expect(KalenderJawa.cariHariPasaranAwalBulanTahunJawa('dulkijah', 1981)).resolves.toStrictEqual(_TESTDAT_2)
  })
})
