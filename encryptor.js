function encryptHTML() {
    const html = document.getElementById('htmlInput').value;
    const key = document.getElementById('keyInput').value;
    
    if (!html) {
        alert('Please enter HTML code to encrypt');
        return;
    }
    
    // Simple XOR encryption (for demonstration)
    function xorEncrypt(text, key) {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }
        return btoa(result); // Base64 encode the result
    }
    
    const encrypted = xorEncrypt(html, key);
    document.getElementById('output').value = encrypted;
}

function copyToClipboard() {
    const output = document.getElementById('output');
    output.select();
    document.execCommand('copy');
    alert('Copied to clipboard!');
}
