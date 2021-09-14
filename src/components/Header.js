
import {WiStars} from "react-icons/wi";
import {   GiAstronautHelmet} from "react-icons/gi";
import {RiGithubFill} from "react-icons/ri";
import { Button } from 'reactstrap';

function Header() {

    return (  
        <div className="container">
            <div className="text-start mt-2">
                <a  href="https://github.com/lihaokx/lihaokx-frontend-developer-intern-winter-2022"  target="_blank" rel="noreferrer" className="gitBtn">
                    <RiGithubFill size ="2rem"  />
                </a> 
            </div>
            <div className="row align-items-center">

                <div className = "col-md-8 offset-md-2 headertext ">
                    
                        <p className="headertext1 col ">I am <b> Hao Li</b>. Welcome to Spcacetagram</p>
                    
                        <p className="headertext2 col ">Share photos from <a href="https://api.nasa.gov/"  target="_blank" rel="noreferrer" > NASA’s APOD image API </a></p>
                        <a href = "#search" className="headertext2">
                          <Button> Get Started  </Button>
                        </a>
                </div>
                <div  className ="col-12 backgroundHead" >
                    <div className =" row " >
                        <div className ="col-md-2 offset-md-1">
                            <WiStars  size = "10rem" className="spaceIcon"/>
                        </div>
                        <div className ="col-md-2 offset-md-6">
                            <GiAstronautHelmet size = "15rem"  className="spaceIcon"/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Header;