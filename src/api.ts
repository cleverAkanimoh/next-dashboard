export const getAllRecords = async (id?: string) => {
  const request = await fetch(process.env.SITENAME + "/api/records");

  const response = await request.json();

  const records = response.records.data;

  id ? records.find((r: { ID: string }) => r.ID === id) : response;

  return records;
};
