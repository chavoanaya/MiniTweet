import React from 'react'

function SideMenu() {
  return (
<nav class="nav flex-column">
        <a class="nav-link active" aria-current="page" href="#">
            <i class="bi bi-house-door-fill" style={{marginRight: '8px'}}></i>Inicio</a>
        <a class="nav-link" href="#">
        <i class="bi bi-search" style={{marginRight: '8px'}}></i>Explorar</a>
        <a class="nav-link" href="#">
        <i class="bi bi-bell" style={{marginRight: '8px'}}></i>Notificaciones</a>
        <a class="nav-link disabled" aria-disabled="true">
        <i class="bi bi-envelope-fill"style= {{marginRight: '8px'}}></i>Mensajes</a>
</nav>
    
  )
}

export default SideMenu