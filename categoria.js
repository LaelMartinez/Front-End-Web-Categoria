
function Editar(e){
    var url	= "http://localhost:8080/categorias/" + e;
    $.get( url, function( data ) {
		document.getElementById('codigo').value = data.codigo ;
		document.getElementById('nome').value = data.nome ;
	}, "json" );
    document.getElementById('nome').focus();
	
}
		
 
function Gravar(){
	const dadosForm = {
    codigo: document.getElementById('codigo').value,
    nome: document.getElementById('nome').value
    };

    var url	= "http://localhost:8080/categorias";
	

	$.ajax({
		url : url,
		method : "PUT",
		contentType : 'application/json',
		dataType : 'json',
		data : JSON.stringify(dadosForm)
		}).done(function(data) {
		    //console.log(categoria);
			//var codigo = data.codigo;
			//var nome = data.nome;
			//var mensagem = "Categoria codigo: " + codigo + " nome: " + nome + " Inserida com sucesso!";  
			//alert(mensagem);
			Limpar();
		}
	)
}


function Limpar(){
   document.location.reload(true);
}

function Excluir(e){

    var url	= "http://localhost:8080/categorias/" + e;
	

	$.ajax({
		url : url,
		method : "DELETE",
		contentType : 'application/json',
		dataType : 'json',
		data : JSON.stringify()
		}).done(function(data) {
//			var codigo = data.codigo;
//			var nome = data.nome;
//			var mensagem = "Categoria deletada: " + codigo + " nome: " + nome + " Inserida com sucesso!";  
//			alert(mensagem);
			Limpar();
		}
	)

}
function Listar(){
	var url = "http://localhost:8080/categorias"; 
		
    $.get( url , function( data ) {
		for (var i in data) {

			var tr = document.createElement("tr");
			
			var t = document.createElement("td");
			var texto=document.createTextNode(data[i].codigo);
			t.appendChild(texto);
			tr.appendChild(t);
			
			var t = document.createElement("td");
			var texto=document.createTextNode(data[i].nome);
			t.appendChild(texto);
			tr.appendChild(t);

			var t = document.createElement("td");
			var botao = document.createElement("BUTTON");
            botao.innerHTML = "E";
			//botao.setAttribute("id", "testebotao");
			botao.setAttribute("class", "btn btn-block btn-info");
			botao.setAttribute("onclick","javascript:Editar('" + data[i].codigo + "')");
			botao.setAttribute("type","button");
            t.appendChild(botao);
			tr.appendChild(t);
			

			var t = document.createElement("td");
			var botao = document.createElement("BUTTON");
            botao.innerHTML = "X";
			//botao.setAttribute("id", "testebotao");
			botao.setAttribute("class", "btn btn-block btn-danger");
			botao.setAttribute("onclick","javascript:Excluir('" + data[i].codigo + "')");
			botao.setAttribute("type","button");
            t.appendChild(botao);
			tr.appendChild(t);
			
 		    document.getElementById('corpo').appendChild(tr);
		}			
	}, "json" );

    document.getElementById('nome').focus();
}
