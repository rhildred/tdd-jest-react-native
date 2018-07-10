
import fetch from 'node-fetch';

it("works with async", () =>{
    expect.assertions(1);
    fetch('https://rnhprog81102018.firebaseio.com/test.json')
    .then((oData) => {
        oData.json().then((data) => {
          if (data) {
              console.log(data);
            expect("It works").toBe(data);
          }
        }).catch((err) => {
          console.log(err);
          expect("It failed").toBe(err);
        });
    });
});