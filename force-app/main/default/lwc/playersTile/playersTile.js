import {
    LightningElement, api
} from 'lwc';
import  { NavigationMixin } from 'lightning/navigation';

export default class PlayersTile extends NavigationMixin(LightningElement) {
    @api player


    get isForward(){
        return this.player.Position__c.includes('Forward') 
      }

//esto lo que hace es deirigir al detalle del jugador en concreto
      navigateToRecordViewPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.player.Id,
                objectApiName: 'Player__c',
                actionName: 'view'
            },
        });
    }
}