public with sharing class PlayersServices {
    @AuraEnabled(cacheable=true)
    public static List<Player__c> getAllPlayer(){
        return[SELECT id,Name,Image__c,Position__c,Age__c,Value__c FROM Player__c];
    }
}