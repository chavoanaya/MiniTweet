function Feed() {
  return (
    <div>
      <div class="btn-group w-100" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-light">Para ti</button>
        <button type="button" class="btn btn-light">Siguiendo</button>
        <button type="button" class="btn btn-light"><i class="bi bi-gear"></i></button>
      </div>
      <div class="mb-3">
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="¡¿Qué estás pensando?!" />
        <div class="d-flex justify-content-between align-items-center">
        <button type="button" class="btn btn-primary"><i class="bi bi-images"></i></button>
        <button type="submit" class="btn btn-primary">Publícalo</button>
        </div>
        <div class="list-group mt-2">
  <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small>And some small print.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-body-secondary">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-body-secondary">And some muted small print.</small>
  </a>
  <a href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-body-secondary">3 days ago</small>
    </div>
    <p class="mb-1">Some placeholder content in a paragraph.</p>
    <small class="text-body-secondary">And some muted small print.</small>
  </a>
</div>
      </div>
    </div>
  );
}

export default Feed;

