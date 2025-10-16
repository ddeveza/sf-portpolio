public without sharing class CaseStatus {
    @InvocableMethod(label='Get Case Status' description='Returns the status of a case given its ID')
    public static List<String> getCaseStatus(List<String> caseIds) {
        String caseNum = caseIds[0];
        if (caseNum == null) {
            return new List<String>{'Invalid Case ID'};
        }
        try {
            Case c = [SELECT Status FROM Case WHERE CaseNumber=:caseNum LIMIT 1];
            return new List<String>{c.Status};
        } catch (Exception e) {
            return new List<String>{e.getMessage()};
        }    
    } 
}