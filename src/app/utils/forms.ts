const processFormData = (form: HTMLFormElement | undefined) => {
  const formData = new FormData(form);
  const formDataJSON: { [x: string]: FormDataEntryValue } = {};

  formData.forEach((value, key) => (formDataJSON[key] = value));

  return formDataJSON;
};

export default processFormData;
