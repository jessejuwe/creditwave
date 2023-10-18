export const firstNameRegEx = new RegExp(/^[A-Z][A-Za-z]{2,15}$/);

export const lastNameRegEx = new RegExp(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/);

export const fullNameRegEx = new RegExp(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/);

export const phoneNumberRegEx = new RegExp(/(\d{4})(\d{3})(\d{4})/);

// prettier-ignore
export const emailRegEx = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);

export const passwordRegEx = new RegExp(
  /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
);

export const strongPasswordRegEx = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
);
