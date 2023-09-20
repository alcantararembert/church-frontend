import { formatTime, getCurrentDateTime } from "../util/utils";

export class Faithful {
  fullName: string | undefined;
  phoneNumber: string | undefined;
  birthday: string | undefined;
  originCity: string | undefined;
  country: string | undefined;
  originNetwork: string | undefined;
  createdDate: string | undefined;

  constructor(data?: Partial<Faithful>) {
    if (data?.birthday) {
      data.birthday = formatTime(new Date(data.birthday as string));
    }

    Object.assign(this, data, {
      createdDate: getCurrentDateTime()
    });
  }

}