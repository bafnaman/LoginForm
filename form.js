var scriptURL = "https://script.google.com/macros/s/AKfycbyXlREl1XhxHvui6nNuPtCgF4r2hid37Zekb8SuXYlFG21ieDQ1GXvLZiw3ijKdnxXS/exec"

var form = document.forms['google-sheet']

form.addEventListener('submit', e=>{
    e.preventDefault()
    fetch(scriptURL,{method:'POST',body: new FormData(form)
    }).then(response => document.getElementById('form_alert').innerHTML = "Data has stored").catch(error => document.getElementById("form_alert").innerHTML = "Data was not stored")
})

