export type CategoryTypes = {
  priority: string;
  withAppointment: string;
  withoutAppointment: string;
};

const category: CategoryTypes = {
  priority: "P",
  withAppointment: "W",
  withoutAppointment: "A",
};

export function generateFourDigitNumber(c: keyof CategoryTypes): string {
  return `${category[c]} - ${Math.floor(1000 + Math.random() * 9000)}`;
}
