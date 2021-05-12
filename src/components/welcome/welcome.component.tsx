import { IonCol, IonGrid, IonRow, IonText, IonTitle } from '@ionic/react';

import img from '../../assets/1.jpg'
import VSpacerComponent from '../v_spacer/v_spacer.component';

import './welcome.component.css';


interface ComponentProps {}
const WelcomeComponent: React.FC<ComponentProps> = () => {
  return (
    <div className="welcome">
        <IonGrid>
            <IonRow>

                {/* who */}
                <IonCol sizeXs="12" sizeMd="6">
                    <div className="welcome_content">
                        
                        <p className="welcome_content__title_1">
                            I Transform
                        </p>
                        <VSpacerComponent space={.5} />
                        <p className="welcome_content__title_2">
                            Ideas into Products.
                        </p>
                        <VSpacerComponent space={1} />
                        <IonText>
                            <p className="welcome_content__text">
                                and I'm Felix
                            </p>
                        </IonText>

                    </div>
                </IonCol>
                
                {/* image */}
                <IonCol sizeXs="12" sizeMd="6">
                    <div className="welcome_image__container">
                        <img
                            className="welcome_image__container__image" 
                            src={img} 
                        />
                        <IonText>
                            <h1 className="welcome_image__container__text">
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
