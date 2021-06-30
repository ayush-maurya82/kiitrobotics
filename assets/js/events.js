

function submitdata(){
    let username = document.getElementById("username").value
    let usermail = document.getElementById("usermail").value
    let userbranch = document.getElementById("userbranch").value
    let useryear = document.getElementById("useryear").value
    let userphone = document.getElementById("userphone").value
    let userwhatsapp = document.getElementById("userwhatsapp").value
    let userdomain = document.getElementById("userdomain").value

    const db = firebase.firestore();

    db.collection("krsstudent").doc().set({
        fullName: username,
        mailId: usermail,
        branch: userbranch,
        year: useryear,
        phone: userphone,
        whatsappNum: userwhatsapp,
        domain: userdomain,
        createdAt : firebase.firestore.FieldValue.serverTimestamp(),
        
    })
        .then(() => {
            console.log("Document successfully written! in firestore");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });


    firebase.database().ref('krsstudent/').push().set({
        fullName: username,
        mailId: usermail,
        branch: userbranch,
        year: useryear,
        phone: userphone,
        whatsappNum: userwhatsapp,
        domain: userdomain,
        createdAt : firebase.firestore.FieldValue.serverTimestamp(),
    })
        .then(() => {
            alert("Registration Successfully done!");
            clearFields();
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}

function clearFields() {
    document.getElementById('username').value = "";
    document.getElementById('usermail').value = "";
    document.getElementById('userbranch').value = "";
    document.getElementById('useryear').value = "";
    document.getElementById('userphone').value = "";
    document.getElementById('userwhatsapp').value = "";
    document.getElementById('userdomain').value = "";
}