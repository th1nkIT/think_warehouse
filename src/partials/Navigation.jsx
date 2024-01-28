import myIcon from '../assets/img/citra.jpeg'

export default function Navigation() {
    return (
        <>
            {/* Navbars Extra Start */}
                <div className="navbars-extra">
                    <button type="button"><i className="bi-search"></i></button>
                    <form action="" name='searchBar'>
                        <input type="text" name="search" id="" placeholder='Search' />
                    </form>
                </div>
            {/* Navbars Extra End */}

            {/* Navbars Profil Start */}
                <div className="navbars-profil">
                    <button type="button"><i className="bi-bell"></i></button>
                    <button type="button">
                        <img src={myIcon} alt="Profil" />
                    </button>
                </div>
            {/* Navbars Profil End */}
        </>
    );
}