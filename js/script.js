document.getElementById('a1').addEventListener('click',a1);
document.getElementById('b2').addEventListener('click',b2);
document.getElementById('c3').addEventListener('click',c3);
document.getElementById('d4').addEventListener('click',d4);
document.getElementById('e5').addEventListener('click',e5);
document.getElementById('f6').addEventListener('click',f6);
document.getElementById('g7').addEventListener('click',g7);
document.getElementById('h8').addEventListener('click',h8);
document.getElementById('i9').addEventListener('click',i9);
document.getElementById('j0').addEventListener('click',j0);
document.getElementById('reset').addEventListener('click',reset);
document.getElementById('todas').addEventListener('click',todas);

function a1() {
    if(document.getElementById('letras').value == 'ABCDEFGHIJ'){
        let numeros = document.getElementById('numeros').value = '1';
    }else{
        let letras = document.getElementById('letras').value = 'A';
        document.getElementById('letras').value = letras
    }
}

function b2() {
    if(document.getElementById('letras').value == 'ABCDEFGHIJ'){
        if(document.getElementById('numeros').value == '1'){
            let numeros = document.getElementById('numeros').value = '12';
            document.getElementById('numeros').value = numeros
        }else{
            window.alert('Antes de ingresar el número 2, se debe de pulsar A-1')
        }
    }else{
        if(document.getElementById('letras').value == 'A'){
            let letras = document.getElementById('letras').value = 'AB';
            document.getElementById('letras').value = letras
        }else{
            window.alert('Antes de ingresar la letra B, se debe de pulsar la A')
        }
    }
}

function c3() {
    if(document.getElementById('letras').value == 'ABCDEFGHIJ'){
        if(document.getElementById('numeros').value == '12'){
            let numeros = document.getElementById('numeros').value = '123';
            document.getElementById('numeros').value = numeros
        }else{
            window.alert('Antes de ingresar el número 3, se debe realizar la secuencia 12')
        }
    }else{
        if(document.getElementById('letras').value == 'AB'){
            let letras = document.getElementById('letras').value = 'ABC';
            document.getElementById('letras').value = letras
        }else{
            window.alert('Antes de ingresar la letra C, se debe realizar la secuencia AB')
        }
    }
}

function d4() {
    if(document.getElementById('letras').value == 'ABCDEFGHIJ'){
        if(document.getElementById('numeros').value == '123'){
            let numeros = document.getElementById('numeros').value = '1234';
            document.getElementById('numeros').value = numeros
        }else{
            window.alert('Antes de ingresar el número 4, se debe realizar la secuencia 123')
        }
    }else{
        if(document.getElementById('letras').value == 'ABC'){
            let letras = document.getElementById('letras').value = 'ABCD';
            document.getElementById('letras').value = letras
        }else{
            window.alert('Antes de ingresar la letra D, se debe realizar la secuencia ABC')
        }
    }
}

function e5() {
    if(document.getElementById('letras').value == 'ABCDEFGHIJ'){
        if(document.getElementById('numeros').value == '1234'){
            let numeros = document.getElementById('numeros').value = '12345';
            document.getElementById('numeros').value = numeros
        }else{
            window.alert('Antes de ingresar el número 5, se debe realizar la secuencia 1234')
        }
    }else{
        if(document.getElementById('letras').value == 'ABCD'){
            let letras = document.getElementById('letras').value = 'ABCDE';
            document.getElementById('letras').value = letras
        }else{
            window.alert('Antes de ingresar la letra E, se debe realizar la secuencia ABCD')
        }
    }
}

function f6() {
    if(document.getElementById('letras').value == 'ABCDEFGHIJ'){
        if(document.getElementById('numeros').value == '12345'){
            let numeros = document.getElementById('numeros').value = '123456';
            document.getElementById('numeros').value = numeros
        }else{
            window.alert('Antes de ingresar el número 6, se debe realizar la secuencia 12345')
        }
    }else{
        if(document.getElementById('letras').value == 'ABCDE'){
            let letras = document.getElementById('letras').value = 'ABCDEF';
            document.getElementById('letras').value = letras
        }else{
            window.alert('Antes de ingresar la letra F, se debe realizar la secuencia ABCDE')
        }
    }
}

function g7() {
    if(document.getElementById('letras').value == 'ABCDEFGHIJ'){
        if(document.getElementById('numeros').value == '123456'){
            let numeros = document.getElementById('numeros').value = '1234567';
            document.getElementById('numeros').value = numeros
        }else{
            window.alert('Antes de ingresar el número 7, se debe realizar la secuencia 123456')
        }
    }else{
        if(document.getElementById('letras').value == 'ABCDEF'){
            let letras = document.getElementById('letras').value = 'ABCDEFG';
            document.getElementById('letras').value = letras
        }else{
            window.alert('Antes de ingresar la letra G, se debe de pulsar la ABCDEF')
        }
    }
}

