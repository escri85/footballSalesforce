public with sharing class PlayersServices {
 
    @AuraEnabled(cacheable=true)
    public static List<Player__c> getFilteredPlayers(String searchName){
        String searchText = '%'+ searchName + '%';

        return[SELECT id,Name,Image__c,Position__c,Age__c,Value__c 
               FROM Player__c
               WHERE Name LIKE :searchText
               WITH SECURITY_ENFORCED
               ORDER BY Name
               ];
               
               
               //    String myTestString = 'TestName';
               //   List<sObject> sobjList = Database.query('SELECT Id FROM MyCustomObject__c WHERE Name = :myTestString');
    }


}