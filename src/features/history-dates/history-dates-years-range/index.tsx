import clsx from 'clsx';

import './style.scss';

interface Props {
  className?: string;
}

export const HistoryDatesYearsRange = ({className}: Props) => {
  return (
    <div className={clsx('history-dates-years-range', className)}>
      <span className="history-dates-years-range__start">1982</span>
      <span className="history-dates-years-range__end">1986</span>
    </div>
  );
};
