import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react'
import './ExploreContainer.css'
import { ReactRender } from './ReactRender'

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <IonItem>
        <IonLabel position="floating">Кількість війська:</IonLabel>
        <IonInput type='number' id='amount' value='1' />
      </IonItem>
      <IonButton expand="block" onClick={ReactRender}>
        Результат
      </IonButton>
    </div>
  )
}

export default ExploreContainer
