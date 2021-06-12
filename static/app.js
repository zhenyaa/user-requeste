  const form = document.getElementById('formUserRequeste')
  const email = document.getElementById('exampleInputEmail')
  const p_number = document.getElementById('exampleInputPhone')
  const comment = document.getElementById('exampleInputComment')

function setEmailStatus(validStatus){
  if(validStatus === false){
        email.style.borderColor = 'red'
        if (!$('#emailBud').length){
          $('#exampleInputEmail').after('<span class="badge bg-danger" id="emailBud">Неверный адрес</span>')
        }
  }else{
      email.style.borderColor = 'grey'
    $('#emailBud').remove();
  }
}

function setPhoneStatus(validStatus){
  if(validStatus === false){
    p_number.style.borderColor = 'red'
    if (!$('#phoneBud').length){
      $('#exampleInputPhone').after('<span class="badge bg-danger" id="phoneBud">Неверный телефон</span>')
        }
    }else{
     p_number.style.borderColor = 'grey'
     $('#phoneBud').remove();
  }
  
}

function setCommentStatus(validStatus){
  if(validStatus === false){
       comment.style.borderColor = 'red'
    if (!$('#commentBud').length){
      $('#exampleInputComment').after('<span class="badge bg-danger" id="commentBud">Длинна коментария должна быть больше 20 символов</span>')
        }
  }else{
         comment.style.borderColor = 'grey'
        $('#commentBud').remove();
  }
  
}


email.addEventListener('blur', function(e){
  if (!validateEmail(email.value)){
    setEmailStatus(false)
  }
  else{
    setEmailStatus(true)
  }
})

p_number.addEventListener('blur', function(e){
  if(!validatePhone(p_number.value)){
     setPhoneStatus(false)
  }
  else{
     setPhoneStatus(true)
  }

})

comment.addEventListener('blur', function(e){
  if(!validateComment(comment.value)){
    setCommentStatus(false)
  }
   else{
        setCommentStatus(true)
    }
})


function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validatePhone(phone){
  const re = /^0[0-9]{9}/;
  return re.test(phone);
}

function validateComment(comment){
  if(comment.length < 21){
    return false;
  }
  else{
    return true;
  }
}

function deshabilitarBoton(event){

  if(!validateEmail(email.value)){
    setEmailStatus(false)
  }
  if(!validatePhone(p_number.value)){
    setPhoneStatus(false)
  }
  if(!validateComment(comment.value)){
    setCommentStatus(false)
  }
  if (!validateEmail(email.value) | !validatePhone(p_number.value) | !validateComment(comment.value)){
    console.log("validator work")
    return false;
  }
  
  let cookie = document.cookie
  let csrfToken = cookie.substring(cookie.indexOf('=') + 1)
  $.ajax({
  type: "POST",
  url: '/user/',
  headers: {'X-CSRFToken': csrfToken},
  data: JSON.stringify({email: email.value, p_number:p_number.value, comment:comment.value}),
  contentType: "application/json",
  dataType: "json",
  success: function(data){
    console.log(data)
    form.reset()
    $('#subBad').show()
    setTimeout(function(){ $("#subBad").hide()},5000);
  }
});
}



