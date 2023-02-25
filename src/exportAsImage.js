import html2canvas from "html2canvas";

const exportAsImage = async (element, imageFileName) => {
    const canvas = await html2canvas(element, {useCORS:true});
    const image = canvas.toDataURL("image/png", 1.0);
    downloadImage(image, imageFileName);
  };

const downloadImage = (blob, fileName) => {
    var element = document.createElement("a")
    element.href = blob;
    element.download = fileName;
    element.click();
};

export default exportAsImage;