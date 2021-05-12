import { IonCol, IonGrid, IonRow, IonText, IonTitle } from '@ionic/react';

import VSpacerComponent from '../v_spacer/v_spacer.component';


import img from '../../assets/1.jpg'

import './welcome.component.scss';


interface ComponentProps {}
const WelcomeComponent: React.FC<ComponentProps> = () => {
  return (
    <div className="welcome">
        <IonGrid>
            <IonRow>

                {/* who */}
                <IonCol sizeXs="12" sizeMd="6">
                    <div className="welcome_content">
                        
                        <p className="su_1 welcome_content__title_1">
                            I Transform
                        </p>
                        {/* <VSpacerComponent space={.5} /> */}
                        <p className="su_2 welcome_content__title_2">
                            Ideas into Products.
                        </p>
                        <VSpacerComponent space={1} />
                        <IonText>
                            <p className="su_3 welcome_content__text">
                                and I'm Felix
                            </p>
                        </IonText>

                    </div>
                </IonCol>
                
                {/* image */}
                <IonCol sizeXs="12" sizeMd="6">
                    <div className="welcome_image__container">
                        <img
                            className="su_2 welcome_image__container__image" 
                            src={img} 
                        />
                        <IonText>
                            <h1 className="fd_10 welcome_image__container__text">
                                FELIX
                            </h1>
                        </IonText>
                    </div>

                </IonCol>

            </IonRow>
        </IonGrid>
    </div>
  );
};

export default WelcomeComponent;
