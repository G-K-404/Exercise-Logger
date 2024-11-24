import eagle from './assets/logo.png'
function Navbar(){
    return(
        <div className="navbar">
            <div className="topr">
            <a href='/' className="logo"><img src={eagle} alt="" className="ico" />EL</a>
            </div>
        </div>
    )
}
export default Navbar