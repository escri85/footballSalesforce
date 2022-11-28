import { LightningElement, wire} from 'lwc';
import getAllPlayer from '@salesforce/apex/PlayersServices.getAllPlayer'
export default class PlayersList extends LightningElement {

  @wire(getAllPlayer) player;


}