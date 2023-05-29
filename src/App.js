import "./App.css";
import Comments from "./components/Comments";
import Likes from "./components/Likes";
import Title from "./components/Title";
import { motion } from "framer-motion";
function App() {
  const imgVariant = {
    visible: {
      y: -200,
      opacity: 0,
    },
    hidden: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <motion.img
              src="https://pibig.info/uploads/posts/2022-12/1670032616_3-pibig-info-p-fon-dlya-rabochego-stola-makbuk-krasivo-3.jpg"
              alt="surfing"
              initial={"visible"}
              animate={"hidden"}
              variants={imgVariant}
              transition={{
                duration: 1,
              }}
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
