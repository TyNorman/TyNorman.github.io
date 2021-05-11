import logo from '../logo.svg';
import './Main.css';
import Header from '../components/Header';
import GameDisplay from '../components/GameDisplay';
import profilePic from '../assets/aboutme.jpg';
import cursedSeasons from '../assets/Twitter1.jpg'
import islandpopphoto from '../assets/Itch_Preview8.png'

function Main() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" fill="#ffffff"/> */}
        <div class="profile-icon">
                <img src={profilePic} />
        </div>

        <h1>Hello World!</h1>
        <p>
          Bing bong I'm slowly making a website here
        </p>

        <GameDisplay name="Cursed Seasons" icon={cursedSeasons}/>
        <GameDisplay name="IslandPop Photo" icon={islandpopphoto} />
      </header>
    </div>
  );
}

export default Main
