// const btn = $('#rowBtn').click(function(){
//   var $item = $(this).closest("tr")   // Finds the closest row <tr> 
//                        // .find(".nr")     // Gets a descendent with class="nr"
//                        // .text();         // Retrieves the text within <td>

//     console.log($item)
// })

function changeStatus(e){
  console.log(e)
  console.log($(e).closest('tr'))
  var id_requeste = $(e).closest('tr')
                       .find("#reqID")     // Gets a descendent with class="nr"
                       .text();

   console.log(id_requeste, typeof(id_requeste))
  let cookie = document.cookie
  let csrfToken = cookie.substring(cookie.indexOf('=') + 1)
  $.ajax({
  type: "PUT",
  url: '/user/'+ id_requeste +'/',
  headers: {'X-CSRFToken': csrfToken},
  data: JSON.stringify({id:id_requeste ,status_requeste: 1}),
  contentType: "application/json",
  dataType: "json",
  success: function(data){
    console.log(data)
    window.location.reload(true); 
    location.reload()
   
  }
});
}

function deleteRequeste(e){
  var id_requeste = $(e).closest('tr')
                       .find("#reqID")     // Gets a descendent with class="nr"
                       .text();
let cookie = document.cookie
  let csrfToken = cookie.substring(cookie.indexOf('=') + 1)
  $.ajax({
  type: "DELETE",
  url: '/user/'+ id_requeste +'/',
  headers: {'X-CSRFToken': csrfToken},
  // data: JSON.stringify(),
  contentType: "application/json",
  dataType: "json",
  success: function(data){
    // location.reload()
      alert("Was deleted")
    $(e).closest('tr').remove()
  }
});

}