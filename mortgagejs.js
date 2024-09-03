document.getElementById('calculate').addEventListener('click',calculator);
var repayment=document.getElementById('re-payment');
var interest=document.getElementById('interest');

function calculator(){
    let M=0;
    let p=parseFloat(document.getElementById('mortgage-amount').value);
    let y=parseFloat(document.getElementById('year').value);
    let i=parseFloat(document.getElementById('percentage').value);
    if(p==='' || isNaN(p)){
        document.getElementById('error1').innerHTML="This field is required";
        document.getElementById('mortgage-amount').style.border='2px solid red';
        const icons = document.getElementsByClassName('fas');
        for (let i = 0; i < icons.length; i++) {
            icons[i].style.backgroundColor = 'red';
            icons[i].style.border="2px solid red";
            icons[i].style.color = 'white';
        }
        return;
    }else if(y==='' || isNaN(y)){
        document.getElementById('error2').innerHTML="This field is required";
        document.getElementById('year').style.border='2px solid red';
        document.getElementById('symbol1').style.backgroundColor='red';
        document.getElementById('symbol1').style.color='white';
        
        return;
    }
    else if(i==='' || isNaN(i)){
        document.getElementById('error3').innerHTML="This field is required";
        document.getElementById('percentage').style.border='2px solid red';
        document.getElementById('symbol2').style.backgroundColor='red';
        document.getElementById('symbol2').style.color='white';
        
        return;
    }
    else if(!repayment.checked && !interest.checked){
        document.getElementById('error4').innerHTML="This field is required";
    }
    else if( document.getElementById('re-payment').checked){
        const resultsImages = document.getElementsByClassName('results-image');
    
    // Iterate over the collection and add the 'd-none' class to each element
    for (let i = 0; i < resultsImages.length; i++) {
        resultsImages[i].classList.add('d-none');
    }
    const resultsDeclaredElements = document.getElementsByClassName('results-declared');
    
    for (let i = 0; i < resultsDeclaredElements.length; i++) {
        resultsDeclaredElements[i].classList.remove('d-none');
        resultsDeclaredElements[i].classList.add('d-block');
    }
        i=i/100/12
        y=y*12
        let M = p * i * Math.pow(1 + i, y)/(Math.pow(1 +i,y)-1)
        M=M.toFixed(5)
        document.querySelector('#result').innerText = '£'+M;
        document.getElementById('totalres').innerText = '£'+M*y;
    } else if(document.getElementById('interest').checked){
        const resultsImages = document.getElementsByClassName('results-image');
    
        // Iterate over the collection and add the 'd-none' class to each element
        for (let i = 0; i < resultsImages.length; i++) {
            resultsImages[i].classList.add('d-none');
        }
        const resultsDeclaredElements = document.getElementsByClassName('results-declared');
        
        for (let i = 0; i < resultsDeclaredElements.length; i++) {
            resultsDeclaredElements[i].classList.remove('d-none');
            resultsDeclaredElements[i].classList.add('d-block');
        }
        M=p*(i/(100*12))
        M=M.toFixed(5)
        document.querySelector('#result').innerText = '£'+M;
        document.getElementById('totalres').innerText = '£'+M*y;
    }
}
document.getElementById('clear').addEventListener('click', erase)
function erase() {
    document.getElementById('mortgage-amount').value='';
    document.getElementById('year').value='';
    document.getElementById('percentage').value='';
    document.querySelector('#result').innerText = 'Result';
    document.getElementById('totalres').innerText = ' ';
    const resultsImages = document.getElementsByClassName('results-image');
    
    // Iterate over the collection and add the 'd-none' class to each element
    for (let i = 0; i < resultsImages.length; i++) {
        resultsImages[i].classList.add('d-flex');
    }
    const resultsDeclaredElements = document.getElementsByClassName('results-declared');
    
    for (let i = 0; i < resultsDeclaredElements.length; i++) {
        resultsDeclaredElements[i].classList.remove('d-block');
        resultsDeclaredElements[i].classList.add('d-none');
    }

}
