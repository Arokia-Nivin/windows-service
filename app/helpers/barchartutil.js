import { helper } from '@ember/component/helper';

export default helper(function barchartutil([arr] /*, named*/) {
  let data = [...arr];
  while (data.length < 5) {
    data.push({
      date: '',
      numberOfFiles: 0,
      height: 'height:0%',
    });
  }
  return data;
});