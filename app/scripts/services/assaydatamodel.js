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
                          {
                              "value": "D",
                              "label": "Direct protein target assigned"
                          },
                          {
                              "value": "H",
                              "label": "Homologous protein target assigned"
                          },
                          {
                              "value": "M",
                              "label": "Molecular target other than protein assigned"
                          },
                          {
                              "value": "N",
                              "label": "Non-molecular target assigned"
                          },
                          {
                              "value": "S",
                              "label": "Subcellular target assigned"
                          },
                          {
                              "value": "U",
                              "label": "Unknown"
                          }
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
                  "bioactivities":{
                      "title": "Add bioactivities for each compound that was added in the materials section",
                      "type": "object",
                      "properties": {
                          "activities": {
                              "type": "array",
                              "items": {
                                  "type": "object",
                                  "properties": {
                                      "standard": {
                                          "title": "Standard being meaqsured",
                                          "type": "string",
                                          "description": "What does this assay measure?"
                                      },
                                      "value": {
                                          "title": "Value",
                                          "type": "number",
                                          "description": "What is the value?"
                                      },
                                      "units": {
                                          "title": "Value",
                                          "type": "number",
                                          "description": "What are the units?"
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
     }
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
