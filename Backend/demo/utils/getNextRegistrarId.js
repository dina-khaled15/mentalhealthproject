import Doctor from "../models/Doctor.model.js";

export const getNextRegistrarId = async () => {
  const lastDoctor = await Doctor.findOne().sort({ registrarId: -1 });
  return lastDoctor ? lastDoctor.registrarId + 1 : 1001;
};
