var convertBtn = document.getElementById("convert-button");
var outputLink = document.getElementById("output_box");
var messageContainer = document.getElementById("message-container");


convertBtn.addEventListener("click", () => {


    var inputLink = document.getElementById("input_box").value;
    if (inputLink == '') {
        messageContainer.innerHTML = "Invalid Link";
        messageContainer.classList = "message";
    }

    if (!inputLink) return
    var splitingInput = inputLink.split('/');

    var driveId = splitingInput[splitingInput.length - 2];

    var finalUrl = "https://drive.google.com/uc?export=download&id=" + driveId;

    outputLink.value = finalUrl;


    outputLink.addEventListener("click", () => {
        document.execCommand("copy");



    })

    outputLink.addEventListener("copy", (e) => {
        e.preventDefault();
        if (e.clipboardData) {
            e.clipboardData.setData("text/plain", outputLink.value);

            messageContainer.innerHTML = "Link Copied Successfully!";
            messageContainer.classList = "message";
        }
    })

});