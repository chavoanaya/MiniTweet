import React from 'react';

function Feed() {
  return (
   <div>
      <div class="btn-group w-100" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-light">Para ti</button>
          <button type="button" class="btn btn-light">Siguiendo</button>
          <button type="button" class="btn btn-light"><i class="bi bi-gear"></i></button>
          </div>
          <div class="mb-3">
          <input type="text" class="form-control" id="formGroupExampleInput" placeholder="¡¿Qué estás pensando?!"/>
        <div class="col-12 text-end">
      <button type="submit" class="btn btn-primary">Publícalo</button>
    </div>
  </div> 
  </div>
   
  );
}

export default Feed;
