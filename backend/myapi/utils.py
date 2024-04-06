from aima3.logic import expr, FolKB
from myapi.models import Disease, Symptom

kb = FolKB()

def populate_kb():
    # Add all the symptoms to the knowledge base
    for symptom in Symptom.objects.all():
        kb.tell(expr("Symptom('{}')".format(symptom.name)))

    # Add all the diseases to the knowledge base
    for disease in Disease.objects.all():
        kb.tell(expr("Disease('{}')".format(disease.name)))

    # Get all the diseases with their symptoms from the database and add them to the knowledge base
    for disease in Disease.objects.all():
        symptoms = list(disease.symptoms.all())
        for symptom in symptoms:
            kb.tell(expr("HasSymptom('{}', '{}')".format(disease.name, symptom.name)))

    # Define the rule for diagnosing a disease based on the symptoms
    kb.tell(expr("forall_d(Disease(d) & forall_s(Symptom(s) & HasSymptom(d, s)), Diagnose(d))"))

def diagnose_disease(symptoms_str):
    # Split the symptoms string into individual symptoms
    symptoms = symptoms_str.split(',')

    # Count the number of shared symptoms between each disease and the provided symptoms
    disease_scores = {}
    for disease in Disease.objects.all():
        score = sum(1 for symptom in symptoms if kb.ask(expr("HasSymptom('{}', '{}')".format(disease, symptom))))
        disease_scores[disease] = score
    

    # Find the disease with the highest score (most accurate match)
    most_accurate_disease_id = max(disease_scores, key=disease_scores.get)
    
    return str(most_accurate_disease_id)

      
# Populate the knowledge base with diseases and symptoms
populate_kb()
