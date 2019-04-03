import {Source} from 'tallbag';
import {Metadata} from 'shadow-callbag';

declare const skip: <T>(
  max: number,
) => (source: Source<T, Metadata>) => Source<T, Metadata>;
export default skip;
