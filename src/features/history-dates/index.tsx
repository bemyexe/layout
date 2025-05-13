import clsx from 'clsx';

import {HistoryDatesTitle} from './history-dates-title';

import './style.scss';

interface Props {
  className?: string;
}

export const HistoryDates = ({className}: Props) => {
  return (
    <section className={clsx('history-dates-container', className)}>
      <HistoryDatesTitle />
      HistoryDates
    </section>
  );
};
