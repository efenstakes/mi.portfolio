import { useState } from 'react'
import { 
    IonContent, IonHeader, IonPage, 
    IonTitle, IonToolbar,
    IonGrid, IonRow, IonCol,
    IonFab, IonFabButton, IonIcon,
    IonButton,
    IonItem,
    IonLabel,
    IonInput, IonTextarea,
    IonRadioGroup, IonRadio, IonText
  } from '@ionic/react';


import { 
    checkmarkDoneCircle,

} from 'ionicons/icons';
import VSpacerComponent from '../../components/v_spacer/v_spacer.component';


const ContactSuccessComponent = () => {
    return (
        <div className="contact_me_success">
            
            <IonIcon 
                icon={checkmarkDoneCircle} 
                color="primary"
                style={{
                    fontSize: '4rem'
                }}
                className="su_1"
            />

            <h2 className="su_3">
                Congratulations!
            </h2>
            <IonText className="su_4">
                Your request was sent successfully. I will get back to you shortly.
            </IonText>
            <VSpacerComponent space={4} />

            <IonButton 
                href="/" 
                className="app_button su_5"
            >
                Go Home
            </IonButton>


        </div>
    )
}

export default ContactSuccessComponent
