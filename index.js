//https://pokeapi.co/api/v2/pokemon/ditto


const pokemon = ()=>{
    const nome = document.getElementById("id_personagem").value  ;
      $.ajax({
        url: `https://pokeapi.co/api/v2/${nome}`,
        type:"get",
        success: function(result){
            console.log(result)
        }
    })

}
