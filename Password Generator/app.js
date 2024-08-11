const form = document.querySelector("form");
let pass = "", len = 8;
console.log(document.querySelector("select").value);

copyPass();
setPassLength();

const generatePass = async () => {
    // let len = 8;
    const config1 = { headers: { "X-Api-Key": "RqeJckkWMkrG3eIpYJOLOg==1qMpcTwqlGFUcbjP" } };

    // for (let option of document.querySelectorAll("option"))
    //     if (option.selected === true)
    //         len = option.value;
    console.log(len);
    const res = await axios.get(`https://api.api-ninjas.com/v1/passwordgenerator?length=${len}`, config1);
    console.log(res.data);
    return res.data.random_password;
}

function setPassLength() {
    const select = document.querySelector("select");

    select.addEventListener("change", function () {
        len = this.value;
        console.log(len);
    })
}

function showPass(pass) {
    const divPass = document.querySelector("#password");
    divPass.innerHTML = `${pass} <i class="fa-regular fa-copy" id="copy"></i>`;
    copyPass();
}

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    pass = await generatePass();
    showPass(pass);
})

function copyPass() {
    document.querySelector("#copy").addEventListener("click", () => {
        navigator.clipboard.writeText(`${pass}`)
            .then(() => {
                console.log("Copied");
            })
            .catch(() => {
                console.log("Cannot copy");
            })
    })
}
