
function printPin(){
    let xr= Math.round(Math.random() * 10000);
   // console.log(xr)
     return String(xr).length===4?xr:printPin();
    // let xrString= xr;
    // if(xrString.length==4){
    //     return xr;
    // }else{
    //     printPin();
    // }
}
// printPin();
function generatePin() {
    const pin = printPin();
    document.getElementById('pin').value = pin;
}


document.getElementById('number-btn').addEventListener('click',function (event) {
        const number=event.target.innerText;
        const inputNumber=document.getElementById('inputNumber');
        if(isNaN(number)){
            if(number=='C'){
                inputNumber.value='';
            }
        }
     else
        {
            const preValue=inputNumber.value;
            const newValue=preValue+number;
            inputNumber.value=newValue;
        }

});

function verifyPin(){
    const pin=document.getElementById('pin').value;
    const inputNumber=document.getElementById('inputNumber').value;
    const SuccessMessage=document.getElementById('doneSms');
    const failedSms=document.getElementById('failedSms');

    if(pin == inputNumber){
        SuccessMessage.style.display='block';
        failedSms.style.display='none';
    }else{
        failedSms.style.display='block';
        SuccessMessage.style.display='none';
    }
}
