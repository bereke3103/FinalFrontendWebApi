function UpdatePost() {
  return (
    <div>
      <form className="w-100 px-5">
        <h1 className="mt-5">Обновить ваш пост</h1>

        <div className="mt-5">
          <label className="h3 form-label">Заголовок поста</label>
          <input type="text" className="form-control" name="title" />
        </div>

        <div className="mt-4">
          <label className="h3 form-label">Описание поста</label>
          <input type="text" className="form-control" name="description" />
        </div>

        <button className="btn btn-dark btn-lg w-100 mt-5">
          Обновить пост
        </button>
        <button className="btn btn-secondary btn-lg w-100 mt-5">
          отменить
        </button>
      </form>
    </div>
  );
}

export default UpdatePost;
