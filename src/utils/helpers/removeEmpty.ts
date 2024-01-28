import {
  omitBy, isEmpty, isNull, isUndefined,
} from 'lodash';

const removeEmpty = (obj: any) =>
  omitBy(obj, (x: any) => isEmpty(`${x}`) || isNull(x) || isUndefined(`${x}`));

export default removeEmpty;
