import { useState } from 'react'
import { 
    IonContent, IonHeader, IonPage, 
    IonTitle, IonToolbar,
    IonGrid, IonRow, IonCol,
} from '@ionic/react';

  
import AppBarComponent from '../../components/appbar/appbar.component';
import ContactSuccessComponent from './contact_success.component';
import ContactFormComponent from './contact_form.component';


import './contact_me.page.scss'


const ContactMePage = () => {
    const [isSuccessful, setIsSuccessful] = useState(false)
   

    return (
        <IonPage>
      
        <AppBarComponent />

        <IonContent fullscreen forceOverscroll={true}>
            <IonHeader collapse="condense">
            <IonToolbar>
                <IonTitle size="large">Blank</IonTitle>
            </IonToolbar>
            </IonHeader>

            <IonGrid>
                <IonRow>
                    <IonCol sizeXs="0" sizeSm="1" sizeMd="2" sizeLg="3"></IonCol>
                    <IonCol sizeXs="12" sizeSm="10" sizeMd="8" sizeLg="6">

                        {
                            isSuccessful
                              ? <ContactSuccessComponent />
                              : <ContactFormComponent 
                                    setIsSuccessful={setIsSuccessful}
                                />
                        }

                    </IonCol>
                    <IonCol sizeXs="0" sizeSm="1" sizeMd="2" sizeLg="3"></IonCol>
                </IonRow>
            </IonGrid>
            


        </IonContent>


        </IonPage>
    )
}

export default ContactMePage
