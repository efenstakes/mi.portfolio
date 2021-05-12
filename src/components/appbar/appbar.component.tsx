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
                    fontFamily: 'Oswald',
                    letterSpacing: '1px'
                }}
                className="fd_4"
            >
                FELIX
            </IonText>

            <IonButtons slot="primary">
                <IonButton color="primary" fill="solid" 
                    size="default"
                    strong={true}
                    className="fd_6"
                    style={{
                        '--border-radius': '50px',
                        // borderRadius: '40px',
                        marginRight: '16px',
                        '--padding-start': '18px',
                        '--padding-end': '18px',
                        fontSize: '.7rem',
                    }}>
                    Contact Me
                </IonButton>
            </IonButtons>

        </IonToolbar>
    </IonHeader>
  );
};

export default AppBarComponent;
