import {HST} from '../src/HST.js'

let oHst = new HST();

it('calculates HST for Ontario', ()=>{
    expect(1.30).toBe(oHst.calculate(10));
});

it('calculates HST for Alberta', () =>{
    expect(0.50).toBe(oHst.calculate(10, 'AB'));
});

it('calculates HST for Manitoba', () =>{
    expect(1.3).toBe(oHst.calculate(10, 'MB'));
});