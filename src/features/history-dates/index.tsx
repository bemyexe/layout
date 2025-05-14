import clsx from 'clsx';

import {HistoryDatesCircle} from './history-dates-circle';
import {HistoryDatesTitle} from './history-dates-title';

import './style.scss';

interface Props {
  className?: string;
}

export const HistoryDates = ({className}: Props) => {
  return (
    <section className={clsx('history-dates-container', className)}>
      <HistoryDatesTitle />
      <HistoryDatesCircle className="circle-position" />
      HistoryDates
    </section>
  );
};
