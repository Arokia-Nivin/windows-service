import { helper } from '@ember/component/helper';

export default helper(function increment([index]) {
  return index + 1;
});
