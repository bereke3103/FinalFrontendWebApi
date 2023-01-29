function CreatePost() {
  return (
    <div>
      <form className="w-100 px-5">
        <h1 className="mt-5">Создать новый пост</h1>

        <div className="mt-5">
          <label className="h3 form-label">Заголово поста</label>
          <input type="text" className="form-control" name="title" />
        </div>

        <div className="mt-4">
          <label className="h3 form-label">Описание поста</label>
          <input type="text" className="form-control" name="description" />
        </div>

        <button className="btn btn-dark btn-lg w-100 mt5">Создать пост</button>
        <button className="btn btn-secondary btn-lg w-100 mt5">Отменить</button>
      </form>
    </div>
  );
}

export default CreatePost;
