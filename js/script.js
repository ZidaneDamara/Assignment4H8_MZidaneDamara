document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('biodata')) {
        const biodata = JSON.parse(localStorage.getItem('biodata'));
        document.getElementById("display-nama").innerText = biodata.nama;
        document.getElementById("display-role").innerText = biodata.role;
        document.getElementById("display-availability").innerText = biodata.availability;
        document.getElementById("display-usia").innerText = biodata.usia;
        document.getElementById("display-lokasi").innerText = biodata.lokasi;
        document.getElementById("display-pengalaman").innerText = biodata.pengalaman;
        document.getElementById("display-email").innerText = biodata.email;
    }
});

function editButton() {
    const form = document.getElementById("form");
    form.style.display = "block";
    document.getElementById("nama").value = document.getElementById("display-nama").innerText;
    document.getElementById("role").value = document.getElementById("display-role").innerText;
    document.getElementById("availability").value = document.getElementById("display-availability").innerText;
    document.getElementById("usia").value = document.getElementById("display-usia").innerText;
    document.getElementById("lokasi").value = document.getElementById("display-lokasi").innerText;
    document.getElementById("pengalaman").value = document.getElementById("display-pengalaman").innerText;
    document.getElementById("email").value = document.getElementById("display-email").innerText;
}

function updateBiodata(event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value;
    const role = document.getElementById("role").value;
    const availability = document.getElementById("availability").value;
    const usia = document.getElementById("usia").value;
    const lokasi = document.getElementById("lokasi").value;
    const pengalaman = document.getElementById("pengalaman").value;
    const email = document.getElementById("email").value;

    // Update biodata info
    document.getElementById("display-nama").innerText = nama;
    document.getElementById("display-role").innerText = role;
    document.getElementById("display-availability").innerText = availability;
    document.getElementById("display-usia").innerText = usia;
    document.getElementById("display-lokasi").innerText = lokasi;
    document.getElementById("display-pengalaman").innerText = pengalaman;
    document.getElementById("display-email").innerText = email;

    // Save to localStorage
    const biodata = {
        nama,
        role,
        availability,
        usia,
        lokasi,
        pengalaman,
        email
    };
    localStorage.setItem('biodata', JSON.stringify(biodata));

    // Hide the form
    document.getElementById("form").style.display = "none";
}
