// import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile';
import myPhoto from "./profil.jpg"

function App() {
  const fullName="Dhouha Mansour"
  const bio="Tunisian girl"
  const profession="Embedded system ingineer"
  const handleName=()=>{alert("Mansour Dhouha")}
  return (
    <div className="App">
      <Profile fullName={fullName} bio={bio} profession={profession} alert={handleName}>
        <img src={myPhoto} alt="profile" width="400px" height="400px"/> 
      </Profile> 
    </div>  
  );
}

export default App;
