'use strict';

/**
 * @ngdoc service
 * @name chembiohubAssayApp.xlsservice
 * @description
 * # xlsservice
 * Factory in the chembiohubAssayApp.

 */

var schema = {
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
      }
  };


  var assayData = [
    {
      "assay_protocol_ref": "123",
      "assay_protocol_steps": 'Iterate killer; envisioneer schemas ROI global; ',
      "assay_cell_line": "Cell Line A",
      "assay_materials" : [
          {
          "material_name" : "Microscope",
          "material_manufacturer" : "Microscopes R US",
          "material_catalogue_number": "123456A"
        }
      ],

    },
    {
      "assay_protocol_ref": "456",
      "assay_protocol_steps": 'Capture strategic life-hacks scale one-to-one technologies enterprise e-enable, grow. Disintermediate',
      "assay_cell_line": "Cell Line B",
      "assay_materials" : [
          {
            "material_name" : "Ethanol",
            "material_manufacturer" : "Sigma Aldrich",
            "material_catalogue_number": "152637484"
          },
          {
            "material_name" : "Propanol",
            "material_manufacturer" : "Sigma Aldrich",
            "material_catalogue_number": "158787878"
          },

      ],

    },
    {
      "assay_protocol_ref": "789",
      "assay_protocol_steps": 'Webservices engineer, innovate mission-critical compelling. Cluetrain--incentivize benchmark incentivize ',
      "assay_cell_line": "Cell Line A",
      "assay_materials" : [
          {
          "material_name" : "Microscope",
          "material_manufacturer" : "Microscopes R US",
          "material_catalogue_number": "123456A"
        }
      ],

    },
  ]

  var experimentForm = [
      { type: "tabs",
        tabs: [
          {title: "Biological Information",
            format: "keyvalue",
            items : [
              'assay_protocol_ref',
              'assay_protocol_steps',
              'assay_cell_line'
            ]

          },
          {
            title: "Materials",
            format: "datatable",
            items : [
              'assay_materials'
            ]
          },
      ]
  }];



angular.module('chembiohubAssayApp')
  .factory('xlsservice', function () {
    // Service logic
    // ..

    // Public API here
    return {
      get: function () {
        return {
          schema:schema,
          experimentForm:experimentForm,
          assayData: assayData
        };
      },

      assayMaterials: function() {
        var mats = []
        angular.forEach(assayData, function(assay) {
          
          angular.forEach(assay.assay_materials, function(mat){
            var mats_per_assay = {}
            mats_per_assay.assay_protocol_ref = assay.assay_protocol_ref;
            mats_per_assay.material_name = mat.material_name;
            mats_per_assay.material_manufacturer = mat.material_manufacturer;
            mats_per_assay.material_catalogue_number = mat.material_catalogue_number;
            mats.push(mats_per_assay);

          });

          

        });

        return mats;
      }

    };
  });
