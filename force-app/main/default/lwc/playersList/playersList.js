import { LightningElement, wire} from 'lwc';
import getFilteredPlayers from '@salesforce/apex/PlayersServices.getFilteredPlayers';
export default class PlayersList extends LightningElement {

  searchText ="";


  @wire(getFilteredPlayers, {searchText: "$searchText",})players;

  handleChange(event){
    const evento = event.target.value;
    console.log('esto es el log ' + evento);
    this.searchText = evento;
  }
}