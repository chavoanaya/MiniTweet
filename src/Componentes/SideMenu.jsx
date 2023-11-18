function SideMenu() {
    return (
      <div>
        <nav class="nav flex-column mt-2" > 
          <a class="nav-link active fs-5 align-items-center" aria-current="page" href="#" >
            <i class="bi bi-house-door-fill" style={{marginRight: '15px'}}></i>Inicio
          </a>
          <a class="nav-link active fs-5 align-items-center" href="#">
            <i class="bi bi-search" style={{marginRight: '15px'}}></i>Explorar
          </a>
          <a class="nav-link active fs-5 align-items-center" href="#">
            <i class="bi bi-bell" style={{marginRight: '15px'}}></i>Notificaciones
          </a>
          <a class="nav-link disabled fs-5 align-items-center" aria-disabled="true">
            <i class="bi bi-envelope-fill" style={{marginRight: '15px'}}></i>Mensajes
          </a>
          <a class="btn btn-primary mt-2" href="#" role="button">Publícalo</a>
        </nav>
        <div class="btn-group mt-2"> 
          <button class="btn btn-secondary btn-lg" type="button">
            Más Opciones
          </button>
          <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
          </ul>
        </div>
      </div>
    );
  }
  
  export default SideMenu;
  