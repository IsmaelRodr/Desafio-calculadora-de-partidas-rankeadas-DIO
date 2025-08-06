let vitorias = 100;
let derrotas = 45;
const saldoVitorias = calcularSaldoVitorias(vitorias,derrotas);
const rank = classificarRank(saldoVitorias);

function calcularSaldoVitorias(vitorias,derrotas){
    return vitorias - derrotas;
}

function classificarRank(saldoVitorias){
    const isFerro = saldoVitorias < 10;
    const isBronze = saldoVitorias >= 11 && saldoVitorias <= 20;
    const isPrata = saldoVitorias >= 21 && saldoVitorias <= 50;
    const isOuro = saldoVitorias >= 51 && saldoVitorias <= 80;
    const isDiamante = saldoVitorias >= 81 && saldoVitorias <= 90;
    const isLendario = saldoVitorias >= 91 && saldoVitorias <= 100;
    const isImortal = saldoVitorias >= 101;

    if(isFerro){
        return 'Ferro';
    }

    if(isBronze){
        return 'Bronze';
    }

    if(isPrata){
        return 'Prata';
    }

    if(isOuro){
        return 'Ouro';
    }

    if(isDiamante){
        return 'Diamante';
    }

    if(isLendario){
        return 'Lendário';
    }

    if(isImortal){
        return 'Imortal';
    }
}

console.log(`O Herói tem saldo de ${saldoVitorias} vitórias e está no nível de ${rank}!`);