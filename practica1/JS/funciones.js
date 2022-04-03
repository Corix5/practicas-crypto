function exportar(data, fileName){
    const a = document.createElement('a');
    const contenido = data,
    blob = new Blob([contenido], {type: "image/bmp"}),
    url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
};

function CifrarencodeImageFileAsURL(opc,modeOp) { //Esta función convierte la imagen a base 64 para convertir a cadena y despues utilizarla para cifrar
        let filesSelected = document.getElementById("inputFileToLoad").files;
        if (filesSelected.length > 0) {
          let fileToLoad = filesSelected[0];

          let fileReader = new FileReader();

          fileReader.onload = async function (fileLoadedEvent) {
            let srcData = fileLoadedEvent.target.result; // <--- data: base64       

            //Esto se usa para actilizar la ruta de la imagen y que se vea la imagen a cifrar
            await updateSrcImg(srcData);

            //Se envia la ruta de la imagen, la opción (cifrar o descifrar y el modo de operación)
            main(srcData,opc,modeOp);
          };
          fileReader.readAsDataURL(fileToLoad);

        }
      }   


function updateSrcImg(srcData){
  document.getElementById("imgD").src=srcData;
}




