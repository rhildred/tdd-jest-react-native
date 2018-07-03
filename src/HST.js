export class HST{
    calculate(nAmount, sProv = 'ON'){
        let nHst = nAmount *.13;
        switch(sProv){
            case 'AB':
                nHst = nAmount * .05;
                break;
        }
        return Number(nHst.toFixed(2));
    }
}