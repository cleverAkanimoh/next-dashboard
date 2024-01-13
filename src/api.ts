export const getAllRecords = async (id?: string) => {
  const request = await fetch(process.env.SITENAME + "/api/records");

  const response = await request.json();

  const records = response.records;

  id ? records.data.find((r: { ID: string }) => r.ID === id) : response;

  return records;
};
