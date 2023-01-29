import { Button } from 'react-bootstrap';

function MainPagePost() {
  return (
    <div className="container">
      <div className="row min-vh-100">
        <div className="col d-lex flex-column justify-content-center align-items-center">
          <div>
            <h1>Ваши посты</h1>
            <div className="mt-5">
              <Button variant="primary" size="lg">
                Получить все посты
              </Button>{' '}
              <Button variant="secondary" size="lg">
                Создать новый пост
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderPostsTable() {
  return (
    <div className="table-responsive mt-5">
      <table className="table table-bordered border-dark">
        <thead>
          <tr>
            <th scope="col">PostId (PK)</th>
            <th scope="col">Title</th>
            <th scope="col">Content</th>
            <th scope="col">CRUD Operations</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>

      <button
        // onClick={() => setPosts([])}
        className="btn btn-dark btn-lg w-100"
      >
        Empty posts array
      </button>
    </div>
  );
}

export default MainPagePost;
