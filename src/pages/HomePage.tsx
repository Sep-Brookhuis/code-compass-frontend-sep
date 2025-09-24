import HomePageComponent from "../components/HomePageComponent.tsx";
import LogoutComponent from "../components/LogoutComponent.tsx";

function HomePage() {
    return (
        <div>
            <LogoutComponent></LogoutComponent>
            <HomePageComponent></HomePageComponent>
        </div>
    )
}

export default HomePage;