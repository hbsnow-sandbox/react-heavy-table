import { faker } from "@faker-js/faker";

type TableData = {
  id: string;
  firstName: string;
  lastName: string;
  job: string;
}[];

const tableData: TableData = [...new Array(2000)].map((_, i) => ({
  id: i.toString(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  job: faker.person.jobTitle(),
}));

export type { TableData };
export { tableData };
