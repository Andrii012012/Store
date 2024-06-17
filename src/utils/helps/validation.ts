interface IProps {
  arrayParentInput?: React.MutableRefObject<HTMLElement | null>[];
  checkbox?: {
    checkbox: React.MutableRefObject<HTMLDivElement | null>;
    status: boolean;
  }[];
}

type TOptions = Record<
  | "email"
  | "password"
  | "login"
  | "phone"
  | "address"
  | "name"
  | "surname"
  | "emailIndex"
  | "checkbox"
  | "area"
  | "postcode"
  | "locality"
  | "oldPassword"
  | "newPassword"
  | "repeatNewPassword"
  | "country",
  boolean
>;

export function changeColor(item: HTMLElement, duration = 4000) {
  let saveBorder = getComputedStyle(item).border;

  item.style.border = `1px solid red`;

  setTimeout(() => {
    item.style.border = saveBorder;
  }, duration);
}

let isCheck = true;

export default function validation(props: IProps): any {
  let { arrayParentInput, checkbox } = props;

  const options: TOptions = {
    email: true,
    password: true,
    login: true,
    phone: true,
    address: true,
    name: true,
    surname: true,
    oldPassword: true,
    newPassword: true,
    repeatNewPassword: true,
    emailIndex: true,
    checkbox: true,
    area: true,
    country: true,
    locality: true,
    postcode: true,
  };

  if (isCheck) {
    arrayParentInput?.forEach((item) => {
      const parent = item?.current;

      if (parent && parent instanceof HTMLElement) {
        const allInput: NodeListOf<HTMLInputElement> =
          document.querySelectorAll(`.${parent.className} input`);

        if (allInput.length && isCheck) {
           let newPassword: string | null = null;
          allInput.forEach((item) => {
            switch (item.name) {
              case "email": {
                let validationEmail =
                  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                if (!validationEmail.test(String(item.value).toLowerCase())) {
                  changeColor(item);
                  options.email = false;
                } else {
                  options.email = true;
                }
                break;
              }
              case "login": {
                if (item.value.length < 4) {
                  changeColor(item);
                  options.login = false;
                } else {
                  options.login = true;
                }
                break;
              }
              case "password": {
                if (item.value.length < 4) {
                  changeColor(item);
                  options.password = false;
                } else {
                  options.password = true;
                }
                break;
              }
              case "surname": {
                if (item.value.length < 2) {
                  changeColor(item);
                  options.surname = false;
                } else {
                  options.surname = true;
                }
                break;
              }
              case "name": {
                if (item.value.length < 2) {
                  changeColor(item);
                  options.name = false;
                } else {
                  options.name = true;
                }
                break;
              }
              case "country": {
                if (item.value.length < 2) {
                  changeColor(item);
                  options.country = false;
                } else {
                  options.country = true;
                }
                break;
              }
              case "address": {
                if (item.value.length < 2) {
                  changeColor(item);
                  options.address = false;
                } else {
                  options.address = true;
                }
                break;
              }
              case "locality": {
                if (item.value.length < 2) {
                  changeColor(item);
                  options.locality = false;
                } else {
                  options.locality = true;
                }
                break;
              }
              case "area": {
                if (item.value.length < 2) {
                  changeColor(item);
                  options.area = false;
                } else {
                  options.area = true;
                }
                break;
              }
              case "postcode": {
                if (item.value.length < 4) {
                  changeColor(item);
                  options.postcode = false;
                } else {
                  options.postcode = true;
                }
                break;
              }
              case "phone": {
                if (item.value.length < 9) {
                  changeColor(item);
                  options.phone = false;
                } else {
                  options.phone = true;
                }
                break;
              }
              case "oldPassword": {
                if (item.value.length < 4) {
                  changeColor(item);
                  options.oldPassword = false;
                } else {
                  options.oldPassword = true;
                }
                break;
              }
              case "newPassword": {
                if (item.value.length < 4) {
                  changeColor(item);
                  options.newPassword = false;
                } else {
                  options.newPassword = true;
                  newPassword = item.value;
                }
                break;
              }
              case "repeatNewPassword": {
                if (item.value !== newPassword) {
                  changeColor(item);
                  options.repeatNewPassword = false;
                } else {
                  options.repeatNewPassword = true;
                }
                break;
              }
            }
          });
        }
      }
    });

    if (checkbox) {
      checkbox.forEach((item) => {
        if (!item.status && item.checkbox.current instanceof HTMLElement) {
          changeColor(item.checkbox.current);
          options.checkbox = false;
        }
      });
    }

    const array: boolean[] = [];

    for (let key in options) {
      array.push(options[key as keyof TOptions]);
    }

    isCheck = false;

    setTimeout(() => {
      isCheck = true;
    }, 4000);

    return !array.includes(false);
  } else {
    return false;
  }
}
