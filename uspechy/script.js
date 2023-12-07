function openPopup(imageSrc, text) {
    let popup = document.getElementById('popup');
    let popupImage = document.getElementById('popupImage');
    let popupText = document.getElementById('popupText');


    popupImage.src = imageSrc;
    popupText.textContent = text;
    popup.style.display = 'block';
}

function closePopup() {
    let popup = document.getElementById('popup');
    popup.style.display = 'none';
}