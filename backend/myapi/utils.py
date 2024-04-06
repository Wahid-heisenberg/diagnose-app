from aima3.logic import expr, FolKB
from myapi.models import Disease, Symptom

kb = FolKB()

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

# If a patient has some symptoms, we can diagnose the disease

# Define the rule for diagnosing a disease based on the symptoms
kb.tell(expr("forall_d(Disease(d) & forall_s(Symptom(s) >> HasSymptom(d, s)), Diagnose(d))"))






def diagnose_disease(symptoms_str):
    # Split the symptoms string into individual symptoms
    symptoms = symptoms_str.split(',')
    
    # Add symptoms to the knowledge base
    for symptom in symptoms:
        kb.tell(expr("HasSymptom('{}')".format(symptom)))
    
    # Get the disease that the patient has
    disease = None
    for d in kb.ask(expr("Diagnose(d)")):
        disease = d
    if disease is None:
        disease = "Unknown"

# Convert the Expr object to a string before returning
    return str(disease)




