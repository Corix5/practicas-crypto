function exportar(data, fileName){
    const a = document.createElement('a');
    const contenido = data,
    blob = new Blob([contenido], {type: "image/png"}),
    url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
};

function exportarImagen(){
    let can = document.getElementById("imgTest");
    let ctx = can.getContext("2d");
    var imagen = can.toDataURL("image/png").replace("image/jpeg",
    "image/octet-stream");
    window.location.href = imagen;
}
