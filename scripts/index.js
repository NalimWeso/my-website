const originalText = document.querySelector('.email').innerText;
const originalColor = document.querySelector('.email').style.color;

function emailCopy() {
    navigator.clipboard.writeText('milanweso@gmail.com');

    document.querySelector('.email').innerText = 'Copied to Clipboard!';
    document.querySelector('.email').style.color = 'white';

    setTimeout(() => {
        document.querySelector('.email').innerText = originalText;
        document.querySelector('.email').style.color = originalColor;
    }, 1000);
}