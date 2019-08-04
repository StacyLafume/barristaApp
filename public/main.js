var complete = document.getElementById("done");
var trash = document.getElementsByClassName("fa-trash");
console.log(done)

      complete.addEventListener('click', function(){
        const name = this.parentNode.childNodes[1].innerText
        const order = this.parentNode.childNodes[3].innerText
        var msg = new SpeechSynthesisUtterance(name+order);
        window.speechSynthesis.speak(msg);
        fetch('order', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'order': order,
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const order= this.parentNode.parentNode.childNodes[3].innerText
        const barrista = this.parentNode.parentNode.childNodes[3].innerText

        fetch('orders', {
          method: 'delete',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'name': name,
            'order': order
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
