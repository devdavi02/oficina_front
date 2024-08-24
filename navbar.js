document.addEventListener('DOMContentLoaded', function() {

    const menuHTML = `
<nav class="navbar navbar-expand-lg navbar-light" style="background-color:DodgerBlue;">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Flávio do Pneu Estourado</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Ordem de Serviço</a>
            </li>
            <li class="nav-item">
            <a class="nav-link active" href="#">Features</a>
            </li>
            <li class="nav-item">
            <a class="nav-link active" href="#">Pricing</a>
            </li>
        </ul>
        </div>
    </div>
</nav>
    `;

    document.getElementById('menu-container').innerHTML = menuHTML;

})