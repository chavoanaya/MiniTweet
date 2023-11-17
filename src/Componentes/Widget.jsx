import React from 'react'

function widget() {
  return (
    <div>
    <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="Buscar" placeholder="Buscar" aria-label="Buscar"/>
       <button class="btn btn-outline-primary " type="submit"><i class="bi bi-search"></i></button>
      </form>
     </div>
   </nav>
   <div class="card w-80 mx-auto mt-3">
    <div class="card-body">
     <h5 class="card-title">¿En que mood estás?</h5>
     <ul class="list-group">
     <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Comedia
        <button type="button" class="btn btn-primary">Seguir</button>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Literatura
        <button type="button" class="btn btn-primary">Seguir</button>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Ciencia
        <button type="button" class="btn btn-primary">Seguir</button>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Cultura Pop
        <button type="button" class="btn btn-primary">Seguir</button>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
    Anime
    <button type="button" class="btn btn-primary">Seguir</button>
  </li>
</ul>

  </ul>
  
   </div>
 </div>
</div>
  )
}

export default widget