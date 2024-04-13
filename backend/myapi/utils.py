from aima3.utils import expr
from myapi.models import Disease, Symptom

# Define the knowledge base rules
kb_rules = []

# Initialize the working memory
working_memory = []

# Function to populate the knowledge base
# Function to populate the knowledge base
def populate_kb():
    global kb_rules
    

    # Add all the symptoms to the knowledge base
    for symptom in Symptom.objects.all():
        working_memory.append(expr(f"Symptom('{symptom.name}')"))

    # Add all the diseases to the knowledge base and create rules
    for disease in Disease.objects.all():
        # Create rules for each disease
        rule_antecedent = []
        for symptom in disease.symptoms.all():
            rule_antecedent.append(f"Symptom('{symptom.name}')")

        antecedent_expression = '&'.join(rule_antecedent)  # Combine antecedent atoms with '&'
        rule_consequent = f"Disease('{disease.name}')"
        rule = expr(f"({antecedent_expression}) >> {rule_consequent}")  # Construct rule
        kb_rules.append(rule)



# Function to perform backward chaining
def backward_chaining(hypothesis):
    agenda = [hypothesis]
    
    while agenda:
        current_hypothesis = agenda.pop(0)
        if current_hypothesis in working_memory:
            # If the current hypothesis is already in working memory, skip it
            continue
        for rule in kb_rules:
            # Iterate over each rule in the knowledge base
            if rule.op == ">>":
                # If the rule is of the form antecedent >> consequent
                antecedent, consequent = rule.args
                if consequent == current_hypothesis:
                    # If the consequent of the rule matches the current hypothesis
                    if all(expr(atom) in working_memory for atom in antecedent.args):
                        # If all antecedents are present in working memory, add consequent to working memory
                        working_memory.append(consequent)
                        # Print diagnostic information
                        print(f"Based on the rule: {rule}, the potential illness is {consequent}")
                        # No need to continue checking other rules, break out of the loop
                        break
                    else:
                        # If not all antecedents are present, add them to the agenda
                        for atom in antecedent.args:
                            if expr(atom) not in working_memory:
                                agenda.append(expr(atom))
            else:
                # Invalid rule format
                print("Invalid rule format")





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
        backward_chaining(expr(f"Disease('{disease.name}')"))
        if expr(f"Disease('{disease.name}')") in working_memory:
            diagnosed_diseases.append(disease)
            # print(f"Based on the symptoms provided, the potential illness is {disease.name}")

    # If multiple diseases are diagnosed, return the one with the most symptoms
    if diagnosed_diseases:
        most_accurate_disease = max(diagnosed_diseases, key=lambda d: len(d.symptoms.all()))
        return str(most_accurate_disease.name)
    else:
        return "No disease diagnosed."

# Populate the knowledge base with diseases and symptoms
populate_kb()
def showrules():
    for rule in kb_rules:
        antecedent, consequent = rule.args
        print( antecedent, "  ", consequent)
# showrules()
def showworkingmemory():
    for atom in working_memory:
        print( "-", atom)
# showworkingmemory()

symptoms1 = "Fever,Cough,Runny nose,Sore throat"
result1 = diagnose_disease(symptoms1)
print("Test Case 1 Result:", result1)  # Expected: Common cold or similar

# Test Case 2: Flu
symptoms2 = "Fever,Headache,Cough,Fatigue,Muscle aches"
result2 = diagnose_disease(symptoms2)
print("Test Case 2 Result:", result2)  # Expected: Flu or similar

# Test Case 3: No disease
symptoms3 = "Fever,Fatigue"
result3 = diagnose_disease(symptoms3)
print("Test Case 3 Result:", result3) 