import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const seq = Seq(object);

  const filtered = seq.filter((student) => {
    return student.score > 70;
  }).map((student) => {
    return {
      ...student,
      firstName: capFirstLetter(student.firstName),
      lastName: capFirstLetter(student.lastName)
    };
  });

  function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const JSObject = filtered.toJS();

  console.log(JSObject);
}
