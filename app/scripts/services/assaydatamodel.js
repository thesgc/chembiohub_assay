'use strict';

/**
 * @ngdoc service
 * @name chembiohubAssayApp.assayDataModel
 * @description
 * # assayDataModel
 * Factory in the chembiohubAssayApp.
 */

 var schema = {
              "type": "object",
              "properties": {
                  "assay_title": {
                      "title": "Assay Title",
                      "type": "string",
                      "description": "Describe the experiment"
                  },
                  "assay_hypothesis": {
                      "title": "Hypothesis",
                      "type": "string",
                      "description": "What did the experiment set out to prove"
                  },
                  "assay_publication": {
                      "title": "Publication / DOI for this Work",
                      "type": "string",
                      "description": "Include publication details if already published"
                  },
                  "assay_keywords": {
                      "title": "Keywords",
                      "type": "array",
                      "format": "uiselect",
                      "description": "Hit enter or comma to create a new item in the dropdown",
                      minItems: 1,
        maxItems: 4,
        items: [
          { value: 'one', label: 'label1'},
          { value: 'two', label: 'label2'},
          { value: 'three', label: 'label3'},
          { value: 'four', label: 'label4'},
          { value: 'five', label: 'label5'}
        ]
                  },
                  "assay_type": {
                      "title": "Assay Type",
                      "type": "string",
                      "description": "",
                      "enum": [
                          {
                              "value": "A",
                              "label": "ADME"
                          },
                          {
                              "value": "B",
                              "label": "Binding"
                          },
                          {
                              "value": "F",
                              "label": "Functional"
                          },
                          {
                              "value": "P",
                              "label": "Physicochemical"
                          },
                          {
                              "value": "T",
                              "label": "Toxicity"
                          }
                      ]
                  },
                  "target_organism": {
                      "title": "Target Organism",
                      "type": "string",
                      "description": "(Genus and species)"
                  },
                  "target_protein": {
                      "title": "Target Protein Name",
                      "type": "string",
                      "description": ""
                  },
                  "target_protein_uniprot_id": {
                      "title": "Target Protein Uniprot ID",
                      "type": "string",
                      "description": ""
                  },
                  "target_relationship_type": {
                      "title": "Target Relationship Type",
                      "type": "string",
                      "format": "uiselect",
                      "items": [
                           {"value":0,"description":"Default value - Target unknown or has yet to be assigned","label":"Unassigned"},
                           {"value":1,"description":"Target assigned is non-molecular","label":"Non-molecular"},
                           {"value":2,"description":"Target assigned is subcellular fraction","label":"Subcellular fraction"},
                           {"value":3,"description":"Target assigned is molecular non-protein target","label":"Molecular (non-protein)"},
                           {"value":4,"description":"Multiple homologous protein targets may be assigned","label":"Multiple homologous proteins"},
                           {"value":5,"description":"Multiple direct protein targets may be assigned","label":"Multiple proteins"},
                           {"value":6,"description":"Homologous protein complex subunits assigned","label":"Homologous protein complex"},
                           {"value":7,"description":"Direct protein complex subunits assigned","label":"Protein complex"},
                           {"value":8,"description":"Homologous single protein target assigned","label":"Homologous protein"},
                           {"value":9,"description":"Direct single protein target assigned","label":"Protein"}
                      ]
                  },
                  "assay_related_info_ref": {
                      "title": "Related Information Reference",
                      "type": "string",
                      "description": ""
                  },
                  "assay_protocol_number_of_replicates": {
                      "title": "Number of Replicates",
                      "type": "integer",
                      "description": ""
                  },
                  "assay_protocol_description_of_replicates": {
                      "title": "Description of Replicates",
                      "type": "string",
                      "description": ""
                  },
                  "assay_protocol_ref": {
                      "title": "Assay Protocol Reference",
                      "type": "string",
                      "description": ""
                  },
                  "assay_cell_line": {
                      "title": "Assay Cell Line",
                      "type": "string",
                      "description": ""
                  },
                  "assay_protocol_steps": {
                      "title": "Protocol Steps",
                      "type": "string"
                  },
                  "assay_materials": {
                      "title": "Add the items used in the experiment",
                      "type": "object",
                      "properties": {
                          "subforms": {
                              "title": "Material",
                              "type": "array",
                              "items": {
                                  "type": "object",
                                  "properties": {
                                      "material_name": {
                                          "title": "Material Name",
                                          "type": "string",
                                      },
                                      "material_manufacturer": {
                                          "title": "Material Type",
                                          "type": "string",
                                      },
                                      "material_catalogue_number": {
                                          "title": "Catalogue Number",
                                          "type": "string",
                                      }
                                  }
                              }
                          }
                      }
                  },
                  "assay_steps": {
                      "title": "Add the items used in the experiment",
                      "type": "object",
                      "properties": {
                          "steps": {
                              "type": "array",
                              "items": {
                                  "type": "object",
                                  "properties": {
                                      "description": {
                                          "title": "Step Description",
                                          "type": "string",
                                          "description": "Coming soon - add a material or compound list to a step by clicking"
                                      }
                                  }
                              }
                          }
                      }
                  },
                  "bioactivity_standard" : {
                                          "title": "Standard being measured",
                                          "type": "string",
                                          "format": "uiselect",
                                          "description": "What does this assay measure?",
                                          "items" : [
                                            {"value": "value", "label": "label"}
                                          ]
                                      },
                  "bioactivity_non_standard_units": {
                                          "title": "Non standard units",
                                          "type": "string",
                                          "description": "Enter the non standard units if used"
                                      },
                  "bioactivities":{
                      "title": "Add bioactivities for each compound that was added in the materials section",
                      "type": "object",
                      "properties": {
                          "activities": {
                              "title": "Bioactivities by Compound",
                              "type": "array",
                              "items": {
                                  "type": "object",
                                  "properties": {
                                      "compound_uox_id" : {
                                        "title": "UOX ID for Compound",
                                          "type": "number",
                                          "description": "Your compounds must be registered in order to use the assay registration system."
                                      },
                                      "bioactivity_value": {
                                          "title": "Bioactivity Value for Compound",
                                          "type": "number",
                                          "description": "What is the bioactivity value?"
                                      },
                                      "smiles": {
                                          "title": "Smiles String for Compound",
                                          "type": "number",
                                          "description": "Smiles string - for testing purposes"
                                      },
                                      // "data_quality_star_rating":{
                                        
                                      //   "description" : "Scientist's assesment of the quality of the data as a star rating"

                                      // }
                                      "data_quality_comments": {
                                          "title" : "Data Quality Comments",
                                          "type": "string",
                                          "format": "uiselect",
                                          "items": [],
                                          "description" : "Scientist's assesment of the quality of the data"
                                      },
                                      "data_quality_measurements": {
                                          "title" : "Measures of fit and data quality",
                                          "type": "string",
                                          "format": "uiselect",
                                          "items": [],
                                          "description": "Enter in the format p-value=0.13, hill=1.3, control SD=0.45 - whichever values are appropriate to the assay."
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          };

    var experimentForm = [
    { type: "tabs",
      tabs: [
      {title: "Biological Information",
        items : [
          'target_organism',
      'target_relationship_type',
      'target_protein',
      'target_protein_uniprot_id',
            'assay_cell_line',
      
        ]

      },
      {
      title: "Assay Information",
      items:
      [
      

      'assay_title',
      {
          "key": "assay_hypothesis",
          "type": "textarea",
          "placeholder": "List the goals of the experiment"
       },
       
      'assay_publication',
           
      'assay_related_info_ref',
        {
       key: 'assay_keywords',
       options: {
          tagging: function(content){
              var item = {
                value: content,
                label: content,
              }
              return item;
          } ,
          taggingLabel: '(adding new)',
          taggingTokens: ',',
       }
     },
      "bioactivity_standard",
          "bioactivity_non_standard_units",
    ]

    },{
      title: "Materials",
      items: [
         {
          "key" : "subforms",
          "type": "tabarray",
          "title": "{{value.material_name || ('Material ' + (1+$index))}}",
          items: [
          {"title": schema.properties.assay_materials.properties.subforms.items.properties.material_name.title, "key": "subforms[].material_name"},
          {"title": schema.properties.assay_materials.properties.subforms.items.properties.material_manufacturer.title, "key": "subforms[].material_manufacturer"},
        {"title": schema.properties.assay_materials.properties.subforms.items.properties.material_catalogue_number.title, "key": "subforms[].material_catalogue_number"}
      ]
        }
      ]

    },{
      title: "Steps",
      items: [
         {
          "key" : "steps",
          "type": "tabarray",
          "title": "{{value.test || ('Step '+(1+ $index) )}}",
          items: [
          {"key": "steps[].description", "type": "textarea", 
          "title" : schema.properties.assay_steps.properties.steps.items.properties.description.title, 
          "description": schema.properties.assay_steps.properties.steps.items.properties.description.description},
      ]
        }
      ]

    },{
      title: "Bioactivities",
      items: [
         
            {
            "key" : "activities",
           "title": "Bioactivities by Compound",
           "type" : "tabarray",
            "items": [ 


            {"key": "activities[].compound_uox_id" , 
                "type":  schema.properties.bioactivities.properties.activities.items.properties.compound_uox_id.type, 
                "title" : schema.properties.bioactivities.properties.activities.items.properties.compound_uox_id.title, 
                "description": schema.properties.bioactivities.properties.activities.items.properties.compound_uox_id.description},
             {"key": "activities[].bioactivity_value" , 
                "type":  schema.properties.bioactivities.properties.activities.items.properties.bioactivity_value.type, 
                "title" : schema.properties.bioactivities.properties.activities.items.properties.bioactivity_value.title, 
                "description": schema.properties.bioactivities.properties.activities.items.properties.bioactivity_value.description},
            {"key": "activities[].smiles" , 
                "type":  schema.properties.bioactivities.properties.activities.items.properties.smiles.type, 
                "title" : schema.properties.bioactivities.properties.activities.items.properties.smiles.title, 
                "description": schema.properties.bioactivities.properties.activities.items.properties.smiles.description},
            {"key": "activities[].data_quality_comments" , 
                "type":  schema.properties.bioactivities.properties.activities.items.properties.data_quality_comments.type, 
                "title" : schema.properties.bioactivities.properties.activities.items.properties.data_quality_comments.title, 
                "description": schema.properties.bioactivities.properties.activities.items.properties.data_quality_comments.description,
                "format":  schema.properties.bioactivities.properties.activities.items.properties.data_quality_comments.format ,
                options: {
                  tagging: function(content){
                      var item = {
                        value: content,
                        label: content,
                      }
                      return item;
                  } ,
                  taggingLabel: '(adding new)',
                  taggingTokens: ',',
               },
                "items" :  schema.properties.bioactivities.properties.activities.items.properties.data_quality_comments.items},
            {"key": "activities[].data_quality_measurements" , 
                "type":  schema.properties.bioactivities.properties.activities.items.properties.data_quality_measurements.type, 
                "title" : schema.properties.bioactivities.properties.activities.items.properties.data_quality_measurements.title, 
                "description": schema.properties.bioactivities.properties.activities.items.properties.data_quality_measurements.description,
                "format" : "uiselect" ,
                options: {
                  tagging: function(content){
                      var item = {
                        value: content,
                        label: content,
                      }
                      return item;
                  } ,
                  taggingLabel: '(adding new)',
                  taggingTokens: ',',
               },
                "items" : schema.properties.bioactivities.properties.activities.items.properties.data_quality_measurements.items}
            ]
         }
         
      ]

    }

    ]}


  ];

 


    
    var protocolForm = [
      'assay_protocol_number_of_replicates',
      'assay_protocol_description_of_replicates',
      'assay_protocol_ref',
     

    ];

angular.module('chembiohubAssayApp')
  .factory('assayDataModel', function () {
    // Service logic
    // ...

   

    // Public API here
    return {
      get: function () {
        return {
          schema:schema,
          experimentForm:experimentForm,
          protocolForm: protocolForm
        };
      }
    };
  });
