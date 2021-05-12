import { 
    IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonText 
} from '@ionic/react';

import './appbar.component.css';


interface ComponentProps {}
const AppBarComponent: React.FC<ComponentProps> = () => {
  return (
    <IonHeader translucent={false} className="appbar"
        style={{ 
            border: 'none',
            boxShadow: 'none',
            outline: 'none',
        }}
    >
        <IonToolbar 
            style={{ 
                border: 'none',
                boxShadow: 'none',
                outline: 'none',
            }}
        >

            <IonText color="primary" 
                style={{
                    fontWeight: 700,
                }}
            >
                FELIX
            </IonText>

            <IonButtons slot="primary">
                <IonButton color="primary"
                    style={{
                        '--border-radius': '40px',
                        borderRadius: '40px',
                        paddingLeft: '8px',
                        paddingRight: '8px',
                        backgroundColor: `var(--ion-color-secondary)`,
                        '--color': 'white',
                        color: 'white',
                        fontSize: '.76rem',
                    }}>
                    Contact Me
                </IonButton>
            </IonButtons>

        </IonToolbar>
    </IonHeader>
  );
};

export default AppBarComponent;
