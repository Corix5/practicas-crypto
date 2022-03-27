function exportar(data, fileName){
    const a = document.createElement('a');
    const contenido = data,
    blob = new Blob([contenido], {type: "octet/stream"}),
    url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
};

function cifrar(){
    let textoEnPlano = document.getElementById("archivoSeleccionado").files[0].name;
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET',textoEnPlano, true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let texto = this.responseText; 
            let textoCodificado = btoa(texto);
            exportar(textoCodificado, "Marley_C.txt");
        }
    }
}

function desifrar(elemento){
    let textoCifrado = document.getElementById("archivoSeleccionado").files[0].name;
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET',textoCifrado, true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let texto = this.responseText; 
            let textoCodificado = atob(texto);
            exportar(textoCodificado, "Merley_D.txt");
        }
    }
}

