# Frontend needs

Need result of model

- Cords Data (Box)
  - lat float
  - long float

# ML

- Grocery

  - Cor Grid

- Conflict and disaster

For the model there are 8 input fields that different ML projects

- Vegetation
- Transportation Networks
- Climate Suitability
- Pests
- Purchasing Power (GDP/Capita & Food Price)
- Food Storage Capacity
- Conflict/Disasters
- Food Wastage

All of these are associated with a data src, each one of these is called from the files itself. To See examples of those go to `ml/data engineering/`.

When these functions run, the output is set to a database.

```mermaid
  graph TD;
      Internet-->"Vegetation";
      Internet-->"Transportation Networks";
      Internet-->"Climate Suitability";
      Internet-->"Pests";
      Internet-->"Purchasing Power (GDP/Capita & Food Price)";
      Internet-->"Food Storage Capacity";
      Internet-->"Conflict/Disasters";
      Internet-->"Food Wastage";
```
