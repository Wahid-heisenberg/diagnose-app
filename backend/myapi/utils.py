from aima3.utils import expr
from myapi.models import Disease, Symptom
from collections import deque
# Define the knowledge base rules
kb_rules = []

# Initialize the working memory
working_memory = []

# Function to populate the knowledge base
def populate_kb():
    global kb_rules
    
    # Add all the symptoms to the knowledge base
    for symptom in Symptom.objects.all():
        working_memory.append(expr(f"Symptom('{symptom.name}')"))

    # Add all the diseases to the knowledge base and create rules
    for disease in Disease.objects.all():
        # working_memory.append(expr(f"Disease('{disease.name}')"))
        # Create rules for each disease
        rule_antecedent = []
        for symptom in disease.symptoms.all():
            rule_antecedent.append(f"Symptom('{symptom.name}')")

        antecedent_expression = '&'.join(rule_antecedent)  # Combine antecedent atoms with '&'
        rule_consequent = f"Disease('{disease.name}')"
        rule = expr(f"({antecedent_expression}) ==> {rule_consequent}")  # Construct rule
        kb_rules.append(rule)


# Function to perform backward chaining


def backward_chaining(hypothesis):
    agenda = deque([hypothesis])
    visited = set()
    diagnosed_diseases = []

    while agenda:
        current_hypothesis = agenda.popleft()

        if current_hypothesis in working_memory or current_hypothesis in visited:
            # If the current hypothesis is already in working memory or visited, skip it
            continue

        visited.add(current_hypothesis)

        for rule in kb_rules:
            if rule.op == "==>" and len(rule.args) == 2:  # Check if the rule format is valid
                antecedent, consequent = rule.args
                if consequent == current_hypothesis:
                    working_memory.append(expr(consequent))
                    # print(f"Added to Working Memory: {consequent}")
                    diagnosed_diseases.append(consequent)  # Add diagnosed disease
                else:
                    for atom in antecedent.args:
                        if expr(atom) not in working_memory and expr(atom) not in agenda:
                            agenda.append(expr(atom))

    return diagnosed_diseases





# Function to diagnose disease
def diagnose_disease(symptoms_str):
    global working_memory

    # Reset the working memory
    working_memory = []

    # Add user-provided symptoms to the working memory
    symptoms = symptoms_str.split(',')
    for symptom in symptoms:
        working_memory.append(expr(f"Symptom('{symptom.strip()}')"))

    # Perform backward chaining for each disease
    diagnosed_diseases = []
    for disease in Disease.objects.all():
        if backward_chaining(expr(f"Disease('{disease.name}')")):
            diagnosed_diseases.append(disease)
    print(" Diagnosed Diseases:")
    print(  diagnosed_diseases)
    for disease in diagnosed_diseases:
        Disease.objects.get(name=disease.name).symptoms.all()
        common_symptoms = set(symptoms).intersection(set([symptom.name for symptom in Disease.objects.get(name=disease.name).symptoms.all()]))
        print(f"Common Symptoms for {disease.name}: {common_symptoms}")
        #return the disease with the maximum number of common symptoms
    max_common_symptoms = max(diagnosed_diseases, key=lambda disease: len(set(symptoms).intersection(set([symptom.name for symptom in Disease.objects.get(name=disease.name).symptoms.all()]))) )
    if max_common_symptoms:
        return max_common_symptoms.name    
    else:
        return "No disease diagnosed."

# Populate the knowledge base with diseases and symptoms
populate_kb()
def showrules():
    for rule in kb_rules:
        antecedent, consequent = rule.args
        print( antecedent, " ==> ", consequent)
# showrules()
def showworkingmemory():
    for atom in working_memory:
        print( "-", atom)
# showworkingmemory()

symptoms1 = "Fever,Headache,Cough,Fatigue,Muscle aches,Sore throa,Runny nose"
result1 = diagnose_disease(symptoms1)
print("Test Case 1 Result:", result1)  # Expected: Common cold or similar

# Test Case 2: Flu
symptoms2 = "Runny nose,Sneezing,Cough"
result2 = diagnose_disease(symptoms2)
print("Test Case 2 Result:", result2)  # Expected: Flu or similar

# # Test Case 3: No disease
symptoms3 = "Fever,Fatigue"
result3 = diagnose_disease(symptoms3)
print("Test Case 3 Result:", result3) 