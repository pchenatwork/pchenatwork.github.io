export const _formDefinition = {
  formId: 1,
  formTypeId: 111,
  formTypeName: "AwvForm",
  form: {
    sections: [
      {
        title: "Annual Wellness Visit",
        description:
          "This form can be used to document your patients’ Annual Wellness Visits (AWV). Required steps and helpful tips have been included to aid in the process. All applicable fields must be addressed for the exam to be considered complete. Please submit the completed form no later than 7 days from the DOS.",
        hideInNavigationSidebar: true,
      },
      {
        title: "Personal Information",
        elements: [
          {
            $type: "datePicker",
            name: "dateOfService",
            label: "Date of Service",
          },
          {
            $type: "textField",
            name: "emergencyContactName",
            label: "Emergency Contact Name",
            isOptional: true,
          },
          {
            $type: "textField",
            name: "mrn",
            label: "MRN#",
            isOptional: true,
          },
        ],
      },
    ],
  },
};
