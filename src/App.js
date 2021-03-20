// components 
import Header from './components/layout/Header';
import Content from './components/Content';

// css
import './css/style.css'

const App = () => {
  return (
    <div className="container">
      { /* including the Title and other components */}
      <Header />
      <Content />
    </div>
  );
}

export default App;
