var a=null;
var b=null;
var operator=null;

const display = document.querySelector('#display');
const input = document.createElement('p');
const btn = document.querySelectorAll('.btn');
const funcbtns = document.querySelectorAll('.funcbtn');
const operatorBtn = document.querySelectorAll('.btnOperator');
const equalsTo = document.querySelector('.btnEqualsTo');
const btnDec = document.querySelector('.btnDec');

input.style.cssText = ('font-size:3vw; margin-right:1vw; margin-top:2vw;');


btn.forEach((button)=>{
        button.addEventListener('click',() => {
            input.textContent += button.id;
            var key = button.id;
            getOperands(key);    
        });
});

 
funcbtns.forEach((button)=>{
    button.addEventListener('click', ()=>{
        if(button.id=='reset')
        {
            reset();
        }
        else
        {
            backspace();
        }
    });
});

btnDec.addEventListener('click',()=>{
    if((a!=null) && (operator == null))
    {
        if(checkDec(a))
        {
            a += '.';
            input.textContent = a;         
        }
    }
    else if(a==null)
    {
        a = '0.'
        input.textContent = a;
    }
    else
    {
        if(b==null)
        {
            b = '0.'
            input.textContent = b;
        }
        else
        {
            if(checkDec(b))
            {
                b += '.';
                input.textContent = b;
            }                         
        }
    }    
}); 

operatorBtn.forEach((button)=>{
    button.addEventListener('click',()=>{
        if((operator!=null)&&(b!=null))
        {
            var prevOperator = operator;
            evaluate(prevOperator);
            operator = button.id;
        }        
        else
        {
            operator = button.id;
            input.textContent = '';
        }
    })
})

equalsTo.addEventListener('click',()=>{
    if(b!=null)
    {
        evaluate(operator);
        operator=null;    
    }
})  



function evaluate(operator)
{
    var result;
    if(operator=='+')
    {
        result = parseFloat(a) + parseFloat(b);
        input.textContent = result;
        a = result;
        b = null;
    }    
    else if(operator=='-')
    {
        result = parseFloat(a) - parseFloat(b);
        input.textContent = result;
        a = result;
        b = null;
    }
    if(operator=='/')
    {
        result = parseFloat(a) / parseFloat(b);
        input.textContent = result;
        a =result;
        b=null;
    } 
    if(operator=='x')
    {
        result = parseFloat(a) * parseFloat(b);
        input.textContent = result;
        a = result;
        b=null;
    }
}

function getOperands(key)
{
    if(a==null)
    {
        a=key;
        input.textContent = a;
    }
    else if((a!=null) && (operator==null))
    {
        a+=key;
        input.textContent = a;
    }
    else
    {
        if(b==null)
        {
            input.textContent='';
            b=key;
            input.textContent=b;
        }
        else
        {
            input.textContent='';
            b+=key;
            input.textContent=b;
        }
    }
}

function backspace()
{
    var newB = '';
    if (a!=null && operator!=null)
    {
        if (b.length==1)
        {
            b=null
        }
        else
        {
            for(i=0;i<=b.length-2;i++)
            {
                newB+=b[i]
            }
            b=newB;        
        }
        input.textContent=b;    
    }
    else
    {
        if(a.length==1)
        {
            a=null
        }
        else
        {
            for(i=0;i<=a.length-2;i++)
            {
                newB+=a[i]
            }
            a=newB;
        }
        input.textContent=a;    
    }
    
}

function reset()
{
    a = null;
    b = null;
    operator= null;
    input.textContent='';
}

function checkDec(dec)
{
    for(var i=0;i<=dec.length-1;i++)
    {
        if(dec[i]=='.')
        {
            return false; 
        }
    }
    return true;
}

display.append(input);
