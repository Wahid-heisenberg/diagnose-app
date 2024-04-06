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

# If a patient has four symptoms of a disease, then diagnose the disease

kb.tell(expr("""
forall([x, y, z, w], 
    implies(and_(HasSymptom(x, y), HasSymptom(x, z), HasSymptom(x, w)), 
        Diagnose(x))
)
"""))

# Modify the function to accept symptoms as one string separated by commas


def diagnose_disease(symptoms_str):
    # Split the symptoms string into individual symptoms
    symptoms = symptoms_str.split(',')
    #use the previpus defined logic to diagnose the disease
    possible_diseases = []
    for disease in Disease.objects.all():
        disease_expr = expr("Diagnose('{}')".format(disease.name))
        if all(bool(kb.ask(expr("HasSymptom('{}', '{}')".format(disease.name, symptom)))) for symptom in symptoms):
            possible_diseases.append(disease.name)
    return possible_diseases


