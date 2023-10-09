import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';
import { Observable, Subject, flatMap, mergeMap, switchMap } from 'rxjs';
import { QualityattributeModel } from 'src/app/api/models';
import { JsonList } from 'src/app/api/models/qualityattribute-model';
import { QualityAttributeService } from 'src/app/api/services';
import { PhasesService } from 'src/app/services/phases.service';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent {
  public activeAttributes: Array<QualityattributeModel> = new Array<QualityattributeModel>();
  public activeColumnNames: string[] = [];
  formGroup = new FormGroup({});

  constructor(private qualityAttributeService: QualityAttributeService, private phasesService: PhasesService) {

    const fieldName = "m_product_category_id" as 'optionvalue' | 'groupname' | 'groupdescription' | 'c_project_attribute_group_id' | 'attributeseqno' | 'attributedescription' | 'ad_reference_id' | 'm_product_category_id' | 'm_product_id' | 'attributevaluetype' | 'attributevalue' | 'attributename'
    const value = 9000000;
    const operator = "equals" as "equals"  | "iContains" | "greaterOrEqual" | "lessOrEqual" | undefined;
    const token = "eyJjcmVhdGVkIjoxNjk2ODMzNTUwMjcyLCJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOiI5MDAwMDY4IiwidXNlcm5hbWUiOiJNYXR0ZW9DIiwiYWRfY2xpZW50X2lkIjoiOTAwMDAwMCIsImFkX29yZ19pZCI6IjAiLCJhZF9yb2xlX2lkIjoiOTAwMDAwMSIsImFkX2xhbmd1YWdlX2lkIjoiaXRfSVQiLCJhdXRob3JpemF0aW9ucyI6W119.O87c7wdZOhX0aM12NCI2PezXMl_APkUsq5e8RMf5HMYrfkdkMnYbY0LXxT4mFAQb02hf7vYnWUBPpNoVpegHBw";

    const params = {
      "AdesuiteToken": token, 
      "body": {
           "startRow": 0,
           "criteria" : [
             {
               "fieldName": fieldName as 'optionvalue' | 'groupname' | 'groupdescription' | 'c_project_attribute_group_id' | 'attributeseqno' | 'attributedescription' | 'ad_reference_id' | 'm_product_category_id' | 'm_product_id' | 'attributevaluetype' | 'attributevalue' | 'attributename',
               "value": value?.toString(),
               "operator": operator as 'iContains' | 'greaterOrEqual' | 'lessOrEqual' | 'equals'
             },
          ],
           "endRow": 50
      }};

    this.qualityAttributeService.fetch_3(params)
    .subscribe({
      next: (response) => {
        (response.data != undefined && response.data != null && response.data.length != 0) ?  this.activeAttributes = response.data.map<QualityattributeModel>((attribute) => {return this.filterJsonOptions(attribute)})  : console.log("Attributi non presenti!");
        this.activeColumnNames = this.activeAttributes.map((attribute) => {return attribute.attributename!});
        this.formGroup = new FormGroup({});

        this.activeAttributes.forEach((value,index) => {
          if(value.attributevaluetype == "Y") {
            this.formGroup.addControl("control-" + index.toString(), new FormControl(false, Validators.required));
          } else {
            this.formGroup.addControl("control-" + index.toString(), new FormControl('', Validators.required));
          }
        });

      },
      error: (error) => {
        console.log(error);
      }
  });

  }

  public filterJsonOptions(attribute: QualityattributeModel): QualityattributeModel {
    let json = attribute.optionvalue?.value.toString();
    let dataList: JsonList = {
      key: [],
      value: []
    };
    if(json != undefined) {
      const parsedJson = JSON.parse(json);
      const filteredValue = this.removeKeys(parsedJson.value, parsedJson.key);
      dataList = {
          key: parsedJson.key,
          value: filteredValue,
        };
    }

    return {
      ad_reference_id: attribute.ad_reference_id,
      attributedescription: attribute.attributedescription,
      attributename: attribute.attributename,
      attributeseqno: attribute.attributeseqno,
      attributevalue: attribute.attributevalue,
      attributevaluetype: attribute.attributevaluetype,
      c_project_attribute_group_id: attribute.c_project_attribute_group_id,
      groupdescription: attribute.groupdescription,
      groupname: attribute.groupname,
      m_product_category_id: attribute.m_product_category_id,
      m_product_id: attribute.m_product_id,
      optionvalue: {
        type: attribute.optionvalue?.type!,
        value: dataList
      }
    }
  
  }

  private removeKeys(values: string[], keys: string[]): string[] {
    let array : string[] = [];
    if(values != null && values.length) {
      values.forEach((value,index) => {
        const newValue = value.replaceAll(keys[index],"").replaceAll("-","").trim();
        array.push(newValue);
      }, array);
    }
    return array;
  }

  onSubmit() {
    console.info(this.formGroup.value);
  }

}