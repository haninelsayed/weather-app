import logo from '../assets/weather-app-logo.png';

export default function Header() {
    return (
        <header id='header'>
            <img src={logo} alt='logo showing a cloud and sun'/>
            <h1>Weather App</h1>
        </header>
    )
}