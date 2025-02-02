import { FC } from "react";
import { _formDefinition } from "./_formDefinition";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

import TextField from "@mui/material/TextField";
import { TElementRenderer, ISection, ISectionElement } from "./form.interfaces";
import SectionTitle from "./SectionTitle";
import { renderTextField } from "./TextField";
import { renderDatePicker } from "./DatePicker";

interface IProps {
  readOnly: boolean;
}

export const ElectronicAwvForm: FC<IProps> = (props) => {
  const methods = useForm();
  const { register, handleSubmit } = methods;
  // const { register, control, getValues } = useFormContext();
  const onMySubmit = (data: any) => alert(JSON.stringify(data));

  const formSections: ISection[] = _formDefinition?.form.sections; //.filter((x) => x.printOnly !== true)

  
 const elementRenderers_2 : Record<string, object> =  {
  textField: renderTextField,
}

  const elementRenderers: any = {
    /*
    ageField: renderAgeField,
    bodyMassIndexField: renderBodyMassIndexField,
    checkBoxList: renderCheckBoxList,
    commentedMultipleChoiceList: renderCommentedMultipleChoiceList,
    commentedScoredMultipleChoiceList: renderCommentedScoredMultipleChoiceList,
    datedBooleanList: renderDatedBooleanList,
    dateOfBirthPicker: renderDateOfBirthPicker,
    diagnosisHeading: renderDiagnosisHeading,
    dropDownList: renderDropDownList,
    dropDownListBoolean: renderDropDownListBoolean,
    gapsInCareViewer: renderGapsInCareViewer,
    genderPicker: renderGenderPicker,
    hccCodeDescriptionPicker: renderHccCodeDescriptionPicker,
    heightField: renderHeightField,
    icdDiagnosisPicker: renderIcdDiagnosisPicker,
    languagePicker: renderLanguagePicker,
    nullableRadioBoolean: renderNullableRadioBoolean,
    numericField: renderNumericField,
    objectList: renderObjectList,
    otherConditionsList: renderOtherConditionsList,
    painAssessmentSelection: renderPainAssessmentSelection,
    patientNameField: renderPatientNameField,
    phoneNumberField: renderPhoneNumberField,
    preventiveScreeningsList: renderPreventiveScreeningsList,
    radioBoolean: renderRadioBoolean,
    radioBooleanList: renderRadioBooleanList,
    radioSelection: renderRadioSelection,
    repeater: renderRepeater,
    scoredMultipleChoiceList: renderScoredMultipleChoiceList,
    sectionElementGroup: renderSectionElementGroup,
    standaloneLabel: renderStandaloneLabel,
    textArea: renderTextArea, */
    datePicker: renderDatePicker,
    textField: renderTextField,
    /*
    twoColumnPanel: renderTwoColumnPanel,
    verticalRadioSelection: renderVerticalRadioSelection
    */
  };

  const renderSectionElement: TElementRenderer = (
    element: ISectionElement,
    key: string,
    parentName?: string
  ) => {
    const renderer = elementRenderers[element.$type] as (
    //const renderer = elementRenderers_2[element.$type] as (
      element: ISectionElement,
      key: string,
      renderer: TElementRenderer,
      parentName?: string
    ) => JSX.Element;
    return (
      //evaluateCondition(element.condition, methods.watch, parentName) &&
      renderer && renderer(element, key, renderSectionElement, parentName)
    );
  };

  /*
  const _renderSectionElement: IElementRenderFunc = (
    element: ISectionElement,
    key: string,
    parentName?: string
  ) => {
    const renderer = elementRenderers[element.$type] as (
      element: ISectionElement,
      key: string,
      renderSectionElement: IElementRenderFunc,
      parentName?: string
    ) => JSX.Element;
    return (
      //evaluateCondition(element.condition, methods.watch, parentName) &&
      renderer && renderer(element, key, _renderSectionElement, parentName)
    );
  };

  const renderSectionElement_2 = (
    element: ISectionElement,
    key: string,
    parentName?: string
  ) => {
    const x = elementRenderers[element.$type]
    const y = x as (
      element: ISectionElement,
      key: string,
      renderSectionElement: IElementRenderer,
      parentName?: string
    ) => JSX.Element;
    debugger
    const renderer = elementRenderers[element.$type] as (
      element: ISectionElement,
      key: string,
      renderSectionElement: IElementRenderer,
      parentName?: string
    ) => JSX.Element;
    return (
      //evaluateCondition(element.condition, methods.watch, parentName) &&
      renderer && renderer(element, key, renderSectionElement_2, parentName)
    );
  };
  */

  return (
    <>
      ElectronicAwvForm shows here
      <FormProvider {...methods}>
        {
          // pass all methods into the context
        }
        <form onSubmit={handleSubmit(onMySubmit)}>
          <label>Test</label>
          <input {...register("test", { required: true })} />
          <label>Nested Input</label>
          <NestedInput />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            {...register("outlined-basic")}
          />
          {formSections.map((section: ISection, sectionIndex: number) => (
            <div
              key={`section-${sectionIndex}`}
              id={section.title}
              style={{ marginBottom: "48px" }}
            >
              <SectionTitle title={section.title} />

              {section.elements &&
                section.elements.map((x, elementIndex) => (
                  <fieldset
                    style={{ border: "none" }}
                    key={`element-field-set-${sectionIndex}-${elementIndex}`}
                    /*   disabled={
                            (!disableInReadOnlyModeOptOut[x.$type] && readOnly) ||
                            submitting ||
                            submitted ||
                            isAttesting
                        }
                            */
                  >
                    {renderSectionElement(x,`form-element-${sectionIndex}-${elementIndex}`)}
                  </fieldset>
                ))}
            </div>
          ))}
          <input type="submit" />
        </form>
      </FormProvider>
    </>
  );
};

function NestedInput() {
  const { register } = useFormContext(); // retrieve all hook methods

  return <input {...register("NestedInput")} />;
}
