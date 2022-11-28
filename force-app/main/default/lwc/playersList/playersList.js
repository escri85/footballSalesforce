import { LightningElement } from 'lwc';

export default class PlayersList extends LightningElement {

    players = [
        {
        Name: "Sergio",
        Value__c: 7000000,
        Image__c:"https://www.soyfutbol.com/__export/1630000963916/sites/debate/img/2021/08/26/mbappe_real_madrid_oficial_fichaje_psg_crop1630000597915.jpg_423682103.jpg",
        Position__c: "Forward",
        Team__c: "PSG"
    }, 
    {
        Name: "pablo",
        Value__c:5000000,
        Image__c:"https://www.soyfutbol.com/__export/1630000963916/sites/debate/img/2021/08/26/mbappe_real_madrid_oficial_fichaje_psg_crop1630000597915.jpg_423682103.jpg",
        Position__c: "defensa",
        Team__c: "madrid"
    }, 
    {
        Name: "Sergio",
        Value__c: 7000000,
        Image__c: "https://www.soyfutbol.com/__export/1630000963916/sites/debate/img/2021/08/26/mbappe_real_madrid_oficial_fichaje_psg_crop1630000597915.jpg_423682103.jpg",
        Position__c: "portero",
        Team__c: "barcelona"
    }
]
}