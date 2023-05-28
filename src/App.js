import "./App.css";
import Comments from "./components/Comments";
import Likes from "./components/Likes";
import Title from "./components/Title";
function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img
              src="https://pibig.info/uploads/posts/2022-12/1670032616_3-pibig-info-p-fon-dlya-rabochego-stola-makbuk-krasivo-3.jpg"
              alt="surfing"
            />
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
