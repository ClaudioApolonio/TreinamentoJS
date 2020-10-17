var inputElement = document.querySelector("#texto");
var buttonElement = document.querySelector("#botao");
var listElement = document.querySelector("#lista");

function loading() {

}

function render_repositorios() {
    listElement.innerHTML = '';
    var text = document.createTextNode('...Carregando');
    var loadingElement = document.createElement('li');
    loadingElement.appendChild(text);
    listElement.appendChild(loadingElement);

    if (inputElement.value !== '') {
       axios.get('https://api.github.com/users/'+inputElement.value+'/repos')
        .then(function(response){
            listElement.innerHTML = '';
            for (dataItem of response.data) {
                var itemElement = document.createElement("li");
                var text = document.createTextNode(dataItem.name);
                itemElement.appendChild(text);    
                listElement.appendChild(itemElement);
            }
        })
        .catch(function(error){
            error.response.status === 404 ? alert('Usuário não encontrado!') : alert(error.message);    
            listElement.innerHTML = '';                        
        });
    }
}

buttonElement.onclick = render_repositorios;