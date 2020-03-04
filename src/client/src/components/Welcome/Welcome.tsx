import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import WelcomeCollapse from './WelcomeCollapse';

import poissonG from '../../assets/restau/poissonG.png';
import excursion from '../../assets/excursion/image001.jpg';

export default () => {
  return (
    <Container>
        <br/>
        <Row>
            <div className="welcome-image">
                <Col as='div' md={10}>
                    <div className="bg-light" style={{padding:'1rem 2rem', margin:'1rem'}}>
                        <h1 className="header-h">Passez vos vacances là où vivent les autres.</h1>
                        <br/>
                        <p className="header-p"> Ici vous ètes chez vous. Tous les services sont optimisés afin que vous passiez le meilleur moment possible. Un cadre calme et agrèable, une atmosphère chaleureuse, une table de qualité, tout cela servi avec une constante bonne humeur. Alors n'attendez plus et venez nous voir, nous vous attendons.</p>
                    </div>
                </Col>
            </div>
        </Row>
        <br/>
        <Row>
            <WelcomeCollapse/>
        </Row>
        <br/>
        <Row>
            <Col md={5}>
                <Container className="bg-dark">
                    <Row>
                        <h3 className="header-h">Restaurant <br/>Traiteur</h3>
                        <p className="header-p text-white">Notre restaurant au bourg de Saint-Louis de Marie Galante vous acceuille tout les midi pour de nouvelles découvertes. Au menu: Bébélé, Court-Bouillon de Poisson ou même Gratin de Fruit à Pain vous serons servit sous un autre jours. Pour toute demande de livraison (Traiteur), appelez nous directement.</p>
                    </Row>
                    <Row className="bg-light shadow-sm mx-auto">
                        <img style={{width:"100%"}} alt="poisson grillé et gratin de fruit a pain" src={poissonG} />
                    </Row>  
                </Container>
            </Col>
            <Col md={1}>
            </Col>
            <Col md={5}>
                <Container className="bg-dark shadow-sm mx-auto">
                    <Row>
                        <h3 className="header-h">Hébergement <br/> Réception</h3>
                        <p className="header-p">Au coeur de la campagne Marie-Galantaise, vous trouverez des hébergements tout confort dans un cadre idyllique. Un espace de vie considérable, du calme, ainsi qu'un accès gratuit et illimité à la wifi et la piscine en font une destination de retraite idéale pour des vacances en famille.</p>
                    </Row>
                    <Row className="bg-dark shadow-sm mx-auto">
                        <img style={{width:"100%"}} alt="refuge hulman vue depuis l'entré du site" src={excursion} />
                    </Row>
                </Container>
                
            </Col>
        </Row>
    </Container>
  )
}

