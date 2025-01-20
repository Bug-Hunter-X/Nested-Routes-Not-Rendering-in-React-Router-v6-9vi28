import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/*" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }
function NotFound() { return <h1>404 Not Found</h1>; }

function Users() {
  let params = useParams();
  return (
    <div>
      <h1>Users</h1>
      <p>Selected User ID: {params.userId}</p>  {/*This line handles params from the URL*/}
      <Routes>
        <Route path=':userId' element={<User />} />
      </Routes>
    </div>
  );
}

function User() {
    let { userId } = useParams();
    return (
      <div>
        <h1>User Detail</h1>
        <p>User ID: {userId}</p>
      </div>
    );
  }
export default App;