function h8() {
    if(document.getElementById('letras').value == 'ABCDEFGHIJ'){
        if(document.getElementById('numeros').value == '1234567'){
            let numeros = document.getElementById('numeros').value = '12345678';
            document.getElementById('numeros').value = numeros
        }else{
            window.alert('Antes de ingresar el número 8, se debe realizar la secuencia 1234567')
        }
    }else{
        if(document.getElementById('letras').value == 'ABCDEFG'){
            let letras = document.getElementById('letras').value = 'ABCDEFGH';
            document.getElementById('letras').value = letras
        }else{
            window.alert('Antes de ingresar la letra H, se debe realizar la secuencia ABCDEFG')
        }
    }
}

function i9() {
    if(document.getElementById('letras').value == 'ABCDEFGHIJ'){
        if(document.getElementById('numeros').value == '12345678'){
            let numeros = document.getElementById('numeros').value = '123456789';
            document.getElementById('numeros').value = numeros
        }else{
            window.alert('Antes de ingresar el número 9, se debe realizar la secuencia 12345678')
        }
    }else{
        if(document.getElementById('letras').value == 'ABCDEFGH'){
            let letras = document.getElementById('letras').value = 'ABCDEFGHI';
            document.getElementById('letras').value = letras
        }else{
            window.alert('Antes de ingresar la letra I, se debe realizar la secuencia ABCDEFGH')
        }
    }
}

function j0() {
    if(document.getElementById('letras').value == 'ABCDEFGHIJ'){
        if(document.getElementById('numeros').value == '123456789'){
            let numeros = document.getElementById('numeros').value = '1234567890';
            document.getElementById('numeros').value = numeros
            window.alert('Bien hecho. Hicitse toda la secuencia!!! Se reiniciará el programa!!!')
            reset()
        }else{
            window.alert('Antes de ingresar el número 0, se debe realizar la secuencia 123456789')
        }
    }else{
        if(document.getElementById('letras').value == 'ABCDEFGHI'){
            let letras = document.getElementById('letras').value = 'ABCDEFGHIJ';
            document.getElementById('letras').value = letras
        }else{
            window.alert('Antes de ingresar la letra J, se debe de pulsar la ABCDEFGHI')
        }
    }
}

function reset() {
    document.getElementById('letras').value = '';
    document.getElementById('numeros').value = '';
}

function todas() {
    document.getElementById('letras').value = 'ABCDEFGHIJ';
}

//FUNCIONES TEMAS
let tema;

const dark = document.getElementById('dark')

dark.addEventListener('click', () => {
    let chequeado = document.getElementById('dark').checked;
    if(chequeado){
        document.getElementById('body').classList.add('dark')
        let btns = document.getElementsByClassName('btn')
            for(i = 0 ; i < btns.length; i++){
                btns[i].classList.add('btn-light')
            }        
        localStorage.setItem("tema", 'dark')
        let tema = localStorage.getItem('tema');
        console.log(tema)
    }else{
        document.getElementById('body').classList.remove('dark')
        localStorage.setItem("tema", 'light')
        let tema = localStorage.getItem('tema');
        console.log(tema)
    }
})

tema = localStorage.getItem('tema');
if (tema == "dark") {
    document.getElementById('body').classList.add('dark');
    document.getElementById('dark').checked = 1;
    let btns = document.getElementsByClassName('btn')
            for(i = 0 ; i < btns.length; i++){
                btns[i].classList.add('btn-light')
            }
} else {
    document.getElementById('body').classList.remove('dark');
}

//FUNCIONES RETRO

const retro = document.getElementById('retro')

retro.addEventListener('click', () => {
    let chequeado = document.getElementById('retro').checked;
    if(chequeado){
        document.getElementById('body').classList.add('retro')       
        localStorage.setItem("retro", 'on')
        let retro = localStorage.getItem('retro');
        console.log(retro)
    }else{
        document.getElementById('body').classList.remove('retro')
        localStorage.setItem("retro", 'off')
        let retro = localStorage.getItem('retro');
        console.log(tema)
    }
})

retroStorage = localStorage.getItem('retro');
if (retroStorage == "on") {
    document.getElementById('body').classList.add('retro');
    document.getElementById('retro').checked = 1;
} else {
    document.getElementById('body').classList.remove('retro');
}