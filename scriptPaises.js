
var json = '[ { "Name" : "Alfreds Futterkiste", "City" : "Berlin", "Country" : "Germany" }, { "Name" : "Berglunds snabbköp", "City" : "Luleå", "Country" : "Sweden" }, { "Name" : "Centro comercial Moctezuma", "City" : "México D.F.", "Country" : "Mexico" }, { "Name" : "Ernst Handel", "City" : "Graz", "Country" : "Austria" }, { "Name" : "FISSA Fabrica Inter. Salchichas S.A.", "City" : "Madrid", "Country" : "Spain" }, { "Name" : "Galería del gastrónomo", "City" : "Barcelona", "Country" : "Spain" }, { "Name" : "Island Trading", "City" : "Cowes", "Country" : "UK" }, { "Name" : "Königlich Essen", "City" : "Brandenburg", "Country" : "Germany" }, { "Name" : "Laughing Bacchus Wine Cellars", "City" : "Vancouver", "Country" : "Canada" }, { "Name" : "Magazzini Alimentari Riuniti", "City" : "Bergamo", "Country" : "Italy" }, { "Name" : "North/South", "City" : "London", "Country" : "UK" }, { "Name" : "Paris spécialités", "City" : "Paris", "Country" : "France" }, { "Name" : "Rattlesnake Canyon Grocery", "City" : "Albuquerque", "Country" : "USA" }, { "Name" : "Simons bistro", "City" : "København", "Country" : "Denmark" }, { "Name" : "The Big Cheese", "City" : "Portland", "Country" : "USA" }, { "Name" : "Vaffeljernet", "City" : "Århus", "Country" : "Denmark" }, { "Name" : "Wolski Zajazd", "City" : "Warszawa", "Country" : "Poland" } ]';

function myFunction(texto) {
    var arreglo = JSON.parse(texto);
    var i;
    var out = "<table><tbody>";
    var arrSort = [];
    var posicion;

    for(i = 0; i < arreglo.length; i++) {
        arrSort[i] = arreglo[i].Country;
    }
    
      arrSort.sort();
      
    /*prueba*/  
      for(i = 0; i < arrSort.length; i++) {
      console.log(arrSort[i]);
    }
    
      for(i = 0; i < arrSort.length; i++) {
          for(var j = 0; j < arreglo.length; j++) {
              
            if (arreglo[j].Country==arrSort[i]){
                if(posicion != j){
            out += "<tr><td>" +
            arreglo[j].Name +
            "</td><td>" +
            arreglo[j].City +
            "</td><td>" +
            arreglo[j].Country +
            "</td></tr>";
            posicion=j;                          
                    
                }
  
                    }
          }
     

    }
    
    
    out += "</tbody></table>"  
    document.getElementById("tablaPaises").innerHTML = out;
}

    myFunction(json);