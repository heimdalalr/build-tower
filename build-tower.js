const buildTower = (n) => [...Array(n)].map((e,i)=>" ".repeat(n-i-1)+"*".repeat(i*2+1)+" ".repeat(n-i-1));

function log(num) {

    const tower = buildTower(num);

    for (let i=0; i<tower.length; i++) {
        console.log(tower[i]);
    }

}

log(15);