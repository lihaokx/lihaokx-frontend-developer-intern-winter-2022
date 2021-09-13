import {
    Card, CardText, CardBody,  CardImg ,
    CardTitle, CardSubtitle,  Col, Row
  } from 'reactstrap'; 
import { RiHeartLine, RiFacebookLine, RiTwitterLine, RiCalendarLine, RiCopyrightLine } from 'react-icons/ri';
 
import {
    FacebookShareButton,
    TwitterShareButton
} from "react-share";
import { useEffect } from 'react';

const Picture = (props) => {
    const {pic, islike, setIslike, isExplan, setIsExplan} = props;

    useEffect(()=>{
        localStorage.setItem("islike", islike);
        console.log("islike: ", islike)
    }
        ,[islike]
    );

    return(
        <div  className ="col-md-6" >
        <Card className="mb-5 everyCard">
      
            <CardBody>
                <CardTitle tag="h5" className = "cardTitle">{pic.title}</CardTitle>
                <CardSubtitle tag="h6" className="  text-muted">  <RiCalendarLine  className = "mb-1"/> {pic.date}</CardSubtitle>
            </CardBody>
            <CardImg src= {pic.url}  className="imagesInCard" />
            <Row className = "socialRow">
                <Col xs ={{size: 2, offset: 1 }} md={{size: 1, offset: 1 }}>
                    <RiHeartLine    className = {islike[pic.id]? " dolike" : " notlike"}
                    onClick = {() => {
                        if(!islike[pic.id]){
                            setIslike(islike.map((curr, i)=>{
                                if(pic.id == i){curr = true;}
                                return curr;
                            }));
                        }
                        else{
                            setIslike(islike.map((curr, i)=>{
                                if(pic.id == i){curr = false;}
                                return curr;
                            }));
                        }

                    }}
                    />
                </Col>
                <Col xs ={2} md={1}> 
                    <FacebookShareButton url= {pic.url} >
                        <RiFacebookLine size ="2rem" className = "socialIcon"/>
                    </FacebookShareButton> 
                </Col>
                <Col xs ={2} md={1}> 
                    <TwitterShareButton url= {pic.url} >
                        <RiTwitterLine size ="2rem"   className = "socialIcon"/>
                    </TwitterShareButton> 
                </Col>
            </Row>
            <CardBody>
                {!isExplan[pic.id] ? 
                    <CardText  className="textInCard" > 
                         {pic.explanation.substring(0, 200)} ... <span className ="moreSpan" onClick={()=>{
                            setIsExplan(isExplan.map((currexplan, i)=>{
                                if(i=== pic.id){
                                    currexplan = true;
                                }
                                return currexplan;
                            }))

                        }}> more</span>  
                    </CardText>
                :    
                <div>  
                    <CardText  className="textInCard" > 
                        {pic.explanation} <span className ="lessSpan" onClick={()=>{
                                setIsExplan(isExplan.map((currexplan, i)=>{
                                    if(i===pic.id){
                                        currexplan = false;
                                    }
                                    return currexplan;
                                }))

                            }}> less</span> 
                        
                    </CardText> 
                    <p  className="copyright mt-2">
  
                    <RiCopyrightLine className = "mb-1"/>  { pic.copyright ?   "Copyright: "+ pic.copyright : ""}
                    </p> 
                </div>  
                
                } 
            </CardBody>
        </Card>
    </div>
    )
}

export default Picture;