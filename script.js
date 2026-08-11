var loginform = document.querySelector('#loginform')
var errormsg = document.querySelector('#errormsg')

errormsg.style.display='none'

loginform.addEventListener('submit',(event)=>{
    event.preventDefault()
    const formData = new FormData(loginform)
    let username = formData.get('username')
    let password = formData.get('password')
    if(username==='ashleshap313@gmail.com'&& password==='Ashu@1234'){
        errormsg.style.display='block'
        errormsg.innerHTML='Login successfull !!'
        errormsg.setAttribute('class','.')
        errormsg.classList.add('success')
    }else{
       errormsg.style.display='block'
        errormsg.innerHTML='Login failed !!'
        errormsg.setAttribute('class','.')
        errormsg.classList.add('success')  
    }
})