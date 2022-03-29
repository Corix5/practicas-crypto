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
