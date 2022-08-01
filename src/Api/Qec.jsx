export const ReadQec = async () => {
  const response = await (await fetch("http://localhost:5000/qec-results"))
    .json()
    .then(function (result) {
      return result;
    });
  return response;
};
export const ReadTeacherQec = async () => {
  const response = await (await fetch("http://localhost:5000/AuthStudentRating1"))
    .json()
    .then(function (result) {
      console.log(result);
      return result;
    });
  return response;
};
export const ReadMidQec = async () => {
  const response = await (await fetch("http://localhost:5000/qec-mid-results"))
    .json()
    .then(function (result) {
      return result;
    });
  return response;
};
export const ReadFinalQec = async () => {
  const response = await (
    await fetch("http://localhost:5000/qec-final-results")
  )
    .json()
    .then(function (result) {
      return result;
    });
  return response;
};
export const ReadSetting = async () => {
  const response = await (
    await fetch("http://localhost:5000/readSetting")
  )
    .json()
    .then(function (result) {
      return result;
    });
  return response;
};
